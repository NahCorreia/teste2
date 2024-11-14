// Carrossel de imagens
let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function showNextImage() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
}

setInterval(showNextImage, 3000);  // Troca de imagem a cada 3 segundos

// Função de adicionar ao carrinho (simplificada)
let cart = [];

function addToCart(productId) {
    cart.push(productId);
    alert("Produto adicionado ao carrinho!");
    updateCartCount();
}

function updateCartCount() {
    document.getElementById('cartLink').textContent = 'Carrinho (${cart.length})';
}