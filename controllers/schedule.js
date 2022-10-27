import { Schedule } from '../models/schedule.js'

function index(req, res) {
  Schedule.find({})
  .then(trips => res.json(trips))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export {index,}