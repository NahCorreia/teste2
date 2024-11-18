// Produtos disponíveis
const produtos = [
    { id: 1, nome: 'Produto 1', preco: 100 },
    { id: 2, nome: 'Produto 2', preco: 200 },
  ];
  
  // Carrinho de compras
  let carrinho = [];
  
  // Função para adicionar um produto ao carrinho
  function adicionarAoCarrinho(id) {
    const produto = produtos.find((p) => p.id === id);
  
    if (produto) {
      carrinho.push(produto);
      atualizarCarrinho();
      alert(${produto.nome} foi adicionado ao carrinho!);
    }
  }
  
  // Atualizar a exibição do carrinho
  function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('itens-carrinho');
    const totalDisplay = document.getElementById('total');
  
    // Limpa os itens do carrinho exibidos
    listaCarrinho.innerHTML = '';
  
    // Adiciona os itens ao carrinho
    let total = 0;
    carrinho.forEach((item, index) => {
      total += item.preco;
  
      const li = document.createElement('li');
      li.textContent = `${item.nome} - R$ ${item.preco},00 `;
      
      // Botão para remover item do carrinho
      const btnRemover = document.createElement('button');
      btnRemover.textContent = 'Remover';
      btnRemover.style.marginLeft = '10px';
      btnRemover.onclick = () => removerDoCarrinho(index);
      li.appendChild(btnRemover);
  
      listaCarrinho.appendChild(li);
    });
  
    // Atualiza o total
    totalDisplay.textContent = Total: R$ ${total},00;
  }
  
  // Remover item do carrinho
  function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
  }
  
  // Finalizar compra
  function finalizarCompra() {
    if (carrinho.length === 0) {
      alert('Seu carrinho está vazio!');
      return;
    }
  
    const total = carrinho.reduce((acc, item) => acc + item.preco, 0);
    alert(Compra finalizada! Total: R$ ${total},00);
    carrinho = [];
    atualizarCarrinho();
  }