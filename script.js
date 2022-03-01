const BRANCAS = ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i'];
const PRETAS = ['s', 'd', 'g', 'h', 'j', '2', '3', '5', '6', '7'];
const ACORDES = ['p', 'ç', '.', ';', '~'];

const keys = document.querySelectorAll('.tecla');
const teclaB = document.querySelectorAll('.tecla.branca');
const teclaP = document.querySelectorAll('.tecla.preta');

keys.forEach(tecla => {
    tecla.addEventListener('click', () => playNote(tecla));
})

document.addEventListener('keydown', e => {
    if (e.repeat) return
    const tecla = e.key;
    const brancaIndex = BRANCAS.indexOf(tecla);
    const pretaIndex = PRETAS.indexOf(tecla);
    const acordeIndex = ACORDES.indexOf(tecla);

    if(brancaIndex > -1) playNote(teclaB[brancaIndex])
    if(pretaIndex > -1) playNote(teclaP[pretaIndex])
    if(acordeIndex > -1) acorde(acordeIndex);

})

function playNote(tecla){
    const som = document.getElementById(tecla.dataset.note);
    som.currentTime = 0;
    som.play();
    tecla.classList.add('ativo');
    som.addEventListener('ended', () => {
        tecla.classList.remove('ativo');
       }
    )
}

function acorde(toca){
    if(toca===0){
        playNote(teclaB[0]);
        playNote(teclaB[2]);
        playNote(teclaB[4]);
    }
    else if(toca===1){
        playNote(teclaB[1]);
        playNote(teclaB[3]);
        playNote(teclaB[5]);
    }
}