const app = require("./app");

const dotenv = require("dotenv");

const connectDatabase = require("./db/Database.js");

// Handling uncaught Exception
process.on("uncaughtException",(err) =>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server for Handling uncaught Exception`);
})

//config
dotenv.config({
    path:"backend/config/.env"
})

connectDatabase();

//create server
const server = app.listen(process.env.PORT,() =>{
    console.log(`server is waiting on http://localhost:${process.env.PORT}`)
})



// Unhandled promise rejection
process.on("unhandledRejection", (err) =>{
    console.log(`Shutting down server for ${err.message}`);
    console.log(`Shutting down the server due to Unhandled promise rejection`);
    server.close(() =>{
        process.exit(1);
    });
});