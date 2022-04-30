let btnControlaMenu = document.querySelector('.cabecalho__btn-controla-menu');
let menu = document.querySelector('.cabecalho__menu');
let capa = document.querySelector('.cabecalho__capa-apos-menu');
btnControlaMenu.addEventListener('click', function () {
    menu.classList.toggle('menu-ativo');
    capa.classList.toggle('ativo');
});
capa.addEventListener('click', function () {
    menu.classList.remove('menu-ativo');
    this.classList.remove('ativo');
});