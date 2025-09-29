import { PrismaClient } from '@prisma/client';
import express from "express";

const client = new PrismaClient()

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());


// async function createUser() {
//     await client.user.create({
//         data: {
//             username: "Suman",
//             password: "123123",
//             age: 23,
//             city : "Rourkela"
//         }
//     })
    
// }
// createUser();

// async function deleteUser() {
//     await client.user.delete({
//         where: {
//             id: 1
//         }
//     })
// }
// deleteUser();

// async function updateUser() {
//     await client.user.update({
//         where: {
//             id: 2
//         },
//         data: {
//             city: "Bangalore"
//         }
//     })
// }
// updateUser();

// async function getUsers() {
//     const users = await client.user.findMany();
//     console.log(users);
// }
// getUsers


// Route to get all users from the database
app.get("/users", async (req, res) => {
    // Fetch all users from the 'user' table
    const users = await client.user.findMany();
    // Send the fetched users as a JSON response
    res.json(users);
})

// Route to get a user's todos based on their ID
app.get("/todos/:id", async (req, res) => {
    // Extract user ID from the URL parameter
    const id = req.params.id;
    // Find the user with the given ID and include their todos, username, and password
    const users = await client.user.findFirst({
        where: {
            id: parseInt(id) // Convert the ID from string to integer
        },
        select: {
            todos: true,  // Fetch the user's todos
            username: true, // Fetch the user's username
            password: true  // Fetch the user's password
        }
    });
    // Send the user data as a JSON response
    res.json(users);
})

// Function to read a specific user and their todos (for testing or logging purposes)
async function readUser() {
    // Fetch a user with ID 7 and include their todos
    const user = await client.user.findFirst({
        where: {
            id: 7
        },
        include: {
            todos: true  // Include the user's todos in the result
        }
    });
    // Log the fetched user data to the console
    console.log(user);
}

// Call the readUser function to execute it
readUser();

// Start the Express server on port 3000
app.listen(3000);