// ----------------------------- Lightbox --------------------------------------------


$(document).ready(function () {
    const imgElements = document.querySelectorAll('.img');
  
    imgElements.forEach(function (imgElement) {
      imgElement.addEventListener('click', function () {
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);
  
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
  
        const clonedImg = imgElement.cloneNode(true);
        lightbox.appendChild(clonedImg);
  
        const closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.className = 'close-button';
        closeButton.addEventListener('click', function () {
          overlay.classList.remove('active');
          lightbox.classList.remove('active');
          setTimeout(function () {
            document.body.removeChild(overlay);
            document.body.removeChild(lightbox);
          }, 300);
        });
        lightbox.appendChild(closeButton);
  
        document.body.appendChild(lightbox);
  
        setTimeout(function () {
          overlay.classList.add('active');
          lightbox.classList.add('active');
        }, 50);
      });
    });
  });