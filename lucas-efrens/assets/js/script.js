var btnBar = document.querySelector('.btn-bar');

var menuPrincipal = document.querySelector('.menu');

btnBar.addEventListener('click', function() {

    menuPrincipal.removeAttribute('class')

    menuPrincipal.setAttribute('class', 'menu')
})


// botao fechar menu
var btnClose = document.querySelector('.close-btn');

btnClose.addEventListener('click', fecharMenu);

// botao portfolio
var btnPortfolio = document.querySelector('#portfolio');

btnPortfolio.addEventListener('click', fecharMenu);

// botao sobre
var btnSobre = document.querySelector('#sobre');

btnSobre.addEventListener('click', fecharMenu);
// funcao fechar menu
function fecharMenu() {

    menuPrincipal.classList.add('hide', 'menu')
}
