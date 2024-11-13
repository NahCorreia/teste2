// Código do Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.opacity = 1;
    setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
}

// Função de Pesquisa
document.getElementById("search-bar").addEventListener("input", function() {
    let query = this.value.toLowerCase();
    let results = document.getElementById("cart-items");
    results.innerHTML = ''; // Limpa os resultados anteriores

    // Exemplo de produtos fixos
    const produtos = ["Milkshake de Chocolate", "Livro Aventura", "Combo 1"];
    produtos.forEach(produto => {
        if (produto.toLowerCase().includes(query)) {
            let item = document.createElement("li");
            item.textContent = produto;
            results.appendChild(item);
        }
    });
});

function addToCart(productName) {
    let cartItems = document.getElementById("cart-items");
    let item = document.createElement("li");
    item.textContent = productName;
    cartItems.appendChild(item);
}