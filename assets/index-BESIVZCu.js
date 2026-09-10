// Vite/SPA Client Bundle - Vaibhavi Lakhtariya Portfolio
(function() {
    const template = "<!-- Skip to Main Content Link (WCAG 2.4.1) -->\n    <a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>\n\n    <!-- Custom Follow Cursor -->\n    <div class=\"cursor-dot\" id=\"cursorDot\" aria-hidden=\"true\"></div>\n    <div class=\"cursor-ring\" id=\"cursorRing\" aria-hidden=\"true\"></div>\n\n    <!-- Mobile Navigation Backdrop Overlay -->\n    <div class=\"mobile-menu-backdrop\" id=\"mobileMenuBackdrop\" aria-hidden=\"true\"></div>\n\n    <!-- Sticky Navigation Header -->\n    <header class=\"navbar\" id=\"navbar\" role=\"banner\">\n        <div class=\"nav-container\">\n            <a href=\"#hero\" class=\"nav-brand\" aria-label=\"Vaibhavi Lakhtariya Home\">\n                <div class=\"brand-badge\" aria-hidden=\"true\">VL</div>\n                <span class=\"brand-name\">Vaibhavi L.</span>\n            </a>\n\n            <nav class=\"nav-menu\" id=\"navMenu\" aria-label=\"Main Navigation\">\n                <div class=\"nav-menu-header\">\n                    <div class=\"nav-brand-drawer\">\n                        <div class=\"brand-badge\" aria-hidden=\"true\">VL</div>\n                        <span class=\"brand-name\">Vaibhavi L.</span>\n                    </div>\n                    <button class=\"mobile-drawer-close\" id=\"mobileDrawerClose\" aria-label=\"Close navigation menu\">\n                        <i class=\"fa-solid fa-xmark\" aria-hidden=\"true\"></i>\n                    </button>\n                </div>\n\n                <ul class=\"nav-list\">\n                    <li><a href=\"#about\" class=\"nav-link\"><i class=\"fa-regular fa-user nav-drawer-icon\" aria-hidden=\"true\"></i><span>About</span></a></li>\n                    <li><a href=\"#skills\" class=\"nav-link\"><i class=\"fa-solid fa-code nav-drawer-icon\" aria-hidden=\"true\"></i><span>Skills</span></a></li>\n                    <li><a href=\"#experience\" class=\"nav-link\"><i class=\"fa-solid fa-briefcase nav-drawer-icon\" aria-hidden=\"true\"></i><span>Experience</span></a></li>\n                    <li><a href=\"#projects\" class=\"nav-link\"><i class=\"fa-solid fa-laptop-code nav-drawer-icon\" aria-hidden=\"true\"></i><span>Projects</span></a></li>\n                    <li><a href=\"#education\" class=\"nav-link\"><i class=\"fa-solid fa-graduation-cap nav-drawer-icon\" aria-hidden=\"true\"></i><span>Education</span></a></li>\n                    <li><a href=\"#contact\" class=\"nav-link\"><i class=\"fa-regular fa-envelope nav-drawer-icon\" aria-hidden=\"true\"></i><span>Contact</span></a></li>\n                </ul>\n\n                <div class=\"mobile-drawer-footer\">\n                    <div class=\"mobile-availability-status\">\n                        <span class=\"pulse-dot\" aria-hidden=\"true\"></span>\n                        <span>Available for Work</span>\n                    </div>\n                    <a href=\"Vaibhavi_Lakhtariya_Resume.pdf\" download=\"Vaibhavi_Lakhtariya_Resume.pdf\" class=\"btn btn-primary w-100 mobile-resume-btn\" aria-label=\"Download Vaibhavi Lakhtariya's Resume (PDF)\">\n                        <i class=\"fa-solid fa-file-arrow-down\" aria-hidden=\"true\"></i> <span>Get Resume (PDF)</span>\n                    </a>\n                    <div class=\"mobile-drawer-socials\">\n                        <a href=\"https://www.linkedin.com/in/vaibhavi-lakhtariya-a58179235/\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"LinkedIn Profile\" class=\"drawer-social-link\">\n                            <i class=\"fa-brands fa-linkedin-in\" aria-hidden=\"true\"></i>\n                        </a>\n                        <a href=\"mailto:vaibhailakhtariya1771@gmail.com\" aria-label=\"Email Vaibhavi\" class=\"drawer-social-link\">\n                            <i class=\"fa-solid fa-envelope\" aria-hidden=\"true\"></i>\n                        </a>\n                        <a href=\"tel:+917575011648\" aria-label=\"Call Vaibhavi\" class=\"drawer-social-link\">\n                            <i class=\"fa-solid fa-phone\" aria-hidden=\"true\"></i>\n                        </a>\n                    </div>\n                </div>\n            </nav>\n\n            <div class=\"nav-actions\">\n                <span class=\"availability-pill\">\n                    <span class=\"pulse-dot\" aria-hidden=\"true\"></span> Available for Work\n                </span>\n                <button class=\"btn-theme-toggle\" id=\"themeToggleBtn\" aria-label=\"Switch to dark theme\" title=\"Toggle theme\">\n                    <i class=\"fa-solid fa-moon\" id=\"themeIcon\" aria-hidden=\"true\"></i>\n                </button>\n                <a href=\"Vaibhavi_Lakhtariya_Resume.pdf\" download=\"Vaibhavi_Lakhtariya_Resume.pdf\" class=\"btn btn-cv-nav magnetic-btn\" aria-label=\"Download Vaibhavi Lakhtariya's Resume (PDF)\">\n                    <i class=\"fa-solid fa-file-arrow-down\" aria-hidden=\"true\"></i> <span>Get Resume</span>\n                </a>\n                <button class=\"mobile-toggle\" id=\"mobileToggle\" aria-label=\"Toggle navigation menu\" aria-expanded=\"false\" aria-controls=\"navMenu\">\n                    <span></span>\n                    <span></span>\n                    <span></span>\n                </button>\n            </div>\n        </div>\n    </header>\n\n    <main id=\"main-content\">\n        <!-- 1. HERO SECTION -->\n        <section id=\"hero\" class=\"hero-section\" aria-labelledby=\"hero-title-text\">\n            <div class=\"hero-bg-grid\" aria-hidden=\"true\"></div>\n            <div class=\"hero-container\">\n                <div class=\"hero-badge-wrapper hero-reveal\">\n                    <span class=\"hero-status-tag\">\n                        <i class=\"fa-solid fa-location-dot\" aria-hidden=\"true\"></i> Ahmedabad, Gujarat, India\n                    </span>\n                    <span class=\"badge-separator\" aria-hidden=\"true\">\u2022</span>\n                    <span class=\"hero-experience-tag\">3.5+ Years Exp.</span>\n                </div>\n\n                <h1 class=\"hero-title hero-reveal\" id=\"hero-title-text\">\n                    Hi, I'm <span class=\"highlight-text\">Vaibhavi Lakhtariya</span>\n                </h1>\n\n                <p class=\"hero-subtitle hero-reveal\">\n                    Front-End Web Developer\n                </p>\n\n                <p class=\"hero-hook hero-reveal\">\n                    \"Turning designs into fast, responsive, high-performing websites.\"\n                </p>\n\n                <div class=\"hero-cta-group hero-reveal\">\n                    <a href=\"#projects\" class=\"btn btn-primary magnetic-btn\">\n                        <span>View Work</span> <i class=\"fa-solid fa-arrow-down-long\" aria-hidden=\"true\"></i>\n                    </a>\n                    <a href=\"#contact\" class=\"btn btn-secondary magnetic-btn\">\n                        <span>Get in Touch</span> <i class=\"fa-solid fa-paper-plane\" aria-hidden=\"true\"></i>\n                    </a>\n                    <a href=\"Vaibhavi_Lakhtariya_Resume.pdf\" download=\"Vaibhavi_Lakhtariya_Resume.pdf\" class=\"btn btn-outline magnetic-btn\" aria-label=\"Download Vaibhavi Lakhtariya's Resume (PDF)\">\n                        <span>Get Resume</span> <i class=\"fa-solid fa-file-arrow-down\" aria-hidden=\"true\"></i>\n                    </a>\n                </div>\n\n                <!-- Stats Counter Bar -->\n                <div class=\"hero-stats-bar hero-reveal\">\n                    <div class=\"stat-card\">\n                        <div class=\"stat-number-wrapper\">\n                            <span class=\"stat-number\" data-target=\"50\">0</span><span class=\"stat-plus\">+</span>\n                        </div>\n                        <span class=\"stat-label\">Websites Delivered</span>\n                    </div>\n\n                    <div class=\"stat-divider\"></div>\n\n                    <div class=\"stat-card\">\n                        <div class=\"stat-number-wrapper\">\n                            <span class=\"stat-number\" data-target=\"3.5\" data-decimals=\"1\">0.0</span><span class=\"stat-plus\">+</span>\n                        </div>\n                        <span class=\"stat-label\">Years Professional Exp.</span>\n                    </div>\n\n                    <div class=\"stat-divider\"></div>\n\n                    <div class=\"stat-card\">\n                        <div class=\"stat-number-wrapper\">\n                            <span class=\"stat-number\" data-target=\"100\">0</span><span class=\"stat-plus\">%</span>\n                        </div>\n                        <span class=\"stat-label\">Responsive & Pixel Perfect</span>\n                    </div>\n                </div>\n            </div>\n        </section>\n\n        <!-- 2. ABOUT SECTION -->\n        <section id=\"about\" class=\"section-padding about-section\">\n            <div class=\"section-container\">\n                <div class=\"section-header\">\n                    <span class=\"section-subtitle\">01 / Background</span>\n                    <h2 class=\"section-title\">About Me</h2>\n                </div>\n\n                <div class=\"about-grid\">\n                    <div class=\"about-main-card\">\n                        <p class=\"about-lead\">\n                            I am a Front-End Web Developer with 3.5+ years of experience building and maintaining responsive, high-performing WordPress websites for clients across different industries.\n                        </p>\n                        <p class=\"about-text\">\n                            Experienced in turning design files into clean, mobile-friendly websites that work smoothly across browsers and devices. Comfortable managing a website from design handoff all the way through development, testing, and launch.\n                        </p>\n                        <p class=\"about-text\">\n                            Focused on writing quality code, improving website speed, and delivering a great user experience.\n                        </p>\n                    </div>\n\n                    <div class=\"about-side-wrapper\">\n                        <!-- Highlighting Core Expertise Card -->\n                        <div class=\"expertise-card\">\n                            <div class=\"expertise-icon-box\">\n                                <i class=\"fa-solid fa-code-commit\"></i>\n                            </div>\n                            <div class=\"expertise-details\">\n                                <span class=\"expertise-tag\">Core Specialization</span>\n                                <h3 class=\"expertise-title\">Full-Lifecycle Web Development</h3>\n                                <p class=\"expertise-desc\">Managing websites from initial Figma/PSD handoff to production launch, speed optimization, and long-term maintenance.</p>\n                            </div>\n                        </div>\n\n                        <!-- Quick Overview Stats Box -->\n                        <div class=\"quick-facts-box\">\n                            <h4 class=\"facts-heading\">Core Competencies</h4>\n                            <ul class=\"facts-list\">\n                                <li><i class=\"fa-solid fa-check accent-icon\"></i> End-to-End WordPress Lifecycle</li>\n                                <li><i class=\"fa-solid fa-check accent-icon\"></i> Custom Themes & Elementor / Gutenberg</li>\n                                <li><i class=\"fa-solid fa-check accent-icon\"></i> Pixel-Perfect Figma / PSD Conversions</li>\n                                <li><i class=\"fa-solid fa-check accent-icon\"></i> Page Speed & Technical SEO Tuning</li>\n                                <li><i class=\"fa-solid fa-check accent-icon\"></i> Analytics & Event Tagging Setup</li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n\n        <!-- 3. SKILLS SECTION -->\n        <section id=\"skills\" class=\"section-padding skills-section\">\n            <div class=\"section-container\">\n                <div class=\"section-header\">\n                    <span class=\"section-subtitle\">02 / Technical Toolkit</span>\n                    <h2 class=\"section-title\">Skills & Technologies</h2>\n                    <p class=\"section-intro\">Grouped toolkit organized by technical specialization.</p>\n                </div>\n\n                <div class=\"skills-grid\">\n                    <!-- Front-End Development -->\n                    <div class=\"skill-category-card\">\n                        <div class=\"category-header\">\n                            <div class=\"category-icon\">\n                                <i class=\"fa-solid fa-code\"></i>\n                            </div>\n                            <h3 class=\"category-title\">Front-End Development</h3>\n                        </div>\n                        <div class=\"skill-tags\">\n                            <span class=\"skill-tag\"><i class=\"fa-brands fa-html5\"></i> HTML5</span>\n                            <span class=\"skill-tag\"><i class=\"fa-brands fa-css3-alt\"></i> CSS3 / SCSS</span>\n                            <span class=\"skill-tag\"><i class=\"fa-brands fa-js\"></i> JavaScript</span>\n                            <span class=\"skill-tag\"><i class=\"fa-solid fa-cubes\"></i> jQuery</span>\n                            <span class=\"skill-tag\"><i class=\"fa-brands fa-php\"></i> PHP</span>\n                            <span class=\"skill-tag\"><i class=\"fa-brands fa-react\"></i> React.js</span>\n                        </div>\n                    </div>\n\n                    <!-- WordPress -->\n                    <div class=\"skill-category-card\">\n                        <div class=\"category-header\">\n                            <div class=\"category-icon\">\n                                <i class=\"fa-brands fa-wordpress\"></i>\n                            </div>\n                            <h3 class=\"category-title\">WordPress Ecosystem</h3>\n                        </div>\n                        <div class=\"skill-tags\">\n                            <span class=\"skill-tag\"><i class=\"fa-solid fa-layer-group\"></i> Custom Theme Dev</span>\n                            <span class=\"skill-tag\"><i class=\"fa-solid fa-cubes-stacked\"></i> Elementor Pro</span>\n                            <span class=\"skill-tag\"><i class=\"fa-solid fa-block-question\"></i> Gutenberg</span>\n                            <span class=\"skill-tag\"><i class=\"fa-solid fa-sliders\"></i> Advanced Custom Fields (ACF)</span>\n                            <span class=\"skill-tag\"><i class=\"fa-solid fa-database\"></i> Custom Post Types (CPT)</span>\n                        </div>\n                    </div>\n\n                    <!-- Shopify -->\n                    <div class=\"skill-category-card\">\n                        <div class=\"category-header\">\n                            <div class=\"category-icon\">\n                                <i class=\"fa-brands fa-shopify\"></i>\n                            </div>\n                            <h3 class=\"category-title\">Shopify</h3>\n                        </div>\n                        <div class=\"skill-tags\">\n                            <span class=\"skill-tag\"><i class=\"fa-solid fa-palette\"></i> Theme Customization</span>\n                            <span class=\"skill-tag\"><i class=\"fa-solid fa-store\"></i> Storefront Basics</span>\n                        </div>\n                    </div>\n\n                    <!-- Performance & SEO -->\n                    <div class=\"skill-category-card\">\n                        <div class=\"category-header\">\n                            <div class=\"category-icon\">\n                                <i class=\"fa-solid fa-gauge-high\"></i>\n                            </div>\n                            <h3 class=\"category-title\">Performance & SEO</h3>\n                        </div>\n                        <div class=\"skill-tags\">\n                            <span class=\"skill-tag\"><i class=\"fa-solid fa-bolt\"></i> Page Speed Optimization</span>\n                            <span class=\"skill-tag\"><i class=\"fa-solid fa-magnifying-glass-chart\"></i> Technical SEO</span>\n                            <span class=\"skill-tag\"><i class=\"fa-solid fa-mobile-screen-button\"></i> Responsive Design</span>\n                            <span class=\"skill-tag\"><i class=\"fa-solid fa-laptop-code\"></i> Cross-Browser Compatibility</span>\n                            <span class=\"skill-tag\"><i class=\"fa-solid fa-universal-access\"></i> WCAG Accessibility</span>\n                        </div>\n                    </div>\n\n                    <!-- Database -->\n                    <div class=\"skill-category-card\">\n                        <div class=\"category-header\">\n                            <div class=\"category-icon\">\n                                <i class=\"fa-solid fa-database\"></i>\n                            </div>\n                            <h3 class=\"category-title\">Database</h3>\n                        </div>\n                        <div class=\"skill-tags\">\n                            <span class=\"skill-tag\"><i class=\"fa-solid fa-server\"></i> MySQL</span>\n                        </div>\n                    </div>\n\n                    <!-- Design Tools -->\n                    <div class=\"skill-category-card\">\n                        <div class=\"category-header\">\n                            <div class=\"category-icon\">\n                                <i class=\"fa-solid fa-pen-nib\"></i>\n                            </div>\n                            <h3 class=\"category-title\">Design Tools</h3>\n                        </div>\n                        <div class=\"skill-tags\">\n                            <span class=\"skill-tag\"><i class=\"fa-brands fa-figma\"></i> Figma</span>\n                            <span class=\"skill-tag\"><i class=\"fa-solid fa-vector-square\"></i> Adobe XD</span>\n                            <span class=\"skill-tag\"><i class=\"fa-solid fa-paint-brush\"></i> Canva</span>\n                        </div>\n                    </div>\n\n                    <!-- Marketing & Tracking -->\n                    <div class=\"skill-category-card\">\n                        <div class=\"category-header\">\n                            <div class=\"category-icon\">\n                                <i class=\"fa-solid fa-chart-line\"></i>\n                            </div>\n                            <h3 class=\"category-title\">Marketing & Tracking</h3>\n                        </div>\n                        <div class=\"skill-tags\">\n                            <span class=\"skill-tag\"><i class=\"fa-brands fa-meta\"></i> Meta Ads</span>\n                            <span class=\"skill-tag\"><i class=\"fa-brands fa-google\"></i> Google Analytics</span>\n                            <span class=\"skill-tag\"><i class=\"fa-solid fa-tags\"></i> Google Tag Manager</span>\n                        </div>\n                    </div>\n\n                    <!-- Workflow & PM Tools -->\n                    <div class=\"skill-category-card\">\n                        <div class=\"category-header\">\n                            <div class=\"category-icon\">\n                                <i class=\"fa-solid fa-list-check\"></i>\n                            </div>\n                            <h3 class=\"category-title\">Other Tools</h3>\n                        </div>\n                        <div class=\"skill-tags\">\n                            <span class=\"skill-tag\"><i class=\"fa-brands fa-git-alt\"></i> Git</span>\n                            <span class=\"skill-tag\"><i class=\"fa-solid fa-check-double\"></i> ClickUp</span>\n                            <span class=\"skill-tag\"><i class=\"fa-solid fa-calendar-check\"></i> Monday.com</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n\n        <!-- 4. EXPERIENCE SECTION -->\n        <section id=\"experience\" class=\"section-padding experience-section\">\n            <div class=\"section-container\">\n                <div class=\"section-header\">\n                    <span class=\"section-subtitle\">03 / Career History</span>\n                    <h2 class=\"section-title\">Work Experience</h2>\n                </div>\n\n                <div class=\"experience-timeline\">\n                    <div class=\"experience-card\">\n                        <div class=\"exp-header\">\n                            <div class=\"exp-title-group\">\n                                <h3 class=\"exp-role\">Front-End Developer</h3>\n                                <div class=\"exp-company-info\">\n                                    <span class=\"exp-company\"><i class=\"fa-solid fa-building\"></i> ZealousWeb Technologies Pvt. Ltd.</span>\n                                    <span class=\"exp-location\"><i class=\"fa-solid fa-location-dot\"></i> Ahmedabad, Gujarat, India</span>\n                                </div>\n                            </div>\n                            <div class=\"exp-badge-group\">\n                                <span class=\"exp-date-badge\"><i class=\"fa-regular fa-calendar\"></i> 2022 \u2013 2026</span>\n                            </div>\n                        </div>\n\n                        <div class=\"exp-body\">\n                            <ul class=\"exp-bullets\">\n                                <li>\n                                    <i class=\"fa-solid fa-circle-dot bullet-icon\"></i>\n                                    <span>Built and delivered more than 50 custom WordPress websites, handling the full process from design handoff to final launch.</span>\n                                </li>\n                                <li>\n                                    <i class=\"fa-solid fa-circle-dot bullet-icon\"></i>\n                                    <span>Converted design files from Figma and PSD into responsive, pixel-perfect websites that work well on all browsers and devices.</span>\n                                </li>\n                                <li>\n                                    <i class=\"fa-solid fa-circle-dot bullet-icon\"></i>\n                                    <span>Created flexible, easy-to-manage website sections so clients can update content on their own.</span>\n                                </li>\n                                <li>\n                                    <i class=\"fa-solid fa-circle-dot bullet-icon\"></i>\n                                    <span>Wrote custom website features using HTML, CSS, JavaScript, and PHP, following WordPress best practices.</span>\n                                </li>\n                                <li>\n                                    <i class=\"fa-solid fa-circle-dot bullet-icon\"></i>\n                                    <span>Improved website loading speed and overall performance through better coding and optimization practices.</span>\n                                </li>\n                                <li>\n                                    <i class=\"fa-solid fa-circle-dot bullet-icon\"></i>\n                                    <span>Set up website tracking and analytics to help clients understand visitor behavior and make informed decisions.</span>\n                                </li>\n                                <li>\n                                    <i class=\"fa-solid fa-circle-dot bullet-icon\"></i>\n                                    <span>Handled ongoing website maintenance, including fixing bugs and keeping plugins and themes up to date.</span>\n                                </li>\n                                <li>\n                                    <i class=\"fa-solid fa-circle-dot bullet-icon\"></i>\n                                    <span>Worked closely with designers, back-end developers, and project managers to deliver projects on time.</span>\n                                </li>\n                                <li>\n                                    <i class=\"fa-solid fa-circle-dot bullet-icon\"></i>\n                                    <span>Made sure websites were accessible and easy to use for all visitors.</span>\n                                </li>\n                            </ul>\n\n                            <div class=\"exp-tech-stack\">\n                                <span class=\"stack-label\">Stack used:</span>\n                                <span class=\"stack-pill\">WordPress</span>\n                                <span class=\"stack-pill\">PHP</span>\n                                <span class=\"stack-pill\">JavaScript</span>\n                                <span class=\"stack-pill\">ACF Pro</span>\n                                <span class=\"stack-pill\">Elementor</span>\n                                <span class=\"stack-pill\">SCSS</span>\n                                <span class=\"stack-pill\">Git</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n\n        <!-- 5. FEATURED PROJECTS SECTION -->\n        <section id=\"projects\" class=\"section-padding projects-section\">\n            <div class=\"section-container\">\n                <div class=\"section-header\">\n                    <span class=\"section-subtitle\">04 / Portfolio Showcase</span>\n                    <h2 class=\"section-title\">Featured Projects</h2>\n                    <p class=\"section-intro\">Selected client work and personal front-end developments. Click any project for architecture & performance breakdown.</p>\n                </div>\n\n                <div class=\"projects-grid\">\n                    <!-- Project 1: AI Chat Assistant Widget (Public) -->\n                    <div class=\"project-card tilt-card project-featured\" data-tilt>\n                        <div class=\"project-card-header\">\n                            <div class=\"project-meta\">\n                                <span class=\"project-category\">Conversational AI / Full-Stack</span>\n                                <span class=\"live-badge\"><i class=\"fa-solid fa-globe\"></i> Live Project</span>\n                            </div>\n                            <h3 class=\"project-title\">AI Chat Assistant Widget</h3>\n                        </div>\n                        <div class=\"project-card-body\">\n                            <p class=\"project-description\">\n                                An embeddable AI-powered chat widget built from scratch (like Intercom or Tidio), designed to be dropped into any website via a single script tag. Built with a vanilla JS frontend (zero dependencies, DOM-isolated so it doesn't conflict with host site styles) and a Node.js/Express backend that securely proxies requests to the Anthropic Claude API \u2014 the API key never touches the browser. Includes a dual-mode conversational engine: live Claude-powered responses when an API key is configured, and a smart context-aware fallback engine (with anti-repetition logic) for zero-cost demo mode. Fully responsive with a typing indicator and animated message bubbles.\n                            </p>\n                            <div class=\"project-tags\">\n                                <span>Vanilla JS (Zero-Dep)</span>\n                                <span>Node.js / Express</span>\n                                <span>Anthropic Claude API</span>\n                                <span>DOM Isolation</span>\n                                <span>Vercel Hosted</span>\n                            </div>\n                        </div>\n                        <div class=\"project-card-footer\">\n                            <a href=\"https://server-vaibhavie.vercel.app/widget/demo.html\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"btn btn-project-visit magnetic-btn\" aria-label=\"Visit AI Chat Assistant Widget live demo (opens in a new tab)\">\n                                <span>Visit Site</span> <i class=\"fa-solid fa-arrow-up-right-from-square\" aria-hidden=\"true\"></i>\n                            </a>\n                        </div>\n                    </div>\n\n                    <!-- Project 1: IMPACT Physical Therapy (NDA) -->\n                    <div class=\"project-card tilt-card\" data-tilt>\n                        <div class=\"project-card-header\">\n                            <div class=\"project-meta\">\n                                <span class=\"project-category\">Healthcare / Multi-Location</span>\n                                <span class=\"nda-badge\"><i class=\"fa-solid fa-lock\"></i> NDA Protected</span>\n                            </div>\n                            <h3 class=\"project-title\">IMPACT Physical Therapy</h3>\n                        </div>\n                        <div class=\"project-card-body\">\n                            <p class=\"project-description\">\n                                Multi-location healthcare web platform supporting 8 clinic locations and 30+ specialized treatment services built on WordPress. Developed custom post types for treatment directories, location finders, patient testimonial sliders, and an online appointment booking workflow.\n                            </p>\n                            <div class=\"project-tags\">\n                                <span>WordPress</span>\n                                <span>Custom Post Types</span>\n                                <span>ACF</span>\n                                <span>Location Pages</span>\n                                <span>Booking Flow</span>\n                            </div>\n                        </div>\n                        <div class=\"project-card-footer\">\n                            <span class=\"nda-link-placeholder\">\n                                <i class=\"fa-solid fa-shield\"></i> Under Client NDA\n                            </span>\n                        </div>\n                    </div>\n\n                    <!-- Project 2: ArticleOCity (NDA) -->\n                    <div class=\"project-card tilt-card\" data-tilt>\n                        <div class=\"project-card-header\">\n                            <div class=\"project-meta\">\n                                <span class=\"project-category\">Digital Publishing & Magazine</span>\n                                <span class=\"nda-badge\"><i class=\"fa-solid fa-lock\"></i> NDA Protected</span>\n                            </div>\n                            <h3 class=\"project-title\">ArticleOCity</h3>\n                        </div>\n                        <div class=\"project-card-body\">\n                            <p class=\"project-description\">\n                                High-traffic content and magazine-style WordPress platform equipped with dynamic multi-level category structures, custom featured article grid layouts, dedicated author profiles, and seamless newsletter integration.\n                            </p>\n                            <div class=\"project-tags\">\n                                <span>WordPress</span>\n                                <span>Magazine Layout</span>\n                                <span>Custom Taxonomy</span>\n                                <span>Newsletter Sync</span>\n                                <span>Speed Optimization</span>\n                            </div>\n                        </div>\n                        <div class=\"project-card-footer\">\n                            <span class=\"nda-link-placeholder\">\n                                <i class=\"fa-solid fa-shield\"></i> Under Client NDA\n                            </span>\n                        </div>\n                    </div>\n\n                    <!-- Project 3: Bonita Women's Health & Wellness (NDA) -->\n                    <div class=\"project-card tilt-card\" data-tilt>\n                        <div class=\"project-card-header\">\n                            <div class=\"project-meta\">\n                                <span class=\"project-category\">Healthcare / Women's Wellness</span>\n                                <span class=\"nda-badge\"><i class=\"fa-solid fa-lock\"></i> NDA Protected</span>\n                            </div>\n                            <h3 class=\"project-title\">Bonita Women's Health & Wellness</h3>\n                        </div>\n                        <div class=\"project-card-body\">\n                            <p class=\"project-description\">\n                                Healthcare clinic website for a women's health practice, built on WordPress with service/condition category pages, treatment detail pages, patient testimonials, an online booking integration, and a lead-generation form for a downloadable health resource.\n                            </p>\n                            <div class=\"project-tags\">\n                                <span>WordPress</span>\n                                <span>Category Pages</span>\n                                <span>Booking Integration</span>\n                                <span>Lead Gen Form</span>\n                                <span>Patient Testimonials</span>\n                            </div>\n                        </div>\n                        <div class=\"project-card-footer\">\n                            <span class=\"nda-link-placeholder\">\n                                <i class=\"fa-solid fa-shield\"></i> Under Client NDA\n                            </span>\n                        </div>\n                    </div>\n\n                    <!-- Project 4: FORGE Fitness (Public) -->\n                    <div class=\"project-card tilt-card project-featured\" data-tilt>\n                        <div class=\"project-card-header\">\n                            <div class=\"project-meta\">\n                                <span class=\"project-category\">Animated Wellness Brand</span>\n                                <span class=\"live-badge\"><i class=\"fa-solid fa-globe\"></i> Live Project</span>\n                            </div>\n                            <h3 class=\"project-title\">FORGE Fitness</h3>\n                        </div>\n                        <div class=\"project-card-body\">\n                            <p class=\"project-description\">\n                                Premium animated fitness and wellness web application showcasing custom interactive front-end craftsmanship. Features scroll-triggered animations, interactive before/after transformation slider, and editorial layout styling beyond traditional CMS limits.\n                            </p>\n                            <div class=\"project-tags\">\n                                <span>HTML5 / SCSS</span>\n                                <span>Modern JS</span>\n                                <span>Scroll Animations</span>\n                                <span>Interactive Slider</span>\n                                <span>Vercel Hosted</span>\n                            </div>\n                        </div>\n                        <div class=\"project-card-footer\">\n                            <a href=\"https://forge-fitness-website.vercel.app\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"btn btn-project-visit magnetic-btn\" aria-label=\"Visit FORGE Fitness live website (opens in a new tab)\">\n                                <span>Visit Site</span> <i class=\"fa-solid fa-arrow-up-right-from-square\" aria-hidden=\"true\"></i>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Footnote Note -->\n                <div class=\"projects-footnote\">\n                    <i class=\"fa-solid fa-circle-info\" aria-hidden=\"true\"></i>\n                    <span>More client work available on request \u2014 several projects are under strict Non-Disclosure Agreements (NDA).</span>\n                </div>\n            </div>\n        </section>\n\n        <!-- 6. EDUCATION SECTION -->\n        <section id=\"education\" class=\"section-padding education-section\">\n            <div class=\"section-container\">\n                <div class=\"section-header\">\n                    <span class=\"section-subtitle\">05 / Academic Background</span>\n                    <h2 class=\"section-title\">Education</h2>\n                </div>\n\n                <div class=\"education-grid\">\n                    <div class=\"education-card\">\n                        <div class=\"edu-icon-wrapper\">\n                            <i class=\"fa-solid fa-graduation-cap\"></i>\n                        </div>\n                        <div class=\"edu-content\">\n                            <span class=\"edu-year\"><i class=\"fa-regular fa-calendar\"></i> 2019 \u2013 2022</span>\n                            <h3 class=\"edu-degree\">Bachelor of Computer Applications (BCA)</h3>\n                            <h4 class=\"edu-institution\">Sardar Vallabhbhai Global University</h4>\n                            <p class=\"edu-desc\">Comprehensive degree program covering computer science fundamentals, algorithm design, software architecture, and modern web application development.</p>\n                            \n                            <div class=\"edu-coursework\">\n                                <span class=\"coursework-title\">Core Coursework:</span>\n                                <div class=\"course-tags\">\n                                    <span>Programming & Logic</span>\n                                    <span>Database Management Systems (DBMS)</span>\n                                    <span>Web Development</span>\n                                    <span>Software Engineering</span>\n                                    <span>Computer Networks</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n\n        <!-- 7. CONTACT SECTION -->\n        <section id=\"contact\" class=\"section-padding contact-section\">\n            <div class=\"section-container\">\n                <div class=\"section-header\">\n                    <span class=\"section-subtitle\">06 / Get In Touch</span>\n                    <h2 class=\"section-title\">Let's Work Together</h2>\n                    <p class=\"section-intro\">Have a project in mind, looking for a WordPress specialist, or adding a front-end developer to your team?</p>\n                </div>\n\n                <div class=\"contact-grid\">\n                    <!-- Contact Details Card -->\n                    <div class=\"contact-info-card\">\n                        <div class=\"availability-card\">\n                            <div class=\"availability-header\">\n                                <span class=\"pulse-dot green-pulse\"></span>\n                                <span class=\"avail-title\">Available for Work</span>\n                            </div>\n                            <span class=\"immediate-badge\">Immediate Joiner</span>\n                            <p class=\"avail-text\">Ready to contribute to new projects immediately. Open to full-time roles, contract opportunities, and remote collaborations.</p>\n                        </div>\n\n                        <div class=\"contact-methods\">\n                            <a href=\"tel:+917575011648\" class=\"contact-method-item\" aria-label=\"Call Vaibhavi Lakhtariya at +91 75750 11648\">\n                                <div class=\"method-icon\" aria-hidden=\"true\"><i class=\"fa-solid fa-phone\"></i></div>\n                                <div class=\"method-details\">\n                                    <span class=\"method-label\">Phone</span>\n                                    <span class=\"method-value\">+91 75750 11648</span>\n                                </div>\n                            </a>\n\n                            <a href=\"mailto:vaibhailakhtariya1771@gmail.com\" class=\"contact-method-item\" aria-label=\"Send email to vaibhailakhtariya1771@gmail.com\">\n                                <div class=\"method-icon\" aria-hidden=\"true\"><i class=\"fa-solid fa-envelope\"></i></div>\n                                <div class=\"method-details\">\n                                    <span class=\"method-label\">Email</span>\n                                    <span class=\"method-value\">vaibhailakhtariya1771@gmail.com</span>\n                                </div>\n                            </a>\n\n                            <a href=\"https://www.linkedin.com/in/vaibhavi-lakhtariya-a58179235/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"contact-method-item\" aria-label=\"Connect with Vaibhavi Lakhtariya on LinkedIn (opens in a new tab)\">\n                                <div class=\"method-icon\" aria-hidden=\"true\"><i class=\"fa-brands fa-linkedin-in\"></i></div>\n                                <div class=\"method-details\">\n                                    <span class=\"method-label\">LinkedIn</span>\n                                    <span class=\"method-value\">Connect on LinkedIn</span>\n                                </div>\n                            </a>\n\n                            <div class=\"contact-method-item\">\n                                <div class=\"method-icon\" aria-hidden=\"true\"><i class=\"fa-solid fa-location-dot\"></i></div>\n                                <div class=\"method-details\">\n                                    <span class=\"method-label\">Location</span>\n                                    <span class=\"method-value\">Ahmedabad, Gujarat, India</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </main>\n\n    <!-- FOOTER -->\n    <footer class=\"footer\">\n        <div class=\"footer-container\">\n            <div class=\"footer-left\">\n                <a href=\"#hero\" class=\"footer-brand\">\n                    <div class=\"brand-badge\">VL</div>\n                    <span>Vaibhavi Lakhtariya</span>\n                </a>\n                <p class=\"footer-copy\">\n                    &copy; <span id=\"currentYear\">2026</span> Vaibhavi Lakhtariya. Crafted with precision & intent.\n                </p>\n            </div>\n            \n            <div class=\"footer-right\">\n                <a href=\"#hero\" class=\"scroll-top-btn\" aria-label=\"Scroll back to top\">\n                    <i class=\"fa-solid fa-arrow-up\" aria-hidden=\"true\"></i>\n                </a>\n            </div>\n        </div>\n    </footer>\n\n    <!-- SLIDE-OVER PROJECT DETAIL DRAWER MODAL -->\n    <div class=\"modal-backdrop\" id=\"modalBackdrop\" aria-hidden=\"true\"></div>\n    <div class=\"project-drawer\" id=\"projectDrawer\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"drawerTitle\" aria-hidden=\"true\">\n        <div class=\"drawer-header\">\n            <div class=\"drawer-meta\">\n                <span class=\"drawer-category\" id=\"drawerCategory\">Healthcare</span>\n                <span class=\"drawer-badge\" id=\"drawerBadge\"><i class=\"fa-solid fa-lock\" aria-hidden=\"true\"></i> NDA Protected</span>\n            </div>\n            <button class=\"drawer-close-btn\" id=\"drawerCloseBtn\" aria-label=\"Close details drawer\">\n                <i class=\"fa-solid fa-xmark\" aria-hidden=\"true\"></i>\n            </button>\n        </div>\n\n        <div class=\"drawer-body\">\n            <h2 class=\"drawer-title\" id=\"drawerTitle\">Project Title</h2>\n            <p class=\"drawer-intro\" id=\"drawerIntro\">Project intro summary goes here...</p>\n\n            <!-- Lighthouse Performance Scores -->\n            <div class=\"lighthouse-box\">\n                <h4 class=\"lighthouse-heading\"><i class=\"fa-solid fa-gauge-high\"></i> Google Lighthouse Performance Audit</h4>\n                <div class=\"lighthouse-metrics\">\n                    <div class=\"lh-metric\">\n                        <div class=\"lh-score-circle green\" id=\"lhPerf\">98</div>\n                        <span class=\"lh-label\">Performance</span>\n                    </div>\n                    <div class=\"lh-metric\">\n                        <div class=\"lh-score-circle green\" id=\"lhAccess\">100</div>\n                        <span class=\"lh-label\">Accessibility</span>\n                    </div>\n                    <div class=\"lh-metric\">\n                        <div class=\"lh-score-circle green\" id=\"lhBest\">98</div>\n                        <span class=\"lh-label\">Best Practices</span>\n                    </div>\n                    <div class=\"lh-metric\">\n                        <div class=\"lh-score-circle green\" id=\"lhSeo\">100</div>\n                        <span class=\"lh-label\">SEO</span>\n                    </div>\n                </div>\n            </div>\n\n            <!-- Architecture Breakdown -->\n            <div class=\"drawer-section\">\n                <h3 class=\"drawer-subheading\"><i class=\"fa-solid fa-layer-group\"></i> Architecture & Technical Highlights</h3>\n                <ul class=\"drawer-list\" id=\"drawerArchitectureList\">\n                    <!-- Populated dynamically via JS -->\n                </ul>\n            </div>\n\n            <!-- Key Features Built -->\n            <div class=\"drawer-section\">\n                <h3 class=\"drawer-subheading\"><i class=\"fa-solid fa-cubes-stacked\"></i> Technical Stack & Modules</h3>\n                <div class=\"drawer-tags\" id=\"drawerTags\">\n                    <!-- Populated dynamically via JS -->\n                </div>\n            </div>\n        </div>\n    </div>";

    function mountAndInit() {
        const root = document.getElementById('root');
        if (!root) return;
        root.innerHTML = template;
        
        // Execute Interactive Application Logic
        initPortfolioApp();
    }

    function initPortfolioApp() {
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
        'ai-chat-widget': {
            title: 'AI Chat Assistant Widget',
            category: 'Conversational AI / Full-Stack',
            badge: '<i class="fa-solid fa-globe"></i> Live Project',
            intro: 'An embeddable AI-powered chat widget built from scratch with vanilla JS and Node.js/Express, featuring secure Anthropic Claude API proxying and dual-mode conversational fallback.',
            scores: { perf: 100, access: 100, best: 100, seo: 100 },
            architecture: [
                'Engineered zero-dependency vanilla JS widget with DOM isolation to prevent host site CSS conflicts.',
                'Developed secure Node.js/Express backend proxy ensuring Anthropic Claude API keys never expose to the client browser.',
                'Architected dual-mode engine: live Claude API responses with seamless, anti-repetition context-aware fallback for demo mode.',
                'Designed responsive UI with real-time typing indicators, animated chat bubbles, and drop-in single script tag distribution.'
            ],
            tags: ['Vanilla JS (Zero-Dep)', 'Node.js / Express', 'Anthropic Claude API', 'DOM Isolation', 'Vercel Hosted']
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

    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', mountAndInit);
    } else {
        mountAndInit();
    }
})();
