import mongoose from "mongoose"

export default function TripModel(mongoose){
    const tripSchema = mongoose.Schema({
        place: String,
        date: String,
        inOut: String,
        subject: String
},     {timeStamps: true})

return mongoose.model('Trip',tripSchema)}