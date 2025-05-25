
  window.addEventListener('load', () => {
    setTimeout(() => {
      const overlay = document.getElementById('yokoso-overlay');
      overlay.classList.add('hide');
      setTimeout(() => {
        overlay.style.display = 'none';
      }, 2000); // matches CSS fade duration
    }, 3000); // shows for 3 seconds
  });
