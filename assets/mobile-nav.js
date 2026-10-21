/* MRMProLeads mobile header behavior.
 * Fixes the missing /assets/mobile-nav.js request referenced by site pages.
 * On small screens, the sticky header hides while scrolling down and returns
 * when scrolling up or when the user focuses/interacts with navigation.
 */
(() => {
  'use strict';

  const init = () => {
    const header = document.querySelector('.mrm-canonical-header');
    if (!header || header.dataset.mobileNavReady === '1') return;
    header.dataset.mobileNavReady = '1';

    const media = window.matchMedia('(max-width: 760px)');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 760px) {
        .mrm-canonical-header { transition: transform ${reduceMotion.matches ? '0s' : '0.28s'} ease; }
        .mrm-canonical-header.mrm-header-hidden { transform: translateY(calc(-100% - 2px)); }
      }
    `;
    document.head.appendChild(style);

    let revealZone = document.getElementById('navRevealZone');
    if (!revealZone) {
      revealZone = document.createElement('div');
      revealZone.id = 'navRevealZone';
      revealZone.setAttribute('aria-hidden', 'true');
      revealZone.style.cssText = 'position:fixed;top:0;left:0;right:0;height:14px;z-index:2001;';
      document.body.appendChild(revealZone);
    }

    let lastY = Math.max(0, window.scrollY || 0);
    let ticking = false;
    const threshold = 8;
    const topKeep = 100;
    const show = () => header.classList.remove('mrm-header-hidden');
    const hide = () => { if (media.matches && window.scrollY > topKeep) header.classList.add('mrm-header-hidden'); };

    const update = () => {
      const y = Math.max(0, window.scrollY || 0);
      const delta = y - lastY;
      if (!media.matches || y <= topKeep || delta < -threshold) show();
      else if (delta > threshold) hide();
      lastY = y;
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }, { passive: true });
    revealZone.addEventListener('pointerenter', show, { passive: true });
    revealZone.addEventListener('touchstart', show, { passive: true });
    header.addEventListener('focusin', show);
    header.addEventListener('pointerdown', show, { passive: true });
    media.addEventListener?.('change', () => {
      show();
      lastY = Math.max(0, window.scrollY || 0);
    });
    reduceMotion.addEventListener?.('change', () => {
      style.textContent = `@media (max-width: 760px) { .mrm-canonical-header { transition: transform ${reduceMotion.matches ? '0s' : '0.28s'} ease; } .mrm-canonical-header.mrm-header-hidden { transform: translateY(calc(-100% - 2px)); } }`;
    });
    show();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
