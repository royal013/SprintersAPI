const express=require("express");
const app=express();
const Sprinter=require("./models/model");
const sprinterRouter=require("./routers/router");
const port=process.env.PORT || 3000;


app.use(express.json());
require("./database/db");
app.use(sprinterRouter);

app.listen(port,()=>{
    console.log(`Listening on port number ${port}`);
})