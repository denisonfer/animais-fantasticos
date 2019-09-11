export default function listaAcordion() {
  const perguntas = document.querySelectorAll('[data-perguntas] dt');
  const respostas = document.querySelectorAll('[data-perguntas] dd');

  respostas[0].classList.add('ativo');
  perguntas[0].classList.add('ativo');
  function ativaEfeito(index) {
    respostas[index].classList.toggle('ativo');
    perguntas[index].classList.toggle('ativo');
  }

  perguntas.forEach((item, index) => {
    item.addEventListener('click', () => {
      ativaEfeito(index);
    });
  });
}
