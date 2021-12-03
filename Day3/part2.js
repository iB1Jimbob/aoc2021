//*******************************
// Code credits to NinoDS
// https://github.com/NinoDS
// Thanks for helping me!
//*******************************

const fs = require('fs');
let input = fs.readFileSync('./input.txt','utf8').split('\n');

let oxygenGenerator = input;

for (let i = 0; i < input[0].length; i++) {
    if (oxygenGenerator.length === 1) break;
    let ones = [], zeros = [];
    for (const num of oxygenGenerator) {
        if (num[i] === '1') {
            ones.push(num);
        }
        if (num[i] === '0') {
            zeros.push(num);
        }
    }
    if (ones.length >= zeros.length) {
        oxygenGenerator = ones;
    } else {
        oxygenGenerator = zeros;
    }
}

let co2Scrubber = input;

for (let i = 0; i < input[0].length; i++) {
    if (co2Scrubber.length === 1) break;
    let ones = [], zeros = [];
    for (const num of co2Scrubber) {
        if (num[i] === '1') {
            ones.push(num);
        }
        if (num[i] === '0') {
            zeros.push(num);
        }
    }
    if (ones.length < zeros.length) {
        co2Scrubber = ones;
    } else {
        co2Scrubber = zeros;
    }
}

let result = parseInt(oxygenGenerator[0], 2) * parseInt(co2Scrubber[0], 2);

console.log(result);