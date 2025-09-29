import { PrismaClient } from '@prisma/client';

const client = new PrismaClient()

async function createUser() {
    await client.user.create({
        data: {
            username: "Suman",
            password: "123123",
            age: 23,
            city : "Rourkela"
        }
    })
    
}
createUser();

async function deleteUser() {
    await client.user.delete({
        where: {
            id: 1
        }
    })
}
deleteUser();

async function updateUser() {
    await client.user.update({
        where: {
            id: 2
        },
        data: {
            city: "Bangalore"
        }
    })
}
updateUser();

async function getUsers() {
    const users = await client.user.findMany();
    console.log(users);
}
getUsers