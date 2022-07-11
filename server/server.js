import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { v2 as cloudinary } from 'cloudinary'
import multer from 'multer';
import cors from 'cors';
import dotenv from 'dotenv';
import { Server } from "socket.io";
import { createServer } from 'http';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import * as path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import UserSchema from './Schemas/UserSchema.js';
import EventSchema from './Schemas/EventSchema.js';
import EventRouter from './APIs/Event.js';
import UserRouter from './APIs/Auth.js';
 
dotenv.config();

const expressServer = express();
const port = process.env.PORT || 5000;

expressServer.use(cors({
   // origin:["write allowed urls here"]
}));
expressServer.use(express.json());
expressServer.use(bodyParser.json());
expressServer.use(bodyParser.urlencoded({ extended: true }));
const httpServer = expressServer.listen(port, ()=>{
    console.log("Server connected to Port" ,port);
}); 
expressServer.use('/Auth',UserRouter);
expressServer.use('/EventAPI',EventRouter);
const DbUri = process.env.DBURI;

mongoose.connect(DbUri || process.env.DbUri,
    {
        useNewUrlParser: true,  
    useUnifiedTopology: true
    }
    )
.catch((error) => {
    console.log(error.message);
});

const DBconnection = mongoose.connection;



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// if(process.env.NODE_ENV === 'production'){
//     expressServer.use(express.static(path.join(__dirname,"../","build")));
// }
 expressServer.use(express.static(path.join(__dirname,"../","build")));

expressServer.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
  });
  console.log(path.join(__dirname,"../","build"));

  export default expressServer;