export default function navegacaoTab() {
  const listaImagens = document.querySelectorAll(
    '[data-navegacao="menu"] .imagem-box'
  );
  const listaDescricao = document.querySelectorAll(
    '[data-navegacao="conteudo"] li'
  );

  listaDescricao[0].classList.add('ativo');
  function abrirDescricao(index) {
    listaDescricao.forEach(item => {
      item.classList.remove('ativo');
    });
    listaDescricao[index].classList.add('ativo');
  }
  listaImagens.forEach((menu, index) => {
    menu.addEventListener('click', () => {
      abrirDescricao(index);
    });
  });
}
