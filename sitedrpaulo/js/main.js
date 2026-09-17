// Dr. Paulo Camurça — menu mobile, lightbox da galeria e ano do rodapé
(function(){
  var toggle = document.getElementById('menuToggle');
  var menu = document.getElementById('mobileMenu');

  function closeMenu(){
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded','false');
    toggle.setAttribute('aria-label','Abrir menu de navegação');
  }
  function openMenu(){
    menu.classList.add('is-open');
    toggle.setAttribute('aria-expanded','true');
    toggle.setAttribute('aria-label','Fechar menu de navegação');
  }
  toggle.addEventListener('click', function(){
    var isOpen = menu.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  });
  menu.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && menu.classList.contains('is-open')) closeMenu();
  });

  // Gallery lightbox
  var lightbox = document.getElementById('lightbox');
  var lightboxTitle = document.getElementById('lightboxTitle');
  var lastFocused = null;
  document.querySelectorAll('.gallery-item').forEach(function(btn){
    btn.addEventListener('click', function(){
      lastFocused = document.activeElement;
      lightboxTitle.textContent = btn.getAttribute('data-label') || 'Imagem';
      lightbox.classList.add('is-open');
      document.getElementById('lightboxClose').focus();
    });
  });
  function closeLightbox(){
    lightbox.classList.remove('is-open');
    if(lastFocused) lastFocused.focus();
  }
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function(e){ if(e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
