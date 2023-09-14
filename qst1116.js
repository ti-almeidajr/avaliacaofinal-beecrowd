let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');


let qntVezes = parseInt(lines.shift());

    for (let i = 0; i < qntVezes; i++) {
        let format = lines.shift().split(` `);
        let valX = parseInt(format.shift());
        let valY = parseInt(format.shift());
        if (valY === 0) {
            console.log("divisao impossivel");
        } else {
            let resultDivisao = parseFloat(valX / valY);
            console.log(resultDivisao.toFixed(1));
        }
    }  