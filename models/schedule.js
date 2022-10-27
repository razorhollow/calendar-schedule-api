import mongoose from 'mongoose'

const Schema = mongoose.Schema

const scheduleSchema = new Schema({
  name: String,
  date: Date,
  guests: Number,

},{
  timestamps: true,
})

const Schedule = mongoose.model('Schedule', scheduleSchema)

export { Schedule }
