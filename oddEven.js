
/* Assignment: JavaScript Program to Check if a Number is Odd or Even */

// Prompt the user to enter any number and store it in the 'number' variable
var number = prompt("Enter any number to check if it's odd or even");

// Output the remainder when the number is divided by 2 to the console
console.log(number % 2);

// Check if the remainder is 0, indicating an even number
if (number % 2 === 0) {
    // If even, display an alert indicating that the number is even
    alert("The number is even");
} else {
    // If not even (odd), display an alert indicating that the number is odd
    alert("The number is odd");
}
