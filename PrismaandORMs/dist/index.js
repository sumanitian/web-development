import { PrismaClient } from '@prisma/client';
const client = new PrismaClient();
async function createUser() {
    await client.user.create({
        data: {
            username: "Suman",
            password: "123123",
            age: 23,
            city: "Rourkela"
        }
    });
}
createUser();
//# sourceMappingURL=index.js.map