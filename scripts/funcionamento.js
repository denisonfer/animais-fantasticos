export default function funcionamento() {
  const diasdaSemana = document
    .querySelector('[data-semana]')
    .dataset.semana.split(',')
    .map(Number);
  const horarios = document
    .querySelector('[data-horario]')
    .dataset.horario.split(',')
    .map(Number);

  const diaAtual = new Date().getDay();
  const horaAtual = new Date().getHours();

  const checarDia = !!diasdaSemana.indexOf(diaAtual);
  const checarHora = !!(horaAtual >= horarios[0] && horaAtual < horarios[1]);

  if (checarDia && checarHora) {
    const funcionamentos = document.querySelector('[data-funcionamento] p');
    funcionamentos.classList.add('aberto');
  } else {
    const funcionamentos = document.querySelector('[data-funcionamento] p');
    funcionamentos.classList.add('fechado');
  }
}
