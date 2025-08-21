export class Navigation {
    private navToggle: HTMLElement | null;
    private navMenu: HTMLElement | null;
    private navLinks: NodeListOf<Element>;

    constructor() {
        this.navToggle = document.getElementById('navToggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
    }

    public init(): void {
        this.setupMobileMenu();
        this.setupActiveLink();
        this.setupScrollEffect();
    }

    private setupMobileMenu(): void {
        if (this.navToggle && this.navMenu) {
            this.navToggle.addEventListener('click', () => {
                this.toggleMobileMenu();
            });

            // モバイルメニューのリンクをクリックした時にメニューを閉じる
            this.navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    this.closeMobileMenu();
                });
            });
        }
    }

    private toggleMobileMenu(): void {
        if (this.navMenu && this.navToggle) {
            this.navMenu.classList.toggle('active');
            this.navToggle.classList.toggle('active');
        }
    }

    private closeMobileMenu(): void {
        if (this.navMenu && this.navToggle) {
            this.navMenu.classList.remove('active');
            this.navToggle.classList.remove('active');
        }
    }

    private setupActiveLink(): void {
        // スクロール位置に基づいてアクティブリンクを更新
        window.addEventListener('scroll', () => {
            this.updateActiveLink();
        });
    }

    private updateActiveLink(): void {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = (section as HTMLElement).offsetTop;
            const sectionHeight = (section as HTMLElement).offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if ((link as HTMLAnchorElement).getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    private setupScrollEffect(): void {
        const header = document.querySelector('.header');
        
        window.addEventListener('scroll', () => {
            if (header) {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
        });
    }
}
