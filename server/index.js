const express=require('express');
const Cors=require('cors');
const app=express();
app.use(Cors());
app.use(express.json());
require('dotenv').config();

const PORT=process.env.PORT||5000;
const routes=require('./routes/allRoutes');
app.use('/api/v1',routes);
app.listen(PORT,()=>{
    console.log(`App listen at port number ${PORT}`)
})

const dbConnect=require('./config/database');
dbConnect();
