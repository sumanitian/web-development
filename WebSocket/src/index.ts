import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

//whenever there is a new connection this event will be fired
// wss do not have methods like .get or .post
// it only has .on method to listen to events

// whenever connection is made give me the socket of that person that is socket. Socket is what connection
// Place where we can send and receive messages.
// socket is like req and res in express
// if 10 people will connect to this server then there will be 10 different sockets.

// wss.on("connection", function (socket){
//     console.log("Connected");
//     // if connected send them hello
//     socket.send("Hello");
// })

// till now this line of code server is made.

// for talking we need a client let's use postman.

// in the postman click new select websocket and give ws://localhost:8080

// after connecting you will see hello in the message section of postman


// wss.on("connection", function (socket){
//     console.log("Connected");
//     setInterval(() => {
//         socket.send("Current price of solana is " + Math.random());
//     }, 500);
    
// })

// after every 500ms you will see the message in postman.


// wss.on("connection", function (socket){
//     console.log("Connected");
//     setInterval(() => {
//         socket.send("Current price of solana is " + Math.random());
//     }, 500);

//     // how can client talk to server
//     socket.on("message", (e) =>{
//         console.log(e.toString());
//     })
    
// })

wss.on("connection", function (socket){
    console.log("Connected")
    

    // how can client talk to server
    socket.on("message", (e) =>{
        if(e.toString() === "Ping"){
            socket.send("Pong"); 
        }
    })
    
})