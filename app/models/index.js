import dotenv from 'dotenv'
import mongoose from 'mongoose'
import TripModel from './Trip.js'

mongoose.Promise = global.Promise
const db = {}
db.mongoose = mongoose
db.url = dotenv.MONGO_URI
db.Trip = new TripModel(mongoose)

export default db