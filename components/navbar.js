class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    width: 100%;
                    z-index: 100;
                    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
                }

                nav {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1.25rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: rgba(14, 23, 42, 0.92);
                    backdrop-filter: blur(14px);
                    -webkit-backdrop-filter: blur(14px);
                    transition: box-shadow 0.3s ease, padding 0.3s ease;
                }

                .logo a {
                    color: #64ffda;
                    font-weight: 700;
                    text-decoration: none;
                    font-size: 1.5rem;
                    letter-spacing: -0.5px;
                    transition: opacity 0.2s ease;
                }

                .logo a:hover { opacity: 0.8; }

                .nav-links {
                    display: flex;
                    list-style: none;
                    gap: 2rem;
                    margin: 0;
                    padding: 0;
                    align-items: center;
                }

                .nav-links a {
                    color: #ccd6f6;
                    text-decoration: none;
                    font-size: 0.88rem;
                    transition: color 0.25s ease;
                    position: relative;
                    padding-bottom: 4px;
                }

                .nav-links a::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    background: #64ffda;
                    bottom: 0;
                    left: 0;
                    transition: width 0.25s ease;
                }

                .nav-links a:hover,
                .nav-links a.active {
                    color: #64ffda;
                }

                .nav-links a.active::after,
                .nav-links a:hover::after {
                    width: 100%;
                }

                .nav-links .resume-btn {
                    border: 1px solid #64ffda;
                    border-radius: 4px;
                    padding: 0.45rem 1rem;
                    color: #64ffda;
                    font-size: 0.85rem;
                    transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease;
                }

                .nav-links .resume-btn::after { display: none; }

                .nav-links .resume-btn:hover {
                    background-color: rgba(100, 255, 218, 0.1);
                    box-shadow: 0 0 16px rgba(100, 255, 218, 0.18);
                    transform: translateY(-1px);
                }

                /* Mobile section title */
                .mobile-section-title {
                    display: none;
                    color: #ccd6f6;
                    font-size: 0.88rem;
                    font-weight: 500;
                    flex: 1;
                    text-align: center;
                    position: relative;
                    padding-bottom: 4px;
                    transition: color 0.3s ease;
                }

                .mobile-section-title.active { color: #64ffda; }

                .mobile-section-title::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    background: #64ffda;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    transition: width 0.35s ease;
                }

                .mobile-section-title.active::after { width: 50%; }

                /* Mobile hamburger */
                .mobile-menu-btn {
                    display: none;
                    flex-direction: column;
                    gap: 5px;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 4px;
                    z-index: 200;
                }

                .mobile-menu-btn span {
                    display: block;
                    width: 22px;
                    height: 2px;
                    background: #64ffda;
                    border-radius: 2px;
                    transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
                    transform-origin: center;
                }

                .mobile-menu-btn.open span:nth-child(1) {
                    transform: translateY(7px) rotate(45deg);
                }
                .mobile-menu-btn.open span:nth-child(2) {
                    opacity: 0;
                    width: 0;
                }
                .mobile-menu-btn.open span:nth-child(3) {
                    transform: translateY(-7px) rotate(-45deg);
                }

                /* Mobile drawer */
                .mobile-nav-drawer {
                    display: none;
                    position: fixed;
                    top: 0;
                    right: 0;
                    width: min(280px, 80vw);
                    height: 100vh;
                    background: rgba(17, 34, 64, 0.98);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    z-index: 150;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 2.5rem;
                    transform: translateX(100%);
                    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                    border-left: 1px solid rgba(100, 255, 218, 0.1);
                }

                .mobile-nav-drawer.open {
                    transform: translateX(0);
                }

                .mobile-nav-drawer a {
                    color: #ccd6f6;
                    text-decoration: none;
                    font-size: 1.1rem;
                    font-weight: 500;
                    transition: color 0.2s ease, transform 0.2s ease;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 4px;
                }

                .mobile-nav-drawer a:hover { color: #64ffda; transform: translateY(-2px); }

                .mobile-nav-drawer .drawer-num {
                    font-size: 0.72rem;
                    color: #64ffda;
                    font-weight: 400;
                }

                .mobile-nav-drawer .resume-btn-mobile {
                    border: 1px solid #64ffda;
                    border-radius: 4px;
                    padding: 0.6rem 1.4rem;
                    color: #64ffda;
                    margin-top: 1rem;
                    transition: background 0.25s ease;
                }

                .mobile-nav-drawer .resume-btn-mobile:hover {
                    background: rgba(100, 255, 218, 0.08);
                }

                /* Backdrop overlay */
                .drawer-backdrop {
                    display: none;
                    position: fixed;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.5);
                    z-index: 140;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .drawer-backdrop.open { opacity: 1; }

                @media (max-width: 768px) {
                    .nav-links { display: none; }
                    .mobile-menu-btn { display: flex; }
                    .mobile-section-title { display: block; }
                    .mobile-nav-drawer { display: flex; }
                    .drawer-backdrop { display: block; }
                }
            </style>

            <nav>
                <div class="logo"><a href="#introduction">KK</a></div>
                <div class="mobile-section-title active" aria-live="polite">00. Introduction</div>
                <button class="mobile-menu-btn" aria-label="Toggle menu" aria-expanded="false">
                    <span></span><span></span><span></span>
                </button>
                <ul class="nav-links">
                    <li><a href="#introduction"><span style="color:#64ffda;margin-right:4px">00.</span> Introduction</a></li>
                    <li><a href="#about"><span style="color:#64ffda;margin-right:4px">01.</span> About Me</a></li>
                    <li><a href="#experience"><span style="color:#64ffda;margin-right:4px">02.</span> Experience</a></li>
                    <li><a href="#projects"><span style="color:#64ffda;margin-right:4px">03.</span> Projects</a></li>
                    <li><a href="#contact"><span style="color:#64ffda;margin-right:4px">04.</span> Contact</a></li>
                    <li><a href="#" class="resume-btn">Resume</a></li>
                </ul>
            </nav>

            <div class="drawer-backdrop"></div>

            <div class="mobile-nav-drawer" role="navigation" aria-label="Mobile navigation">
                <a href="#introduction"><span class="drawer-num">00.</span>Introduction</a>
                <a href="#about"><span class="drawer-num">01.</span>About Me</a>
                <a href="#experience"><span class="drawer-num">02.</span>Experience</a>
                <a href="#projects"><span class="drawer-num">03.</span>Projects</a>
                <a href="#contact"><span class="drawer-num">04.</span>Contact</a>
                <a href="#" class="resume-btn-mobile">Resume</a>
            </div>
        `;

        // Mobile menu toggle
        const btn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const drawer = this.shadowRoot.querySelector('.mobile-nav-drawer');
        const backdrop = this.shadowRoot.querySelector('.drawer-backdrop');

        const openMenu = () => {
            btn.classList.add('open');
            btn.setAttribute('aria-expanded', 'true');
            drawer.classList.add('open');
            backdrop.classList.add('open');
            document.body.style.overflow = 'hidden';
        };

        const closeMenu = () => {
            btn.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
            drawer.classList.remove('open');
            backdrop.classList.remove('open');
            document.body.style.overflow = '';
        };

        btn.addEventListener('click', () => {
            btn.classList.contains('open') ? closeMenu() : openMenu();
        });

        backdrop.addEventListener('click', closeMenu);

        drawer.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', closeMenu);
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);
