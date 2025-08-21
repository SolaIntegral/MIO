import { Navigation } from './components/navigation';
import { ContactForm } from './components/contact-form';
import { Animations } from './utils/animations';

export class App {
    private navigation: Navigation;
    private contactForm: ContactForm;
    private animations: Animations;

    constructor() {
        this.navigation = new Navigation();
        this.contactForm = new ContactForm();
        this.animations = new Animations();
        
        this.init();
    }

    private init(): void {
        // ナビゲーションの初期化
        this.navigation.init();
        
        // お問い合わせフォームの初期化
        this.contactForm.init();
        
        // アニメーションの初期化
        this.animations.init();
        
        // ボタンイベントの設定
        this.setupButtonEvents();
        
        // スムーススクロールの設定
        this.setupSmoothScroll();
        
        console.log('MIO Web App initialized successfully!');
    }

    private setupButtonEvents(): void {
        const getStartedBtn = document.getElementById('getStartedBtn');
        const learnMoreBtn = document.getElementById('learnMoreBtn');

        if (getStartedBtn) {
            getStartedBtn.addEventListener('click', () => {
                this.scrollToSection('features');
            });
        }

        if (learnMoreBtn) {
            learnMoreBtn.addEventListener('click', () => {
                this.scrollToSection('about');
            });
        }
    }

    private setupSmoothScroll(): void {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = (link as HTMLAnchorElement).getAttribute('href')?.substring(1);
                if (targetId) {
                    this.scrollToSection(targetId);
                }
            });
        });
    }

    private scrollToSection(sectionId: string): void {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}
