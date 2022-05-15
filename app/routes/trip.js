import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import TripService from '../services/trip.js'
dotenv.config()
const mongoUri = process.env.MONGO_URI
const port = process.env.PORT
const origin = process.env.ORIGIN
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors())
app.use(function (_req, res, next){
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    )
    next()
})
app.post('/write', cors(corsOptions), (req,res) => {
    console.log(" check ")
    TripService().write(req, res)
})

app.get('/read', cors(corsOptions), (req, res) => {
    TripService().read(req, res)
})
export default app