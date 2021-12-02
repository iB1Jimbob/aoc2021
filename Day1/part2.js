const fs = require('fs');
let input = fs.readFileSync('./input.txt','utf8');
input = input.split('\n');
for (let i = 0;i<input.length;i++) {
    input[i] = parseFloat(input[i])
}


let result = 0
for (let j = 0;j<input.length;j++) {
    let sum1 = input[j] + input[j + 1] + input[j + 2];
    let sum2 = input[j + 1] + input[j + 2] + input[j + 3];
    if (sum1 < sum2) {
        result++;
    }
}
console.log(result)