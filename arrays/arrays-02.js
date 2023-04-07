//  Create a program that check a list of numbers and can print all even numbers on it

const numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

for (let i = 0; i < numbers.length ; i++){
    const number = numbers[i];
    if(number % 2 === 0){
        console.log(number);
    }
}