// Define an object representing a car
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "blue",
    
    // Method to display the car's details
    displayInfo: function() {
        console.log(`Car: ${this.make} ${this.model} (${this.year}), Color: ${this.color}`);
    },
    
    // Method to repaint the car
    repaint: function(newColor) {
        this.color = newColor;
        console.log(`The car has been repainted to ${this.color}.`);
    }
};

// Calling methods on the car object
car.displayInfo();  // Output: Car: Toyota Corolla (2020), Color: blue
car.repaint("red");  // Output: The car has been repainted to red.
car.displayInfo();  // Output: Car: Toyota Corolla (2020), Color: red



// Function to calculate the age of the car
function calculateCarAge(year) {
    const currentYear = new Date().getFullYear();
    return currentYear - year;
}

// Test the function
console.log(calculateCarAge(2020));  // Output: Car's age, for example 4 if the current year is 2024.


// Function expression to check if the car is new (less than 5 years old)
const isNewCar = function(year) {
    const carAge = calculateCarAge(year);
    return carAge < 5;
};

// Test the function
console.log(isNewCar(2020));  // Output: true (as the car is less than 5 years old)


//////////////exercice 2

function sum(number) {
    let greater = number.filter(n => n > 20);
    let result = greater.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return result;
}

///////////exercice 3


function getNewArray(strings) {
    return strings.filter(s => s.length >= 5 && s.includes("a"));
}



///////////////exercice 4

function toUpperCaseStrings(arr) {
    return arr.reduce((acc, str) => {
        if (str.length > 5) {
            acc.push(str.toUpperCase());
        }
        return acc;
    }, []);
}


////////////////exercice 5 & 6 
/*      

the output is gonna be :

undefined 30
10 30

for the ec see the jpeg attached

/////////////exercice 6  output 

3 undefined
10 undefined 
10

*/

