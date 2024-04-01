const express =require("express");
const dotenv =require("dotenv");

dotenv.config()
const server =express();
server.use(express.json());
server.use(express.urlencoded({extended:true}));
const port =process.env.PORT;
const environment =process.env.NODE_ENV;

server.listen(8080,()=>{
    console.log(`server started in ${environment} local host:${port}..`)
    // console.log(process.env.NODE_ENV);
})