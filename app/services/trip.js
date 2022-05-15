import db from '../models/index.js'

export default function TripService() {
    const Trip = db.Trip
    return {
        write(req, res) {
            console.log(" check ")
            new Trip(req.body).save(function (err) {
                if (err) {
                    res
                        .status(500)
                        .send({message: err})
                    console.log('등록 취소')
                    return;
                } else {
                    res
                        .status(200)
                        .json({ok: 'ok'})
                }
            })
        },
        read(_req, res) {
            Trip
                .find()
                .exec((err, trips) => {
                    if (err) 
                        return res
                            .status(400)
                            .send(err)
                    res
                        .status(200)
                        .json({success: true, trips})
                })
        }
    }
}