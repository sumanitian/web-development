 import { Client } from "pg";

  const pgClient = new Client("psql 'postgresql://neondb_owner:xxxxxxxxxxxxxxxx@ep-muddy-mouse-ad2urasj-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'")

//  const pgClient = new Client({
//     user: "neondb_owner",
//     password: "xxxxxxxxxxxxxxxx",
//     port: 5432,
//     host: "ep-muddy-mouse-ad2urasj-pooler.c-2.us-east-1.aws.neon.tech",
//     database: "neondb",

//  })

 async function main() {
    await pgClient.connect();
    const response = await pgClient.query("SELECT * FROM users;")
    console.log(response);
 }

 main()
 
