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

let usuario = false

//exibe o formulario de login
function loginUsuario() {
  let login = document.getElementById('login');
  carrinho.innerHTML = "";
  login.innerHTML += `
  <form class="formulario">
  <label class="formulario__texto" for="nome">Usuário</label>
  <input class="formulario__input" type="text" id="nome" required>

  <label class="formulario__texto" for="senha">Senha</label>
  <input class="formulario__input" type="password" id="senha" required placeholder="senha">

  <button class="formulario__botao" type="submit">Login</button>
</form>
      `;
}

if (usuario == false) {
  loginUsuario();
}

//confirma o login do usuario.
function usuarioLogado() {
  alert('agora você esta logado e já pode fazer suas compras')
}

document.querySelector('.formulario__botao').onclick = usuarioLogado;


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
