let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');


let idadeDias = parseInt(lines.shift());
let qntAnos = parseInt(idadeDias / 365);
console.log(qntAnos, "ano(s)");
let auxDias = (idadeDias % 365);
let qntMeses = parseInt(auxDias / 30);
console.log(qntMeses, "mes(es)");
auxDias = (auxDias % 30);
let qntDias = parseInt(auxDias / 1);
console.log(qntDias, "dia(s)");