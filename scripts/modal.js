export default function modal() {
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const botaoLogin = document.querySelector('li [data-modal="abrir"]');
  const janelaModal = document.querySelector('div[data-modal]');

  // *********** CONTROLE DO MODAL ****************
  function abrirModal(event) {
    event.preventDefault();
    janelaModal.classList.add('ativo');
  }
  function fecharModal(event) {
    janelaModal.classList.remove('ativo');
    event.preventDefault();
  }
  function fecharFora(event) {
    if (event.target === this) {
      fecharModal(event);
    }
  }

  botaoLogin.addEventListener('click', abrirModal);
  botaoFechar.addEventListener('click', fecharModal);
  janelaModal.addEventListener('click', fecharFora);
}
