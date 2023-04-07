const inputs = [5, 50, 10, 98, 235, 53, 12, 90, 23];
let i = 0;

function gets() {
    const value = inputs[i];
    i++;
    return value;    
}

function print(text) {
  console.log(text);
}
module.exports = { gets, print };
