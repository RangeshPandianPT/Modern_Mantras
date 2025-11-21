// Universal Theme Toggle System - Modern Mantras IAS Academy
// Version 1.0 - October 18, 2025

(function() {
    'use strict';
    
    // Theme Management
    const ThemeManager = {
        // Initialize theme on page load
        init: function() {
            // Check for saved theme preference or default to light
            const savedTheme = localStorage.getItem('theme');
            const html = document.documentElement;
            
            // Apply saved theme immediately (before page renders)
            if (savedTheme === 'dark') {
                html.classList.remove('light-mode');
            } else {
                // Default to light mode
                html.classList.add('light-mode');
            }
            
            // Update icons immediately
            this.updateIcons();
            
            // Log for debugging
            console.log('Theme initialized:', savedTheme || 'light (default)');
        },
        
        // Toggle between dark and light mode
        toggle: function() {
            const html = document.documentElement;
            const isLightMode = html.classList.contains('light-mode');
            
            console.log('Toggling from:', isLightMode ? 'light' : 'dark');
            
            if (isLightMode) {
                // Switch to Dark Mode
                html.classList.remove('light-mode');
                localStorage.setItem('theme', 'dark');
                this.showNotification('🌙 Dark Mode Activated');
                console.log('Switched to: dark');
            } else {
                // Switch to Light Mode
                html.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
                this.showNotification('☀️ Light Mode Activated');
                console.log('Switched to: light');
            }
            
            // Update icons and add animation
            this.updateIcons();
            this.addRippleEffect();
        },
        
        // Update icon visibility
        updateIcons: function() {
            const isLightMode = document.documentElement.classList.contains('light-mode');
            
            console.log('Updating icons for mode:', isLightMode ? 'light' : 'dark');
            
            // Update all moon icons (show in dark mode)
            const moonIcons = document.querySelectorAll('[id^="moon-icon"]');
            moonIcons.forEach(icon => {
                if (icon) {
                    icon.classList.toggle('hidden', isLightMode);
                    console.log('Moon icon:', isLightMode ? 'hidden' : 'visible');
                }
            });
            
            // Update all sun icons (show in light mode)
            const sunIcons = document.querySelectorAll('[id^="sun-icon"]');
            sunIcons.forEach(icon => {
                if (icon) {
                    icon.classList.toggle('hidden', !isLightMode);
                    console.log('Sun icon:', !isLightMode ? 'hidden' : 'visible');
                }
            });

            // Update toggle buttons' visual and accessibility state
            try {
                const toggleButtons = document.querySelectorAll('.theme-toggle, [id^="theme-toggle"]');
                toggleButtons.forEach(btn => {
                    if (btn && btn.setAttribute) {
                        // aria-pressed reflects whether light mode is active
                        btn.setAttribute('aria-pressed', isLightMode ? 'true' : 'false');
                        // Add/remove actionable active class for tactile feedback
                        if (isLightMode) {
                            btn.classList.add('toggle-active');
                        } else {
                            btn.classList.remove('toggle-active');
                        }
                    }
                });
            } catch (e) {
                console.warn('Failed to update toggle button state:', e);
            }
        },
        
        // Add ripple effect on toggle
        addRippleEffect: function() {
            const toggleButtons = document.querySelectorAll('.theme-toggle, [id^="theme-toggle"]');
            toggleButtons.forEach(button => {
                // Add scale animation
                button.style.transition = 'transform 0.2s ease';
                button.style.transform = 'scale(0.92)';
                setTimeout(() => {
                    button.style.transform = 'scale(1)';
                    setTimeout(() => {
                        button.style.transition = '';
                    }, 200);
                }, 150);
            });
        },
        
        // Show notification
        showNotification: function(message) {
            // Update ARIA live region if present
            try {
                const liveRegion = document.getElementById('theme-live-region');
                if (liveRegion) {
                    liveRegion.textContent = message;
                }
            } catch (e) {
                // ignore
            }
            
            // Remove existing notification
            const existing = document.querySelector('.theme-notification');
            if (existing) existing.remove();
            
            // Create notification
            const notification = document.createElement('div');
            notification.className = 'theme-notification';
            notification.textContent = message;
            
            const isLightMode = document.documentElement.classList.contains('light-mode');
            
            notification.style.cssText = `
                position: fixed;
                bottom: 32px;
                right: 32px;
                background: ${isLightMode ? 'linear-gradient(135deg, #fbbf24 0%, #d4af37 100%)' : 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'};
                color: ${isLightMode ? '#1a202c' : '#fbbf24'};
                padding: 16px 28px;
                border-radius: 12px;
                font-weight: 600;
                font-size: 15px;
                box-shadow: 0 12px 36px ${isLightMode ? 'rgba(212, 175, 55, 0.4)' : 'rgba(0, 0, 0, 0.5)'};
                z-index: 9999;
                animation: slideInUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                pointer-events: none;
                border: 2px solid ${isLightMode ? '#d4af37' : '#fbbf24'};
            `;
            
            document.body.appendChild(notification);
            
            // Remove after 2.5 seconds
            setTimeout(() => {
                notification.style.animation = 'slideOutDown 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                setTimeout(() => notification.remove(), 400);
            }, 2500);
        }
    };
    
    // Mobile Menu Management
    const MenuManager = {
        init: function() {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const menuIcon = document.getElementById('menu-icon');
            const closeIcon = document.getElementById('close-icon');
            
            if (mobileMenuButton && mobileMenu) {
                mobileMenuButton.addEventListener('click', () => {
                    const isHidden = mobileMenu.classList.contains('hidden');
                    
                    if (isHidden) {
                        mobileMenu.classList.remove('hidden');
                        mobileMenu.classList.add('fade-in');
                        if (menuIcon) menuIcon.classList.add('hidden');
                        if (closeIcon) closeIcon.classList.remove('hidden');
                    } else {
                        mobileMenu.classList.add('hidden');
                        mobileMenu.classList.remove('fade-in');
                        if (menuIcon) menuIcon.classList.remove('hidden');
                        if (closeIcon) closeIcon.classList.add('hidden');
                    }
                });
                
                // Close menu when clicking outside
                document.addEventListener('click', (event) => {
                    const isClickInside = mobileMenuButton.contains(event.target) || 
                                        mobileMenu.contains(event.target);
                    
                    if (!isClickInside && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                        if (menuIcon) menuIcon.classList.remove('hidden');
                        if (closeIcon) closeIcon.classList.add('hidden');
                    }
                });
                
                // Close menu when pressing Escape
                document.addEventListener('keydown', (event) => {
                    if (event.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                        if (menuIcon) menuIcon.classList.remove('hidden');
                        if (closeIcon) closeIcon.classList.add('hidden');
                    }
                });
            }
        }
    };
    
    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            ThemeManager.init();
            MenuManager.init();
            
            // Bind theme toggle buttons
            const themeToggles = document.querySelectorAll('.theme-toggle, [id^="theme-toggle"]');
            themeToggles.forEach(toggle => {
                toggle.addEventListener('click', () => ThemeManager.toggle());
            });
        });
    } else {
        ThemeManager.init();
        MenuManager.init();
        
        // Bind theme toggle buttons
        const themeToggles = document.querySelectorAll('.theme-toggle, [id^="theme-toggle"]');
        themeToggles.forEach(toggle => {
            toggle.addEventListener('click', () => ThemeManager.toggle());
        });
    }
    
    // Add animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInUp {
            from {
                transform: translateY(100px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutDown {
            from {
                transform: translateY(0);
                opacity: 1;
            }
            to {
                transform: translateY(100px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                document.documentElement.classList.remove('light-mode');
            } else {
                document.documentElement.classList.add('light-mode');
            }
            ThemeManager.updateIcons();
        }
    });

    // Universal smooth-scroll helper (exposed on window so pages can call it)
    // Usage: universalSmoothScrollTo('sectionId', { offset: 16 })
    window.universalSmoothScrollTo = function(sectionId, options = {}) {
        try {
            const section = document.getElementById(sectionId);
            if (!section) return;

            const header = document.getElementById('main-header');
            const headerHeight = header ? header.offsetHeight : 0;
            const extraOffset = typeof options.offset === 'number' ? options.offset : 16;

            const targetY = Math.max(0, section.getBoundingClientRect().top + window.scrollY - headerHeight - extraOffset);

            // Prefer native smooth scrolling
            window.scrollTo({ top: targetY, behavior: 'smooth' });

            // Accessibility: focus the section after scroll starts
            setTimeout(() => {
                section.setAttribute('tabindex', '-1');
                try { section.focus({ preventScroll: true }); } catch (e) { section.focus(); }
            }, 420);
        } catch (err) {
            console.warn('universalSmoothScrollTo error:', err);
        }
    };
    // Expose ThemeManager for per-page scripts to use (safe, read-only usage)
    try {
        window.ThemeManager = ThemeManager;
    } catch (e) {
        console.warn('Unable to expose ThemeManager on window:', e);
    }
    // Ensure transitions are re-enabled shortly after init to allow smooth toggles
    setTimeout(function(){
        try { document.documentElement.classList.remove('no-theme-transitions'); } catch (e) { /* ignore */ }
    }, 120);
})();
