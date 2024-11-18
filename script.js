// Slideshow
let slideIndex = 0;

function mostrarSlides() {
  const slides = document.querySelectorAll('.slide');
  
  slides.forEach((slide, index) => {
    slide.classList.remove('ativo'); // Remove a classe "ativo" de todos os slides
    if (index === slideIndex) {
      slide.classList.add('ativo'); // Adiciona a classe "ativo" ao slide atual
    }
  });

  slideIndex = (slideIndex + 1) % slides.length; // Alterna entre os slides
}

// Inicia o slideshow
setInterval(mostrarSlides, 3000); // Troca de imagem a cada 3 segundos

// Produtos e Carrinho
const produtos = [
  { id: 1, nome: 'Produto 1', preco: 100, imagem: 'livro1.jpg' },
  { id: 2, nome: 'Produto 2', preco: 200 },
];

let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Função para adicionar produtos ao carrinho
function adicionarAoCarrinho(id) {
  const produto = produtos.find((p) => p.id === id);
  if (produto) {
    carrinho.push(produto); // Adiciona o produto ao carrinho
    salvarCarrinho();
    alert('${livro} foi adicionado ao carrinho!');
  } else {
    alert('Produto não encontrado!');
  }
  exibirCarrinho();
}

// Exibe o carrinho na página do carrinho
function exibirCarrinho() {
  const listaCarrinho = document.getElementById('itens-carrinho');
  const totalElement = document.getElementById('total');

  // Limpa a lista atual
  listaCarrinho.innerHTML = '';

  let total = 0;

  carrinho.forEach((produto, index) => {
    const item = document.createElement('li');
    
    // Cria o elemento de imagem
    const img = document.createElement('img');
    img.src = 'imagens/${produto.imagem}'; // Assume que a propriedade 'imagem' contém o nome do arquivo da imagem
    img.alt = produto.nome;
    img.style.width = '50px'; // Tamanho da imagem (ajuste conforme necessário)
    img.style.marginRight = '10px'; // Espaçamento à direita da imagem

    // Cria o texto com o nome e preço
    const descricao = document.createElement('span');
    descricao.textContent = '${produto.nome} - R$ ${produto.preco.toFixed(2)}';

    // Cria o botão de remover
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.onclick = () => removerDoCarrinho(index);

    item.appendChild(img); // Adiciona a imagem
    item.appendChild(descricao); // Adiciona o nome e o preço
    item.appendChild(botaoRemover); // Adiciona o botão de remover
    listaCarrinho.appendChild(item); // Adiciona o item à lista

    total += produto.preco; // Soma o preço ao total
  });

  totalElement.textContent = 'Total: R$ ${total.toFixed(2)}';
}

// Salva o carrinho no localStorage
function salvarCarrinho() {
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Exibe o carrinho na página do carrinho
function exibirCarrinho() {
  const listaCarrinho = document.getElementById('itens-carrinho');
  const totalElement = document.getElementById('total');

  // Limpa a lista atual
  listaCarrinho.innerHTML = '';

  let total = 0;

  carrinho.forEach((produto, index) => {
    const item = document.createElement('li');
    item.textContent = '${livro} - R$ ${livro)}';
    
    // Botão para remover item do carrinho
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.onclick = () => removerDoCarrinho(index);

    item.appendChild(botaoRemover);
    listaCarrinho.appendChild(item);

    total += produto.preco; // Soma o preço ao total
  });

  totalElement.textContent = 'Total: R$ ${total.livro)}';
}

// Remove um produto do carrinho
function removerDoCarrinho(index) {
  carrinho.splice(index, 1); // Remove o item do carrinho
  salvarCarrinho();
  exibirCarrinho();
}

// Finaliza a compra
function finalizarCompra() {
  if (carrinho.length === 0) {
    alert('Seu carrinho está vazio!');
    return;
  }

  alert('Compra finalizada com sucesso!');
  carrinho = []; // Limpa o carrinho
  salvarCarrinho();
  exibirCarrinho();
}

// Exibe o carrinho automaticamente ao carregar a página do carrinho
if (window.location.pathname.endsWith('carrinho.html')) {
  exibirCarrinho();
}