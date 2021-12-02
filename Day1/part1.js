const fs = require('fs');
let input = fs.readFileSync('./input.txt','utf8');
input = input.split('\n');
let bigger = [];
for (let i = 0;i<input.length;i++) {
    input[i] = parseFloat(input[i])
}
for (let j = 1;j<input.length;j++) {
    if(input[j] > input[j - 1]) {
        bigger.push(input[j]);
    }
}
console.log(bigger);
console.log(bigger.length);