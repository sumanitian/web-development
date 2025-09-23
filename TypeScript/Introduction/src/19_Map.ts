interface User {
  id: string;
  name: string;
}

// Initialize an empty Map
const usersMap = new Map<string, User>();

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }


// Define a type alias `UserMap` to represent the structure of user data.
// This defines an object type with properties: `name` (string), `age` (number), and `email` (string).
type UserMap = {
    name: string;  // Name of the user.
    age: number;   // Age of the user.
    email: string; // Email address of the user.
}

// Create a new Map object to store user data.
// The map will use strings as keys (e.g., "A", "B", "C") and `UserMap` objects as values.
const users = new Map<string, UserMap>();

// Add user data to the Map using the `set` method.
// The first argument is the key (e.g., "A"), and the second argument is the user data object.
users.set("A", { name: "Suman", age: 25, email: "suman@example.com" });
users.set("B", { name: "Prasad", age: 23, email: "prasad@example.com" });

// Retrieve the data associated with key "A" using the `get` method.
// The `get` method returns the value associated with the key, or `undefined` if the key does not exist.
const selectedUser = users.get("A");

// Log the retrieved user data to the console.
// This will print the data of the user with key "A" (Suman details) to the console.
console.log(selectedUser);