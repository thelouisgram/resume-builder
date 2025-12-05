import express from 'express';
import cors from 'cors';
import "dotenv/config"; 
import connectDb from './configs/db';

const app = express()
const PORT = process.env.PORT || 5000

// Database Connection
connectDb()

app.use(express.json())
app.use(cors())

app.get("/", (req, res)=> res.send("server is live...."))

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})