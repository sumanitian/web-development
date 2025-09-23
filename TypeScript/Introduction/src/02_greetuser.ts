function greetUserwith(firstName: any) { // explicitly any time to the first name, like input will be string or ...
    console.log("Hello " + firstName);
}

greetUserwith("suman") // no compilation issue
greetUserwith(1) // no compilation error

// but when i had given firstName: string and passed greetUserwith(1) then there will be compilation error.

// if you want that user can enter the string or number the  you can define like this
// function greetUserwith(firstName: string | number)



// Function to log a greeting message to the console
function greet(firstName: string): void {
    // Print a personalized greeting message
    console.log(`Hello, ${firstName}!`);
}

// Invoke the greet function with a sample name
greet('Suman');

// Arrow function to log a greeting message to the console
let greetUser = (firstName: string): void => {
    // Print a personalized greeting message
    console.log(`Hello, ${firstName}!`);
}

// Invoke the greetUser function with a sample name
greetUser('Suman');