// Given a list of users, filter out the users that are legal (greater than 18 years of age)

// Define an interface 'UserName' to specify the structure of user objects
interface User {
    firstName: string;
    lastName: string;
    age : number;
}

// Function to filter out users based on age criteria (greater than or equal to 18)

function filterUser(users: User[]) {  // Takes an array of 'UserName' objects as input
    let ans = []; // Initialize an empty array to store filtered users

    // Iterate through each user in the input array
    for (let i = 0; i < users.length; i++) {
        
        // earlier it was giving error
        // 👉 The ! tells TypeScript: “trust me, it’s not undefined.”
        if (users[i]!.age >= 18) { // Check if the user's age is greater than or equal to 18
            ans.push(users[i]); // Add user to the filtered results
        }
    }
    return ans; // Return the array of filtered users
}

// Create an array of users and filter them using the 'filterUser' function
const filteredUser = filterUser ([
    {
        firstName: 'Suman',
        lastName: 'Prasad',
        age: 23
    },
    {
        firstName: 'Parwa',
        lastName: 'CM',
        age: 16
    },
    {
        firstName: 'Anupriya',
        lastName: 'Biswas',
        age: 22
    },
    {
        firstName: 'Sourav',
        lastName: 'Biswas',
        age: 10
    }
])

console.log(filteredUser)