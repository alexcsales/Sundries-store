//cria os produtos de forma estatica
const produtos = [
  {
    nome: 'Camiseta',
    quantidade: 0
  },
  {
    nome: 'Calça',
    quantidade: 0
  },
  {
    nome: 'Tenis',
    quantidade: 0
  },
  {
    nome: 'Boné',
    quantidade: 0
  },
  {
    nome: 'Liquidificador',
    quantidade: 0
  },
  {
    nome: 'Geladeira',
    quantidade: 0
  },
  {
    nome: 'Mixer',
    quantidade: 0
  },
  {
    nome: 'Microondas',
    quantidade: 0
  }
]

//exibe que meu carrinho esta vazio emquanto não estiver com produtos.
let itens = 0

if (itens == 0) {
  carrinho.innerHTML = "";
  carrinho.innerHTML += `
  <div class="carrinho">
  <p carrinho__texto">Carrinho vazio</P>
  <hr>
<div
    `;
}

//confirmação de email do rodapé
function confirmaEmail() {
  alert('Seu email foi cadastrado🎉🎉🎉');
}

document.querySelector('.rodape__formulario___botao').onclick = confirmaEmail;
