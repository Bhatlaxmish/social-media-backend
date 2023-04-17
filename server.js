

const mongoose = require('mongoose');/* npm i mongoose@5 */
const dotenv = require('dotenv');
const app = require('./app');
dotenv.config({ path: './config.env' }); 


process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

const DB = process.env.DATABASE;/* .replace('<PASSWORD>',process.env.DATABASE_PASSWORD); */
/* the vlaues are acutally stored in config.env file  if you want to connect to  localdatabase use process.env.DATABASE_LOCAL*/
mongoose.connect(DB).then((/* con */) => {
    // console.log(con.connections); 
    console.log("mongodb connected");
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down now...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});

process.on('SIGTERM', () => {
    console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
    server.close(() => {
        console.log('💥 Process terminated!');
    });
});







