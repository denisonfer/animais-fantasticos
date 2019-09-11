import ScrollSuave from './scrollSuave.js';
import modal from './modal.js';
import navegacaoTab from './navegacaoTab.js';

import voltarTopo from './voltarTopo.js';
import listaAcordion from './listaAcordion.js';
import funcionamento from './funcionamento.js';
import menuMobile from './menuMobile.js';
import api from './api.js';

const scrollsuave = new ScrollSuave('a[href^="#"]');
scrollsuave.init();

modal();
navegacaoTab();

voltarTopo();
listaAcordion();
menuMobile();
funcionamento();
api();
