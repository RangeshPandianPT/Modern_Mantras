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

        // Add a compact/shrink state when scrolled further
        if (y > 140) header.classList.add('shrink');
        else header.classList.remove('shrink');

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

    // Modal open/close handlers
    function openModal(modalId){
      var modal = document.getElementById(modalId);
      if (!modal) return;
      modal.classList.remove('hidden');
      document.documentElement.style.overflow = 'hidden';
    }

    function closeModal(modal){
      modal.classList.add('hidden');
      document.documentElement.style.overflow = '';
    }

    document.querySelectorAll('[data-open-modal]').forEach(function(btn){
      btn.addEventListener('click', function(e){
        e.preventDefault();
        var id = btn.getAttribute('data-open-modal');
        openModal(id);
      });
    });

    // Close buttons and backdrop
    document.querySelectorAll('.modal').forEach(function(modal){
      modal.addEventListener('click', function(e){
        if (e.target.classList.contains('modal') || e.target.classList.contains('modal-backdrop')){
          closeModal(modal);
        }
      });
      var close = modal.querySelector('.modal-close');
      if (close) close.addEventListener('click', function(){ closeModal(modal); });
    });

    // Enrollment form submit (demo) - replace with real endpoint if available
    var enrollForm = document.getElementById('enroll-form');
    if (enrollForm){
      enrollForm.addEventListener('submit', function(e){
        e.preventDefault();
        var data = new FormData(enrollForm);
        // For now just show a thank-you message
        alert('Thank you! We received your inquiry. We will contact you shortly.');
        closeModal(document.getElementById('enroll-modal'));
        enrollForm.reset();
      });
    }
  });
})();
