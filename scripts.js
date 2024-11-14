document.addEventListener("DOMContentLoaded", function() {
  let currentImageIndex = 0;
  const images = document.querySelectorAll('.carousel-image');

  function switchImage() {
    images.forEach((img, index) => {
      img.classList.toggle('active', index === currentImageIndex);
    });
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }

  setInterval(switchImage, 3000); // Troca de imagem a cada 3 segundos
});