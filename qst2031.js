let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');


const qnt = lines.shift();

    for(let i = 0; i < qnt; i++) {
        let jogador1 = lines.shift().trim();
        let jogador2 = lines.shift().trim();
        switch(jogador1) {
            case 'ataque':
                if(jogador1 == jogador2) {
                    console.log("Aniquilacao mutua");
                } else {
                    console.log("Jogador 1 venceu");
                }
                break;
            case 'pedra':
                if(jogador1 == jogador2) {
                    console.log("Sem ganhador");
                } else if(jogador2 == "ataque") {
                    console.log("Jogador 2 venceu");
                } else {
                    console.log("Jogador 1 venceu");
                }
                break;
            case 'papel':
                if(jogador1 == jogador2) {
                    console.log("Ambos venceram");
                } else {
                    console.log("Jogador 2 venceu");
                }
                break;
    }
}
