document.addEventListener("DOMContentLoaded", function() {
  // Carrossel de imagens
  let currentImageIndex = 0;
  const images = document.querySelectorAll('.carousel-image');

  function switchImage() {
    images.forEach((img, index) => {
      img.style.display = index === currentImageIndex ? 'block' : 'none';
    });
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }

  setInterval(switchImage, 3000); // Troca de imagem a cada 3 segundos

  // Gerenciamento do carrinho
  let cart = [];

  // Função para adicionar produto ao carrinho
  window.addToCart = function(productName) {
    cart.push(productName);
    alert('${productName} foi adicionado ao carrinho.');
  };

  // Exibir o conteúdo do carrinho
  const cartBtn = document.getElementById("cart-btn");
  if (cartBtn) {
    cartBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        alert("O carrinho está vazio.");
      } else {
        alert('Produtos no carrinho: \n- ${cart.join('\n- ')}');
      }
    });
  }
});