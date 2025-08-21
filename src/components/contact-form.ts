interface FormData {
    name: string;
    email: string;
    message: string;
}

export class ContactForm {
    private form: HTMLFormElement | null;
    private submitButton: HTMLButtonElement | null;

    constructor() {
        this.form = document.getElementById('contactForm') as HTMLFormElement;
        this.submitButton = this.form?.querySelector('button[type="submit"]') as HTMLButtonElement;
    }

    public init(): void {
        if (this.form) {
            this.setupFormValidation();
            this.setupFormSubmission();
        }
    }

    private setupFormValidation(): void {
        if (!this.form) return;

        const inputs = this.form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input as HTMLInputElement | HTMLTextAreaElement);
            });

            input.addEventListener('input', () => {
                this.clearFieldError(input as HTMLInputElement | HTMLTextAreaElement);
            });
        });
    }

    private validateField(field: HTMLInputElement | HTMLTextAreaElement): boolean {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // フィールド固有のバリデーション
        switch (field.type) {
            case 'email':
                if (!value) {
                    errorMessage = 'メールアドレスを入力してください';
                    isValid = false;
                } else if (!this.isValidEmail(value)) {
                    errorMessage = '有効なメールアドレスを入力してください';
                    isValid = false;
                }
                break;
            case 'text':
                if (!value) {
                    errorMessage = 'お名前を入力してください';
                    isValid = false;
                }
                break;
            default:
                if (!value) {
                    errorMessage = 'メッセージを入力してください';
                    isValid = false;
                }
        }

        if (!isValid) {
            this.showFieldError(field, errorMessage);
        } else {
            this.clearFieldError(field);
        }

        return isValid;
    }

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    private showFieldError(field: HTMLInputElement | HTMLTextAreaElement, message: string): void {
        this.clearFieldError(field);
        
        field.classList.add('error');
        
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        
        field.parentNode?.appendChild(errorElement);
    }

    private clearFieldError(field: HTMLInputElement | HTMLTextAreaElement): void {
        field.classList.remove('error');
        
        const existingError = field.parentNode?.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
    }

    private setupFormSubmission(): void {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmission();
        });
    }

    private async handleFormSubmission(): Promise<void> {
        if (!this.form || !this.submitButton) return;

        // 全フィールドのバリデーション
        const inputs = this.form.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input as HTMLInputElement | HTMLTextAreaElement)) {
                isValid = false;
            }
        });

        if (!isValid) {
            return;
        }

        // 送信ボタンを無効化
        this.submitButton.disabled = true;
        this.submitButton.textContent = '送信中...';

        try {
            const formData = this.getFormData();
            await this.submitForm(formData);
            this.showSuccessMessage();
            this.form.reset();
        } catch (error) {
            this.showErrorMessage();
        } finally {
            // 送信ボタンを再有効化
            this.submitButton.disabled = false;
            this.submitButton.textContent = '送信';
        }
    }

    private getFormData(): FormData {
        const formData = new FormData(this.form!);
        return {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            message: formData.get('message') as string
        };
    }

    private async submitForm(data: FormData): Promise<void> {
        // 実際のAPIエンドポイントに送信する代わりに、コンソールに出力
        console.log('Form data submitted:', data);
        
        // 実際の実装では、ここでAPIにPOSTリクエストを送信
        // const response = await fetch('/api/contact', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // });
        
        // シミュレーション用の遅延
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    private showSuccessMessage(): void {
        this.showMessage('メッセージが正常に送信されました。ありがとうございます！', 'success');
    }

    private showErrorMessage(): void {
        this.showMessage('送信に失敗しました。しばらく時間をおいて再度お試しください。', 'error');
    }

    private showMessage(message: string, type: 'success' | 'error'): void {
        const messageElement = document.createElement('div');
        messageElement.className = `form-message ${type}`;
        messageElement.textContent = message;

        this.form?.appendChild(messageElement);

        // 3秒後にメッセージを削除
        setTimeout(() => {
            messageElement.remove();
        }, 3000);
    }
}
