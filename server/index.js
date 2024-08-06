import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import dbconnection from './databse/db.js';



const app=express();//initialize


app.use(cors());
app.use('/',router);


const PORT=8000;

dbconnection();


//to start server
app.listen(PORT,()=>console.log(`server running on port ${PORT}`));