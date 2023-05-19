var setaDireita = window.document.getElementById('seta-direita');
var setaEsquerda = window.document.getElementById('seta-esquerda');
var leonardo = window.document.getElementById('leonardo');
var samanta = window.document.getElementById('samanta');
var bruna = window.document.getElementById('bruna');

function rolarParaDireita(){
    leonardo.style = 'display:none';
    bruna.style = 'display:flex';
    samanta.style = 'margin-right:0'
    setaDireita.style = 'display:none'
    setaEsquerda.style = 'display:flex; margin-top: 150%;'
}

function rolarParaEsquerda(){
    bruna.style = 'display:none';
    leonardo.style = 'display:flex';
    samanta.style = 'margin-right:50px'
    setaEsquerda.style = 'display:none';
    setaDireita.style = 'display:flex';
}