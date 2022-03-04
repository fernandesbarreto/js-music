const BRANCAS = ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i'];
const PRETAS = ['s', 'd', 'g', 'h', 'j', '2', '3', '5', '6', '7'];

const keys = document.querySelectorAll('.tecla');
const teclaB = document.querySelectorAll('.tecla.branca');
const teclaP = document.querySelectorAll('.tecla.preta');
const botao = document.getElementById('botao');

let tCerta=keys[0];

keys.forEach(tecla => {
    tecla.condicao=0;
    tecla.addEventListener('click', () => playNote(tecla, tecla.condicao));
})


botao.addEventListener('click', () => {
    let random = Math.floor((Math.random()*teclaB.length));
    playTeste(teclaB[random]);
}
);


document.addEventListener('keydown', e => {
    if (e.repeat) return
    const tecla = e.key;
    const brancaIndex = BRANCAS.indexOf(tecla);
    const pretaIndex = PRETAS.indexOf(tecla);

    if(brancaIndex > -1) playNote(teclaB[brancaIndex], 0)
    if(pretaIndex > -1) playNote(teclaP[pretaIndex], 0)
    if(acordeIndex > -1) acorde(acordeIndex, 0)

})

function playNote(tecla, teste){
    const som = document.getElementById(tecla.dataset.note);
    som.currentTime = 0;
    som.play();

    if(teste==1){
        tecla.classList.add('certo');
        som.addEventListener('ended', () => {
            tecla.classList.remove('certo');
           }
        )
        tecla.condicao=0;
    }else if(teste==2){
        tecla.classList.add('errado');
        som.addEventListener('ended', () => {
            tecla.classList.remove('errado');
           }
        )
    }else{
        tecla.classList.add('ativo');
        som.addEventListener('ended', () => {
            tecla.classList.remove('ativo');
        }
        )
    }

    keys.forEach(nota => {
        if(nota.condicao==1){
            nota.classList.add('certo');
            som.addEventListener('ended', () => {
                nota.classList.remove('certo');
            }
        )
        }
        nota.condicao=0;
    })
}

function playTeste(tecla){
    const som = document.getElementById(tecla.dataset.note);
    som.currentTime = 0;
    som.play();
    testando(tecla);
}

function testando(tecla){
    keys.forEach(nota => {
        nota.condicao=2;
    })
    tecla.condicao=1;
}