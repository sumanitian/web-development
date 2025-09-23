// Function that checks if the given age is greater than 18 and returns a boolean
function isLegal(age: number): boolean {
    // Return true if age is greater than 18, otherwise return false
    if (age > 18) {
        return true;
    } else { // Return false if age is 18 or less
        return false;
    }
}

// Call the isLegal function with different age values and log the results
console.log(isLegal(25));   // Output: true
console.log(isLegal(9));  // Output: false