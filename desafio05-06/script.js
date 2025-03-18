let listaDeCompras = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: [],
    outros: []
  };
  
  function adicionarItem() {
    const item = document.getElementById('item').value.trim();
    const categoria = document.getElementById('categoria').value;
    const itemInput = document.getElementById('item');
    const categoriaInput = document.getElementById('categoria');
  
    if (item === '') {
      itemInput.classList.add('erro');
      alert('Por favor, insira o nome do item.');
      return;
    } else {
      itemInput.classList.remove('erro');
    }
  
    if (categoria === '') {
      categoriaInput.classList.add('erro');
      alert('Por favor, selecione uma categoria para o item.');
      return;
    } else {
      categoriaInput.classList.remove('erro');
    }
  
    const itemFormatado = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    listaDeCompras[categoria].push(itemFormatado);
  

    itemInput.value = '';
    categoriaInput.value = '';
    exibirLista();
  }
  
  
  function exibirLista() {
    const listaDiv = document.getElementById('lista');
    listaDiv.innerHTML = '';
  
    for (let categoria in listaDeCompras) {
      if (listaDeCompras[categoria].length > 0) {
        const titulo = document.createElement('h3');
        titulo.textContent = capitalizar(categoria); // Chama a função capitalizar
        listaDiv.appendChild(titulo);
  
        const ul = document.createElement('ul');
        listaDeCompras[categoria].forEach((item, index) => {
          const li = document.createElement('li');
          li.innerHTML = `
            <span>${item}</span>
            <div class="acoes">
              <button class="editar" onclick="editarItem('${categoria}', ${index})">Editar</button>
              <button onclick="removerItem('${categoria}', ${index})">Remover</button>
            </div>
          `;
          ul.appendChild(li);
        });
  
        listaDiv.appendChild(ul);
      }
    }
  }
  
  function removerItem(categoria, index) {
    if (confirm("Deseja remover esse item?")) {
      listaDeCompras[categoria].splice(index, 1);
      exibirLista();
    }
  }
  
  function editarItem(categoria, index) {
    const novoItem = prompt("Editar item:", listaDeCompras[categoria][index]);
    if (novoItem && novoItem.trim() !== '') {
      listaDeCompras[categoria][index] = novoItem.trim();
      exibirLista();
    }
  }
  
  function limparLista() {
    if (confirm("Tem certeza que deseja limpar toda a lista?")) {
      for (let categoria in listaDeCompras) {
        listaDeCompras[categoria] = [];
      }
      exibirLista(); 
    }
  }
  
  
  function capitalizar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  