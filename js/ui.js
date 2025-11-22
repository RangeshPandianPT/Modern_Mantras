/* Lightweight UI helpers: back-to-top button, sticky header, smooth scroll */
(function(){
  function onReady(fn){
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  onReady(function(){
    // Back to top button
    var btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.setAttribute('aria-label','Back to top');
    btn.innerHTML = '<span aria-hidden>↑</span>';
    document.body.appendChild(btn);

    function toggleBtn(){
      if (window.scrollY > 300) btn.classList.add('visible');
      else btn.classList.remove('visible');
    }

    window.addEventListener('scroll', toggleBtn);
    btn.addEventListener('click', function(){
      window.scrollTo({top:0, behavior:'smooth'});
    });

    // Sticky header behavior
    var header = document.getElementById('main-header');
    if (header){
      var lastScroll = 0;
      window.addEventListener('scroll', function(){
        var y = window.scrollY || document.documentElement.scrollTop;
        if (y > 60) header.classList.add('sticky');
        else header.classList.remove('sticky');
        lastScroll = y;
      }, {passive: true});
    }

    // Smooth internal anchor scroll for same-page links
    document.querySelectorAll('a[href^="#"]').forEach(function(a){
      a.addEventListener('click', function(e){
        var href = a.getAttribute('href');
        if (href.length > 1){
          var target = document.querySelector(href);
          if (target){
            e.preventDefault();
            target.scrollIntoView({behavior: 'smooth', block: 'start'});
            history.pushState && history.pushState(null, null, href);
          }
        }
      });
    });
  });
})();
