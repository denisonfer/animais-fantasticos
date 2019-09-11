export default function menuMobile() {
  const botaoMenu = document.querySelector('[data-mobile="botao-menu"]');
  const listaMenu = document.querySelector('#lista-menu');
  const { body } = document;

  function handleMenu(event) {
    const alvo = event.target;
    if (alvo === botaoMenu) {
      listaMenu.classList.toggle('ativo');
      botaoMenu.classList.toggle('ativo');
    } else if (alvo === listaMenu) {
      listaMenu.classList.remove('ativo');
      botaoMenu.classList.remove('ativo');
    } else {
      listaMenu.classList.remove('ativo');
      botaoMenu.classList.remove('ativo');
    }
  }

  body.addEventListener('click', handleMenu);
}
