 import { Client } from "pg";

const pgClient = new Client({
  connectionString: "postgresql://neondb_owner:xxxxxxxxxxxxxxxx@ep-muddy-mouse-ad2urasj-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require"
});

//  const pgClient = new Client({f
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
 
// Function to initialize the database and create the table if it doesn't exist
async function initializeDatabase() {
  try {
    await pgClient.connect(); // Establish connection to the database
    // Creating a table only if it doesn't already exist
    await pgClient.query(`
      CREATE TABLE IF NOT EXISTS SQL_String (
        id SERIAL PRIMARY KEY,              
        username VARCHAR(50) UNIQUE NOT NULL, 
        email VARCHAR(255) UNIQUE NOT NULL,   
        password VARCHAR(255) NOT NULL,       
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP 
      );
    `);
    console.log('Table initialized successfully.'); // Confirmation of table creation
  } catch (err) {
    console.error('Error during table initialization:', err); // Log error if table creation fails
  }
}

// Async function to insert data into the table
async function insertData(username: string, email: string, password: string) {
  try {
    // Parameterized query to prevent SQL injection attacks
    const insertQuery = "INSERT INTO SQL_String (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password]; // Replacing $1, $2, $3 with user inputs securely
    const res = await pgClient.query(insertQuery, values); // Executing the query with the provided values
    console.log('Insertion success:', res); // Logging the successful insertion result
  } catch (err) {
    console.error('Error during the insertion:', err); // Log any error that occurs during insertion
  }
}

// Example usage of the functions
initializeDatabase() // First, ensure the table is created
  .then(() => insertData('Nahi', 'nhi@example.com', '12345')) // Insert user data
  .catch(console.error) // Log any error during execution
  .finally(() => pgClient.end()); // Ensure the database connection is closed



/* 

Explanation of Code:

1. Database Connection:
   - The Client object connects to the PostgreSQL database using the provided connection string.
   - The client.connect() establishes the connection, and client.end() closes it.

2. Table Initialization:
   - The initializeDatabase function ensures that the table SQL_String exists.
   - The CREATE TABLE IF NOT EXISTS query creates the table only if it is not already present in the database.

3. Inserting Data:
   - The insertData function uses a parameterized query to insert user data into the table, preventing SQL injection.
   - The $1, $2, $3 placeholders are replaced securely with the provided user inputs.

4. Error Handling:
   - Both functions have try-catch blocks to handle and log any errors that occur during execution.

Advantages:

1. Prevention of SQL Injection:
   - Parameterized queries protect against SQL injection attacks by treating user inputs as data rather than executable SQL code.

2. Table Initialization Safety:
   - The CREATE TABLE IF NOT EXISTS query ensures the table is only created when needed, avoiding runtime errors.

3. Secure and Readable Code:
   - Separating data ($1, $2, $3) from logic improves readability and prevents syntax errors.

4. Timestamp Automation:
   - The created_at column automatically captures the record's creation time, useful for auditing and tracking.

5. Efficient Connection Management:
   - Properly opening and closing the database connection ensures resources are managed efficiently.

6. Error Logging:
   - Detailed logging of errors helps in debugging and maintaining the application.

*/