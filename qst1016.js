let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');


let distancia = lines.shift();
let qntMinutos = (distancia * 2);
console.log(qntMinutos, "minutos");