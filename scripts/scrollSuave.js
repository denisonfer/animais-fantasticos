export default function scollSuave() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(element => {
    const href = element.getAttribute('href');
    const section = document.querySelector(href);

    function ativaEfeito(event) {
      event.preventDefault();
      section.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
    }
    element.addEventListener('click', ativaEfeito);
  });
}
