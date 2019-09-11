export default function efeitoContador() {
  const numeros = document.querySelectorAll('[data-numeros] span');

  function efeito() {
    numeros.forEach(item => {
      const total = +item.innerText;
      const incremento = Math.floor(total / 100);
      let start = 0;
      const contagem = setInterval(() => {
        start += incremento;
        item.innerText = start;
        if (start > total) {
          clearInterval(contagem);
          item.innerText = total;
        }
      }, 10);
    });
  }

  function ativaEfeito() {
    const secaoNumeros = document.querySelector('.numeros').offsetTop * 0.6;
    const alturaTela = window.pageYOffset;

    if (alturaTela > secaoNumeros) {
      efeito();
      window.removeEventListener('scroll', ativaEfeito);
    }
  }

  window.addEventListener('scroll', ativaEfeito);
}
