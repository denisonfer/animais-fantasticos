import efeitoContador from './efeitoContador.js';

export default function api() {
  function criarHtml(animal) {
    const div = document.createElement('div');
    div.classList.add('numeros-box');
    div.innerHTML = `<h3>${animal.especie}</h3><span>${animal.total}</span>`;
    return div;
  }
  async function pegarDados() {
    const url = '../services/numeros.json';
    const response = await fetch(url);
    const dados = await response.json();
    const divNumeros = document.querySelector('.numeros-container');
    dados.forEach(animal => {
      const divDados = criarHtml(animal);
      divNumeros.appendChild(divDados);
    });
    efeitoContador();
  }

  pegarDados();
}
