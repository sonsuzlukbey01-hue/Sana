onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  // message card handlers
  document.addEventListener('DOMContentLoaded', () => {
    const flowers = document.querySelectorAll('.flower');
    const overlay = document.getElementById('messageOverlay');
    const closeBtn = document.getElementById('closeMessage');

    if (flowers && overlay) {
      flowers.forEach(f => {
        f.addEventListener('click', () => {
          overlay.classList.add('show');
        });
      });

      closeBtn.addEventListener('click', () => {
        overlay.classList.remove('show');
      });

      overlay.addEventListener('click', e => {
        if (e.target === overlay) overlay.classList.remove('show');
      });
    }
  });