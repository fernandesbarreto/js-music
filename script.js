const BRANCAS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const PRETAS = ['s', 'd', 'g', 'h', 'j'];

const keys = document.querySelectorAll('.tecla');
const teclaB = document.querySelectorAll('.tecla.branca');
const teclaP = document.querySelectorAll('.tecla.preta');

keys.forEach(tecla => {
    tecla.addEventListener('click', () => playNote(tecla), 'mouse');
})

document.addEventListener('keydown', e => {
    if (e.repeat) return
    const tecla = e.key;
    const brancaIndex = BRANCAS.indexOf(tecla);
    const pretaIndex = PRETAS.indexOf(tecla);

    if(brancaIndex > -1) playNote(teclaB[brancaIndex], 'teclado')
    if(pretaIndex > -1) playNote(teclaP[pretaIndex], 'teclado')
})

function playNote(tecla, entrada){
    const som = document.getElementById(tecla.dataset.note);
    som.currentTime = 0;
    som.play();
    tecla.classList.add('ativo');
    som.addEventListener('ended', () => {
        tecla.classList.remove('ativo');
       }
    )
}