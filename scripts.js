// Alternância automática de imagens no carrossel
let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function switchImage() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add('active');
}

setInterval(switchImage, 3000); // Troca de imagem a cada 3 segundos

// Função de busca de produtos
function searchProducts() {
  const query = document.getElementById("search-bar").value.toLowerCase();
  const products = document.querySelectorAll(".product");
  
  products.forEach(product => {
    const name = product.getAttribute("data-name").toLowerCase();
    product.style.display = name.includes(query) ? "block" : "none";
  });
}

// Gerenciamento do carrinho
let cart = [];

function addToCart(productName) {
  cart.push(productName);
  alert(${productName} foi adicionado ao carrinho.);
}

// Exibir o conteúdo do carrinho
document.getElementById("cart-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("O carrinho está vazio.");
  } else {
    alert(Produtos no carrinho: \n- ${cart.join('\n- ')});
  }
});