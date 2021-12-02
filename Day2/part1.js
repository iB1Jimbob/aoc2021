const fs = require('fs');
let input = fs.readFileSync('./input.txt','utf8');
input = input.split('\n');
for (let i = 0;i<input.length;i++) {
    input[i] = input[i].split(' ')
    let amnt = input[i][1];
    input[i][1] = parseFloat(amnt)
}
let horizontal = 0;
let depth = 0;
for (let j = 0;j<input.length;j++) {
    let command = input[j][0];
    let amnt = input[j][1];
    if (command === 'forward') {
        horizontal += amnt;
    }else if (command === 'down') {
        depth += amnt;
    }else if (command === 'up') {
        depth -= amnt;
    }else{
        console.log('Error!')
    }
}
console.log(horizontal * depth)