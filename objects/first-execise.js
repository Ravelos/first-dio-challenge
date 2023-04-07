

/* This is a program for calculating the value spent on a trip by a car.
We created a class and you can create more objects from that one and repeat the process
You can run node first-exercise.js in the console to test it
 */

class car{
    brandName;
    color;
    gasConsumptionPerKm;

    constructor(brandName,color,gasConsumptionPerKm){
        this.brandName = brandName;
        this.color = color;
        this.gasConsumptionPerKm = gasConsumptionPerKm;

    }

    gasExpenses(gasPrice,distanceKm){
        return distanceKm * this.gasConsumptionPerKm * gasPrice;
    }
}

const volvo = new car('volvo','red', 3/12);

console.log('You spent '+ volvo.gasExpenses(5,25) + '$Rs on this trip');


/*
Create a class person to calculate its BMI(Body Mass Index)
*/

class person{
    personName;
    weightInKg;
    heightInMeters;

    constructor(personName,weightInKg,heightInMeters){
        this.personName = personName;
        this.weightInKg = weightInKg;
        this.heightInMeters = heightInMeters;
    }

    calculateBMI(){
        return this.weightInKg / (this.heightInMeters * this.heightInMeters);
    }
}

const robert = new person('Robert', 80 , 7/4);

console.log('Your BMI is: '+ robert.calculateBMI());