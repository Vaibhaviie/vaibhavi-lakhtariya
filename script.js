/* ==========================================================================
   VAIBHAVI LAKHTARIYA - PORTFOLIO INTERACTIVITY & ANIMATIONS
   Includes: Custom Cursor, GSAP ScrollTrigger, 3D Card Tilt, Magnetic Buttons,
   Counter Trigger, Project Drawer Modal, Dark/Light Theme Switcher,
   Command Palette (Cmd+K), & Anti-Copying Deterrents
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. CUSTOM TRAILING CURSOR
    // ----------------------------------------------------------------------
    const cursorDot = document.getElementById('cursorDot');
    const cursorRing = document.getElementById('cursorRing');

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    if (cursorDot && cursorRing) {
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        });

        const renderCursor = () => {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;

            cursorRing.style.left = `${ringX}px`;
            cursorRing.style.top = `${ringY}px`;

            requestAnimationFrame(renderCursor);
        };
        requestAnimationFrame(renderCursor);

        const attachHoverTriggers = () => {
            const interactiveElements = document.querySelectorAll('a, button, .skill-tag, .project-card, .contact-method-item, input, textarea, .cmd-item');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => document.body.classList.add('hovering-interactive'));
                el.addEventListener('mouseleave', () => document.body.classList.remove('hovering-interactive'));
            });
        };
        attachHoverTriggers();
    }

    // ----------------------------------------------------------------------
    // 2. TOAST NOTIFICATION SYSTEM
    // ----------------------------------------------------------------------
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    let toastTimeout = null;

    function showToast(message) {
        // Disabled per user request - no toast banners will pop up
        return;
    }

    // ----------------------------------------------------------------------
    // 3. THEME TOGGLE SWITCHER (Dark / Light)
    // ----------------------------------------------------------------------
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');

    const setTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (themeIcon) {
                themeIcon.className = 'fa-solid fa-circle-half-stroke';
            }
            if (themeToggleBtn) {
                themeToggleBtn.setAttribute('aria-label', 'Switch to light theme');
            }
            localStorage.setItem('portfolio-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            if (themeIcon) {
                themeIcon.className = 'fa-solid fa-moon';
            }
            if (themeToggleBtn) {
                themeToggleBtn.setAttribute('aria-label', 'Switch to dark theme');
            }
            localStorage.setItem('portfolio-theme', 'light');
        }
    };

    // Load saved theme preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme('dark');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                setTheme('light');
                showToast('Switched to Warm Editorial Light Mode.');
            } else {
                setTheme('dark');
                showToast('Switched to Warm Obsidian Dark Mode.');
            }
        });
    }

    // ----------------------------------------------------------------------
    // 4. GSAP & SCROLLTRIGGER ANIMATIONS
    // ----------------------------------------------------------------------
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.hero-reveal', {
            y: 45,
            opacity: 0,
            duration: 1.1,
            stagger: 0.18,
            ease: 'power3.out'
        });

        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const targetVal = parseFloat(stat.getAttribute('data-target'));
            const decimals = parseInt(stat.getAttribute('data-decimals') || '0', 10);

            gsap.to(stat, {
                scrollTrigger: {
                    trigger: '.hero-stats-bar',
                    start: 'top 85%',
                    once: true
                },
                innerHTML: targetVal,
                duration: 2.2,
                ease: 'power2.out',
                snap: { innerHTML: decimals ? 0.1 : 1 },
                onUpdate: function() {
                    if (decimals) {
                        stat.innerHTML = parseFloat(this.targets()[0].innerHTML).toFixed(decimals);
                    }
                }
            });
        });

        const sections = document.querySelectorAll('.section-padding');
        sections.forEach(section => {
            const header = section.querySelector('.section-header');
            if (header) {
                gsap.from(header, {
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    },
                    y: 40,
                    opacity: 0,
                    duration: 0.9,
                    ease: 'power3.out'
                });
            }
        });

        gsap.from('.about-main-card, .about-side-wrapper > *', {
            scrollTrigger: {
                trigger: '#about',
                start: 'top 75%'
            },
            y: 40,
            opacity: 0,
            duration: 0.9,
            stagger: 0.18,
            ease: 'power3.out'
        });

        gsap.from('.skill-category-card', {
            scrollTrigger: {
                trigger: '#skills',
                start: 'top 75%'
            },
            y: 35,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out'
        });

        gsap.from('.project-card', {
            scrollTrigger: {
                trigger: '#projects',
                start: 'top 85%'
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            onComplete: function() {
                gsap.set('.project-card', { clearProps: 'y,opacity' });
            }
        });

        window.addEventListener('load', () => {
            ScrollTrigger.refresh();
        });
    }

    // ----------------------------------------------------------------------
    // 5. 3D PERSPECTIVE TILT ON PROJECT CARDS (Desktop with fine pointer only)
    // ----------------------------------------------------------------------
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (hasFinePointer) {
        const tiltCards = document.querySelectorAll('.tilt-card');
        tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const cardWidth = rect.width;
                const cardHeight = rect.height;
                const centerX = rect.left + cardWidth / 2;
                const centerY = rect.top + cardHeight / 2;
                const mouseX = e.clientX - centerX;
                const mouseY = e.clientY - centerY;

                const rotateX = (-mouseY / (cardHeight / 2)) * 7;
                const rotateY = (mouseX / (cardWidth / 2)) * 7;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
            });
        });

        // ----------------------------------------------------------------------
        // 6. MAGNETIC BUTTON EFFECT (Desktop only)
        // ----------------------------------------------------------------------
        const magneticBtns = document.querySelectorAll('.magnetic-btn');
        magneticBtns.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - (rect.left + rect.width / 2);
                const y = e.clientY - (rect.top + rect.height / 2);

                btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
            });

            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0px, 0px)';
            });
        });
    }

    // ----------------------------------------------------------------------
    // 7. PROJECT DETAIL SLIDE-OVER DRAWER MODAL DATA & CONTROLLER
    // ----------------------------------------------------------------------
    const PROJECT_DATA = {
        'impact-pt': {
            title: 'IMPACT Physical Therapy',
            category: 'Healthcare / Multi-Location',
            badge: '<i class="fa-solid fa-lock"></i> NDA Protected',
            intro: 'Multi-location healthcare web platform supporting 8 clinic locations across Illinois and 30+ specialized physical therapy treatment services built on custom WordPress architecture.',
            scores: { perf: 98, access: 100, best: 98, seo: 100 },
            architecture: [
                'Architected custom post types (CPT) for Treatment Directories, Clinic Locations, and Patient Testimonials.',
                'Integrated Advanced Custom Fields (ACF Pro) to build modular, drag-and-drop Gutenberg block layouts.',
                'Engineered an interactive location finder with geolocation filtering and clinic-specific scheduling routes.',
                'Optimized asset loading with WebP image delivery, asset minification, and browser caching, achieving sub-second LCP.'
            ],
            tags: ['WordPress', 'Custom Post Types', 'ACF Pro', 'Location Pages', 'Booking Flow', 'Speed Optimization']
        },
        'article-o-city': {
            title: 'ArticleOCity',
            category: 'Digital Publishing & Magazine',
            badge: '<i class="fa-solid fa-lock"></i> NDA Protected',
            intro: 'High-traffic content and digital magazine-style publishing platform featuring dynamic multi-level category structures, author profiles, and real-time newsletter sync.',
            scores: { perf: 96, access: 98, best: 100, seo: 100 },
            architecture: [
                'Structured hierarchical taxonomies supporting 50+ news categories and sub-topics with zero performance degradation.',
                'Designed custom magazine-style hero article grids with dynamic fallback image handling and featured tags.',
                'Implemented database query caching and REST API endpoints for seamless Mailchimp newsletter subscriptions.',
                'Wrote responsive SCSS grid systems ensuring seamless reading experiences across mobile, tablet, and desktop.'
            ],
            tags: ['WordPress', 'Magazine Layout', 'Custom Taxonomy', 'Newsletter Sync', 'Query Caching', 'SCSS']
        },
        'bonita-health': {
            title: 'Bonita Women\'s Health & Wellness',
            category: 'Healthcare / Women\'s Wellness',
            badge: '<i class="fa-solid fa-lock"></i> NDA Protected',
            intro: 'Modern clinical web platform for a specialized women\'s health practice with condition category guides, patient stories, and online appointment booking.',
            scores: { perf: 99, access: 100, best: 98, seo: 100 },
            architecture: [
                'Designed condition & treatment landing pages optimized for search visibility and patient conversion.',
                'Configured online appointment booking workflow integration with automated patient confirmation emails.',
                'Built lead-generation resource download forms connected with marketing tracking event listeners.',
                'Enforced strict WCAG AA web accessibility standards including aria-labels, high contrast modes, and keyboard navigation.'
            ],
            tags: ['WordPress', 'Category Pages', 'Booking Integration', 'Lead Gen Form', 'WCAG Accessibility']
        },
        'forge-fitness': {
            title: 'FORGE Fitness',
            category: 'Animated Wellness Brand',
            badge: '<i class="fa-solid fa-globe"></i> Live Project',
            intro: 'Premium animated fitness & wellness web application showcasing custom interactive front-end craftsmanship, scroll animations, and interactive sliders.',
            scores: { perf: 100, access: 98, best: 100, seo: 100 },
            architecture: [
                'Crafted 60fps scroll-triggered animations using hardware-accelerated CSS transforms and Vanilla JS.',
                'Built an interactive before/after transformation slider with touch & drag support.',
                'Designed an editorial typographic hierarchy using Syne and custom HSL color tokens.',
                'Deployed static build assets to Vercel global CDN with zero framework overhead.'
            ],
            tags: ['HTML5 / SCSS', 'Modern JS', 'Scroll Animations', 'Interactive Slider', 'Vercel Hosted']
        }
    };

    const modalBackdrop = document.getElementById('modalBackdrop');
    const projectDrawer = document.getElementById('projectDrawer');
    const drawerCloseBtn = document.getElementById('drawerCloseBtn');

    const drawerTitle = document.getElementById('drawerTitle');
    const drawerCategory = document.getElementById('drawerCategory');
    const drawerBadge = document.getElementById('drawerBadge');
    const drawerIntro = document.getElementById('drawerIntro');
    const lhPerf = document.getElementById('lhPerf');
    const lhAccess = document.getElementById('lhAccess');
    const lhBest = document.getElementById('lhBest');
    const lhSeo = document.getElementById('lhSeo');
    const drawerArchitectureList = document.getElementById('drawerArchitectureList');
    const drawerTags = document.getElementById('drawerTags');

    function openProjectDrawer(projectId) {
        const data = PROJECT_DATA[projectId];
        if (!data || !projectDrawer || !modalBackdrop) return;

        drawerTitle.textContent = data.title;
        drawerCategory.textContent = data.category;
        drawerBadge.innerHTML = data.badge;
        drawerIntro.textContent = data.intro;

        if (lhPerf) lhPerf.textContent = data.scores.perf;
        if (lhAccess) lhAccess.textContent = data.scores.access;
        if (lhBest) lhBest.textContent = data.scores.best;
        if (lhSeo) lhSeo.textContent = data.scores.seo;

        drawerArchitectureList.innerHTML = '';
        data.architecture.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            drawerArchitectureList.appendChild(li);
        });

        drawerTags.innerHTML = '';
        data.tags.forEach(tag => {
            const span = document.createElement('span');
            span.textContent = tag;
            drawerTags.appendChild(span);
        });

        modalBackdrop.classList.add('active');
        modalBackdrop.setAttribute('aria-hidden', 'false');
        projectDrawer.classList.add('active');
        projectDrawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        if (drawerCloseBtn) setTimeout(() => drawerCloseBtn.focus(), 50);
    }

    function closeProjectDrawer() {
        if (!projectDrawer || !modalBackdrop) return;
        modalBackdrop.classList.remove('active');
        modalBackdrop.setAttribute('aria-hidden', 'true');
        projectDrawer.classList.remove('active');
        projectDrawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    const detailBtns = document.querySelectorAll('.btn-project-details');
    detailBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const projectId = btn.getAttribute('data-project');
            openProjectDrawer(projectId);
        });
    });

    if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeProjectDrawer);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectDrawer);

    // Global Keydown Listeners for escape
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectDrawer();
            closeMobileMenu();
        }
    });

    // ----------------------------------------------------------------------
    // 9. NAVBAR SCROLL EFFECT & SCROLLSPY
    // ----------------------------------------------------------------------
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const navSections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        let currentSection = '';
        navSections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // ----------------------------------------------------------------------
    // 10. MOBILE NAVIGATION DRAWER & BACKDROP CONTROLLER
    // ----------------------------------------------------------------------
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');
    const mobileDrawerClose = document.getElementById('mobileDrawerClose');

    function closeMobileMenu() {
        if (!navMenu) return;
        navMenu.classList.remove('open');
        if (mobileToggle) {
            mobileToggle.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
        }
        if (mobileMenuBackdrop) {
            mobileMenuBackdrop.classList.remove('active');
            mobileMenuBackdrop.setAttribute('aria-hidden', 'true');
        }
        document.body.style.overflow = '';
    }

    function openMobileMenu() {
        if (!navMenu) return;
        navMenu.classList.add('open');
        if (mobileToggle) {
            mobileToggle.classList.add('active');
            mobileToggle.setAttribute('aria-expanded', 'true');
        }
        if (mobileMenuBackdrop) {
            mobileMenuBackdrop.classList.add('active');
            mobileMenuBackdrop.setAttribute('aria-hidden', 'false');
        }
        document.body.style.overflow = 'hidden';
    }

    if (mobileToggle && navMenu) {
        const toggleMenu = (e) => {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            const isOpen = navMenu.classList.contains('open');
            if (isOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        };

        mobileToggle.addEventListener('click', toggleMenu);

        if (mobileDrawerClose) {
            mobileDrawerClose.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                closeMobileMenu();
            });
        }

        if (mobileMenuBackdrop) {
            mobileMenuBackdrop.addEventListener('click', closeMobileMenu);
        }

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                closeMobileMenu();
            });
        });

        const drawerFooterLinks = navMenu.querySelectorAll('.drawer-social-link, .mobile-resume-btn');
        drawerFooterLinks.forEach(link => {
            link.addEventListener('click', () => {
                setTimeout(closeMobileMenu, 200);
            });
        });
    }

    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // ----------------------------------------------------------------------
    // 11. VIEW SOURCE & DEVTOOLS DETERRENTS
    // ----------------------------------------------------------------------
    // 1. Disable Right-Click Context Menu (Prevents 'View Page Source', 'Inspect', etc.)
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    // 2. Disable Keyboard Shortcuts (Ctrl+U, F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+S)
    window.addEventListener('keydown', (e) => {
        const isMac = navigator.platform && navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        const ctrlOrCmd = isMac ? e.metaKey : e.ctrlKey;
        const key = e.key ? e.key.toLowerCase() : '';

        // Block F12 (DevTools)
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }

        if (ctrlOrCmd) {
            // Block Ctrl+U / Cmd+U (View Page Source)
            if (key === 'u') {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }

            // Block Ctrl+Shift+I / J / C (DevTools & Inspect Element)
            if (e.shiftKey && (key === 'i' || key === 'j' || key === 'c')) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }

            // Block Ctrl+S / Cmd+S (Save Page)
            if (key === 's') {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        }
    }, true);

    // 3. Disable Image and Asset Dragging
    document.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });
});
