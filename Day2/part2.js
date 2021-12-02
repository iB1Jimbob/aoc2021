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
let aim = 0;
for (let j = 0;j<input.length;j++) {
    let command = input[j][0];
    let amnt = input[j][1];
    if (command === 'forward') {
        horizontal += amnt;
        depth += aim * amnt;
    }else if (command === 'down') {
        aim += amnt;
    }else if (command === 'up') {
        aim -= amnt;
    }else{
        console.log('Error!')
    }
}
console.log(horizontal * depth);