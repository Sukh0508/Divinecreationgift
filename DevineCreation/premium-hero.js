/**
 * Premium Hero Section Enhancements
 * Optimized for performance - reduced blur, throttled events, simpler effects
 */

class PremiumHero {
  constructor() {
    this.hero = document.querySelector('.hero');
    this.heroContent = document.querySelector('.hero-content');
    this.heroBtn = document.querySelector('.hero-btn');
    this.heading = document.querySelector('.hero-content h1');
    this.mouseX = 0;
    this.mouseY = 0;
    this.throttleTimer = null;
    
    if (!this.hero) return;
    
    this.setupCursorGlow();
    this.setupButtonEffects();
    this.setupScrollReveal();
  }

  /**
   * Create and manage animated cursor glow effect - THROTTLED
   */
  setupCursorGlow() {
    // Create glow element with reduced blur for performance
    const glow = document.createElement('div');
    glow.id = 'cursor-glow';
    glow.style.cssText = `
      position: fixed;
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(212, 175, 122, 0.25) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 1000;
      filter: blur(40px);
      will-change: transform;
    `;
    document.body.appendChild(glow);

    // Track mouse over hero only
    this.hero.addEventListener('mouseenter', () => {
      glow.style.opacity = '1';
    });

    this.hero.addEventListener('mouseleave', () => {
      glow.style.opacity = '0';
    });

    // Throttled mousemove - update only every 16ms (~60fps)
    document.addEventListener('mousemove', (e) => {
      if (glow.style.opacity === '1') {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        
        if (!this.throttleTimer) {
          this.throttleTimer = requestAnimationFrame(() => {
            glow.style.transform = `translate(${this.mouseX - 150}px, ${this.mouseY - 150}px)`;
            this.throttleTimer = null;
          });
        }
      }
    });
  }

  /**
   * Enhance button with ripple and glow effects
   */
  setupButtonEffects() {
    if (!this.heroBtn) return;

    this.heroBtn.addEventListener('click', (e) => {
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 10px;
        height: 10px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        animation: rippleExpand 0.6s ease-out;
      `;
      this.heroBtn.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  }

  /**
   * Handle scroll-based reveal animations
   */
  setupScrollReveal() {
    if (!this.heroContent) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(this.heroContent);
  }
}

/**
 * Initialize premium hero when DOM is ready
 */
function initPremiumHero() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      new PremiumHero();
    });
  } else {
    new PremiumHero();
  }
}

// Start initialization
initPremiumHero();
