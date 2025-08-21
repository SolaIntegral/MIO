export class Animations {
    private observer: IntersectionObserver | null = null;

    constructor() {
        this.initIntersectionObserver();
    }

    public init(): void {
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupParallaxEffect();
    }

    private initIntersectionObserver(): void {
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );
    }

    private setupScrollAnimations(): void {
        const animatedElements = document.querySelectorAll(
            '.feature-card, .hero-content, .about-content, .contact-form'
        );

        animatedElements.forEach(element => {
            element.classList.add('animate-on-scroll');
            this.observer?.observe(element);
        });
    }

    private setupHoverEffects(): void {
        // ボタンのホバーエフェクト
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', this.createRippleEffect.bind(this));
        });

        // カードのホバーエフェクト
        const cards = document.querySelectorAll('.feature-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.classList.add('hover');
            });
            
            card.addEventListener('mouseleave', () => {
                card.classList.remove('hover');
            });
        });
    }

    private createRippleEffect(event: MouseEvent): void {
        const button = event.currentTarget as HTMLElement;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    private setupParallaxEffect(): void {
        const heroSection = document.querySelector('.hero');
        const heroImage = document.querySelector('.hero-image');

        if (heroSection && heroImage) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                (heroImage as HTMLElement).style.transform = `translateY(${rate}px)`;
            });
        }
    }

    public animateCounter(element: HTMLElement, target: number, duration: number = 2000): void {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target.toString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start).toString();
            }
        }, 16);
    }

    public fadeIn(element: HTMLElement, duration: number = 300): void {
        element.style.opacity = '0';
        element.style.display = 'block';
        
        let start = performance.now();
        
        const animate = (currentTime: number) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            element.style.opacity = progress.toString();
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }

    public fadeOut(element: HTMLElement, duration: number = 300): void {
        let start = performance.now();
        
        const animate = (currentTime: number) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            element.style.opacity = (1 - progress).toString();
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.style.display = 'none';
            }
        };
        
        requestAnimationFrame(animate);
    }
}
