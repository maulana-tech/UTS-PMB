// ========================================
// PARALLAX EFFECT WITH AOS
// ========================================

(function() {
  'use strict';

  // Initialize AOS with extended settings
  AOS.init({
    duration: 1200,
    easing: 'ease-in-out',
    once: false,
    mirror: true,
    anchorPlacement: 'top-bottom',
  });

  // ========================================
  // PARALLAX SCROLL HANDLING
  // ========================================

  class ParallaxManager {
    constructor() {
      this.scrollY = 0;
      this.lastScrollY = 0;
      this.delta = 5;
      this.isScrolling = false;
      this.parallaxElements = document.querySelectorAll('[data-parallax]');
      this.init();
    }

    init() {
      this.bindEvents();
      this.updateParallax();
    }

    bindEvents() {
      window.addEventListener('scroll', () => this.onScroll(), { passive: true });
      window.addEventListener('resize', () => this.onResize(), { passive: true });
    }

    onScroll() {
      this.scrollY = window.pageYOffset;
      if (!this.isScrolling) {
        this.isScrolling = true;
        requestAnimationFrame(() => this.updateParallax());
      }
    }

    onResize() {
      this.updateParallax();
    }

    updateParallax() {
      this.parallaxElements.forEach((element) => {
        const parallaxValue = element.getAttribute('data-parallax');
        
        if (parallaxValue !== null) {
          const speed = parseFloat(parallaxValue) || 0.5;
          const elementOffset = element.getBoundingClientRect().top;
          const yPos = -elementOffset * speed;
          
          element.style.transform = `translateY(${yPos}px)`;
        }
      });

      this.isScrolling = false;
    }
  }

  // ========================================
  // HEADER HIDE/SHOW ON SCROLL
  // ========================================

  class HeaderScroller {
    constructor() {
      this.header = document.querySelector('header');
      this.lastScrollTop = 0;
      this.delta = 5;
      this.navbarHeight = this.header ? this.header.offsetHeight : 0;
      this.init();
    }

    init() {
      if (!this.header) return;
      window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
    }

    handleScroll() {
      const st = window.pageYOffset;

      // Make sure they scroll more than delta
      if (Math.abs(this.lastScrollTop - st) <= this.delta) {
        return;
      }

      // If they scrolled down and are past the navbar
      if (st > this.lastScrollTop && st > this.navbarHeight) {
        // Scroll Down
        this.header.classList.remove('nav-down');
        this.header.classList.add('nav-up');
      } else {
        // Scroll Up
        if (st - window.innerHeight < document.documentElement.scrollHeight) {
          this.header.classList.remove('nav-up');
          this.header.classList.add('nav-down');
        }
      }

      this.lastScrollTop = st;
    }
  }

  // ========================================
  // SCROLL INDICATORS
  // ========================================

  class ScrollIndicator {
    constructor() {
      this.sections = document.querySelectorAll('[data-section]');
      this.indicators = document.querySelectorAll('.indicator-dot');
      this.init();
    }

    init() {
      if (this.indicators.length === 0) return;
      window.addEventListener('scroll', () => this.updateIndicators(), { passive: true });
      this.updateIndicators();
    }

    updateIndicators() {
      let current = 0;
      
      this.sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          current = index;
        }
      });

      this.indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === current);
      });
    }
  }

  // ========================================
  // PARALLAX TEXT ANIMATION
  // ========================================

  class ParallaxText {
    constructor() {
      this.textElements = document.querySelectorAll('[data-aos="parallax-text"]');
      this.init();
    }

    init() {
      this.textElements.forEach((element) => {
        this.observeElement(element);
      });
    }

    observeElement(element) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateText(entry.target);
          }
        });
      }, { threshold: 0.3 });

      observer.observe(element);
    }

    animateText(element) {
      const textElements = element.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span');
      textElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
      });
    }
  }

  // ========================================
  // PARALLAX DEPTH EFFECT
  // ========================================

  class ParallaxDepth {
    constructor() {
      this.depthContainers = document.querySelectorAll('.parallax-depth');
      this.init();
    }

    init() {
      window.addEventListener('mousemove', (e) => this.handleMouseMove(e), { passive: true });
    }

    handleMouseMove(e) {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;

      this.depthContainers.forEach((container) => {
        const layers = container.querySelectorAll('.depth-layer');
        
        layers.forEach((layer, index) => {
          const moveX = x * (index + 1) * 10;
          const moveY = y * (index + 1) * 10;
          
          layer.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
        });
      });
    }
  }

  // ========================================
  // PARALLAX IMAGE ZOOM
  // ========================================

  class ParallaxImageZoom {
    constructor() {
      this.images = document.querySelectorAll('[data-aos="parallax-image"]');
      this.init();
    }

    init() {
      this.images.forEach((image) => {
        image.addEventListener('mouseenter', () => this.zoomIn(image));
        image.addEventListener('mouseleave', () => this.zoomOut(image));
      });
    }

    zoomIn(image) {
      const img = image.querySelector('img');
      if (img) {
        img.style.transform = 'scale(1.05)';
      }
    }

    zoomOut(image) {
      const img = image.querySelector('img');
      if (img) {
        img.style.transform = 'scale(1)';
      }
    }
  }

  // ========================================
  // SMOOTH SCROLL TO SECTIONS
  // ========================================

  class SmoothScroll {
    constructor() {
      this.links = document.querySelectorAll('a[href^="#"]');
      this.init();
    }

    init() {
      this.links.forEach((link) => {
        link.addEventListener('click', (e) => this.handleClick(e));
      });
    }

    handleClick(e) {
      const href = e.currentTarget.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // ========================================
  // INITIALIZE ALL ON DOM READY
  // ========================================

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      new ParallaxManager();
      new HeaderScroller();
      new ScrollIndicator();
      new ParallaxText();
      new ParallaxDepth();
      new ParallaxImageZoom();
      new SmoothScroll();
    });
  } else {
    new ParallaxManager();
    new HeaderScroller();
    new ScrollIndicator();
    new ParallaxText();
    new ParallaxDepth();
    new ParallaxImageZoom();
    new SmoothScroll();
  }

})();
