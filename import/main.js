/* A classroom has 5 students and each one of them was given a random number between  1-100
 Make a program that receives the five random numbers for the students and  shows the biggest one
 
 INPUT:
 5
 50
 10
 98
 23

 OUTPUT:
 98

*/
// const functions = require('./auxiliary-functions');

// console.log(functions);

const { gets, print } = require('./auxiliary-functions')

const randomNumbers = [];

for (let i=0; i<5; i++ ){
    const randomNumber = gets();
    randomNumbers.push(randomNumber);
}

let biggestNumber = -1;
for (let i =0 ; i < randomNumbers.length; i++){
    const randomNumber = randomNumbers[i];
    if(randomNumber > biggestNumber){
        biggestNumber = randomNumber;
    }
}

print(biggestNumber);