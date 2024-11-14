document.addEventListener("DOMContentLoaded", function() {
  // Alternância automática de imagens no carrossel
  let currentImageIndex = 0;
  const images = document.querySelectorAll('.carousel-image');

  function switchImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
  }

  setInterval(switchImage, 3000); // Troca de imagem a cada 3 segundos

  // Gerenciamento do carrinho
  let cart = [];

  window.addToCart = function(productName) {
    cart.push(productName);
    alert('${productName} foi adicionado ao carrinho.');
  }

  // Exibir o conteúdo do carrinho
  document.getElementById("cart-btn").addEventListener("click", () => {
    if (cart.length === 0) {
      alert("O carrinho está vazio.");
    } else {
      alert('Produtos no carrinho: \n- ${cart.join('\n- ')}');
    }
  });
});