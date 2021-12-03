const fs = require('fs');
let input = fs.readFileSync('./input.txt','utf8').split('\n');

let most = [];
let least = [];
for (let j = 0;j<12;j++) {
    let ones = 0;
    let zeros = 0;
    
    for (let i = 0;i<input.length;i++) {
        if (input[i][j] === '0') {
            zeros++
        }else if (input[i][j] === '1') {
            ones++
        }
    }
    if (zeros > ones) {
        most[j] = '0';
        least[j] = '1';
    }else if (zeros < ones) {
        most[j] = '1';
        least[j] = '0';
    }
}

let gamma = most.toString().replaceAll(',', '');
let epsilon = least.toString().replaceAll(',', '')

console.log(gamma);
console.log(epsilon)
console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));