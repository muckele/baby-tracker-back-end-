import  mongoose  from "mongoose"

const Schema = mongoose.Schema

const babySchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, default: 0 },
  sleep: { type: Number, default: 0 },
  breastFeeding: { type: Number },
  feeding: { type: Number },
  diaperChange: { type: Boolean },
  poopColor: {
    type: String,
    enum: ['Meconium', 'Yelow', 'Green', 'Brown', 'Red', 'White or Gray']
  },
  medications: {
    type: String,
  },
  temperature: {
    type: Number,
  },
},
  { timestamps: true }
)

const Baby = mongoose.model('Baby', babySchema)

export {
  Baby
}