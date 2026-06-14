document.addEventListener('DOMContentLoaded', function () {

    /* =========================================
       PAGE LOADER
    ========================================= */
    const loader = document.getElementById('page-loader');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('hidden');
                triggerHeroAnimations();
            }, 600);
        });
        // Fallback: remove loader after 2.5s regardless
        setTimeout(() => {
            loader && loader.classList.add('hidden');
            triggerHeroAnimations();
        }, 2500);
    } else {
        triggerHeroAnimations();
    }

    /* =========================================
       HERO ENTRANCE
    ========================================= */
    function triggerHeroAnimations() {
        document.querySelectorAll('.hero-animate').forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }

    /* =========================================
       SCROLL PROGRESS BAR
    ========================================= */
    const progressBar = document.getElementById('scroll-progress');
    function updateProgress() {
        if (!progressBar) return;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
        progressBar.style.width = pct + '%';
    }

    /* =========================================
       CUSTOM CURSOR
    ========================================= */
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    let followerX = 0, followerY = 0;
    let cursorX = 0, cursorY = 0;
    let rafId;

    if (cursor && follower && window.matchMedia('(hover: hover)').matches) {
        document.addEventListener('mousemove', e => {
            cursorX = e.clientX;
            cursorY = e.clientY;
            cursor.style.left = cursorX + 'px';
            cursor.style.top  = cursorY + 'px';
        });

        function animateFollower() {
            followerX += (cursorX - followerX) * 0.14;
            followerY += (cursorY - followerY) * 0.14;
            follower.style.left = followerX + 'px';
            follower.style.top  = followerY + 'px';
            rafId = requestAnimationFrame(animateFollower);
        }
        animateFollower();

        // Hover effect on interactive elements
        document.querySelectorAll('a, button, .tech-tag, .cta-btn, .contact-email-btn').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hovered');
                follower.classList.add('hovered');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hovered');
                follower.classList.remove('hovered');
            });
        });

        document.addEventListener('mouseleave', () => { follower.style.opacity = '0'; });
        document.addEventListener('mouseenter', () => { follower.style.opacity = '1'; });
    }

    /* =========================================
       SCROLL-REVEAL (universal)
    ========================================= */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const delay = parseFloat(el.dataset.delay || 0);
                setTimeout(() => {
                    el.classList.add('visible');
                }, delay * 1000);
                revealObserver.unobserve(el);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
        revealObserver.observe(el);
    });

    /* =========================================
       EXPERIENCE ITEMS (staggered)
    ========================================= */
    const expObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                expObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.experience-item').forEach((item, i) => {
        item.style.transitionDelay = (i * 0.08) + 's';
        expObserver.observe(item);
    });

    /* =========================================
       PROJECT CARDS (staggered reveal)
    ========================================= */
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                projectObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    document.querySelectorAll('.project-card').forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`;
        projectObserver.observe(card);
    });

    /* =========================================
       SMOOTH ANCHOR SCROLLING
    ========================================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
        });
    });

    /* =========================================
       NAVBAR: scroll shadow + hide/show on direction
    ========================================= */
    const navbar = document.querySelector('custom-navbar');
    let lastScrollY = window.scrollY;
    let scrollDir = 'up';
    let navbarHidden = false;

    function handleNavbarScroll() {
        const currentY = window.scrollY;
        const navEl = navbar?.shadowRoot?.querySelector('nav');

        // Shadow
        if (navEl) {
            navEl.style.boxShadow = currentY > 10
                ? '0 2px 24px rgba(0,0,0,0.35)'
                : 'none';
        }

        // Hide on scroll down (past hero), reveal on scroll up
        if (currentY > 80) {
            if (currentY > lastScrollY + 4) {
                if (!navbarHidden) {
                    navbar.style.transform = 'translateY(-100%)';
                    navbarHidden = true;
                }
            } else if (currentY < lastScrollY - 4) {
                if (navbarHidden) {
                    navbar.style.transform = 'translateY(0)';
                    navbarHidden = false;
                }
            }
        } else {
            navbar.style.transform = 'translateY(0)';
            navbarHidden = false;
        }

        lastScrollY = currentY;
    }

    /* =========================================
       ACTIVE NAV LINK
    ========================================= */
    const sections = document.querySelectorAll('section[id]');
    const mobileSectionTitle = navbar?.shadowRoot?.querySelector('.mobile-section-title');
    const navLinks = navbar?.shadowRoot?.querySelectorAll('.nav-links a');

    function updateActiveSection() {
        const scrollMid = window.scrollY + window.innerHeight * 0.4;
        let active = '';
        sections.forEach(s => {
            if (s.offsetTop <= scrollMid) active = s.id;
        });

        navLinks?.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${active}`);
        });

        if (mobileSectionTitle && active) {
            const activeSection = document.getElementById(active);
            if (activeSection) {
                const label = activeSection.dataset.label || '';
                mobileSectionTitle.textContent = label;
                mobileSectionTitle.classList.add('active');
            }
        }
    }

    // Throttled scroll handler
    let scrollTicking = false;
    window.addEventListener('scroll', () => {
        updateProgress();
        handleNavbarScroll();
        if (!scrollTicking) {
            requestAnimationFrame(() => {
                updateActiveSection();
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    }, { passive: true });

    // Init on load
    updateProgress();
    updateActiveSection();

    // Set scroll-margin for sections
    sections.forEach(s => { s.style.scrollMarginTop = '80px'; });

    /* =========================================
       SECTION HEADING reveal (set data-delay)
    ========================================= */
    document.querySelectorAll('section[id] > h2.reveal').forEach(h => {
        h.setAttribute('data-delay', '0');
    });
});
