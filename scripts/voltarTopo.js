export default function voltarTopo() {
  const botao = document.querySelector('.botao-voltar-topo');

  function ativaEfeito() {
    const altura = document
      .querySelector('.menu-container')
      .getBoundingClientRect().bottom;
    if (altura < 0) {
      botao.classList.add('ativo');
    } else {
      botao.classList.remove('ativo');
    }
  }
  window.addEventListener('scroll', ativaEfeito);
}
