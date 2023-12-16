import express from "express";
import mascota from './routers/mascota.js'
import cors from "cors"

const app= express();

app.use(cors())

app.use(express.json())

app.get('/index',(req,res)=>{
    res.send('Hola chicos...')
})


app.use(mascota)

export default app;