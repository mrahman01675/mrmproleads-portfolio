/* MRMProLeads mobile header behavior.
   Restores the shared script referenced by site pages. Keeps the existing sticky header
   visible at the top, hides it while scrolling down on narrow screens, and reveals it
   when scrolling up or returning near the top. */
(function () {
  'use strict';
  var header = document.querySelector('.mrm-canonical-header');
  if (!header || !window.matchMedia || !window.matchMedia('(max-width: 780px)').matches) return;

  var previousY = window.scrollY || window.pageYOffset || 0;
  var ticking = false;
  var threshold = 10;

  header.style.transition = 'transform 180ms ease';
  header.style.willChange = 'transform';

  function updateHeader() {
    var currentY = window.scrollY || window.pageYOffset || 0;
    var delta = currentY - previousY;
    if (currentY < 80 || delta < -threshold) {
      header.style.transform = 'translateY(0)';
    } else if (delta > threshold) {
      header.style.transform = 'translateY(-110%)';
    }
    previousY = currentY;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', function () {
    if (!window.matchMedia('(max-width: 780px)').matches) header.style.transform = 'translateY(0)';
  }, { passive: true });
})();
