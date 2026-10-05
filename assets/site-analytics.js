/* MRMProLeads V5.5.7 production analytics normalization. */
(function(){
  'use strict';
  function fire(name, params){
    try { if (typeof window.gtag === 'function') window.gtag('event', name, params || {}); } catch (_) {}
  }
  var hasCta = document.documentElement.hasAttribute('data-mrm-cta-analytics');
  var hasPilot = document.documentElement.hasAttribute('data-mrm-pilot-analytics');
  if (!hasCta) {
    document.addEventListener('click', function(e){
      var el = e.target && e.target.closest ? e.target.closest('a,button') : null;
      if (!el) return;
      var href = el.getAttribute('href') || '';
      var text = (el.textContent || '').trim().replace(/\s+/g,' ').slice(0,100);
      var cta = /#contact|#pilot|\/api\/pilot|research-starter|pricing|request|pilot|scope/i.test(href + ' ' + text);
      if (cta) fire('cta_click', {cta_text:text, cta_href:href.slice(0,180)});
    }, {passive:true});
  }
  if (!hasPilot) {
    var started = new WeakSet();
    document.addEventListener('focusin', function(e){
      var form = e.target && e.target.closest ? e.target.closest('form[action="/api/pilot"]') : null;
      if (!form || started.has(form)) return;
      started.add(form);
      fire('pilot_form_started', {method:'website_form'});
    });
  }
})();
