import mongoose from 'mongoose'

const Schema = mongoose.Schema

const motherSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number },
  milkProduction: { type: Number },
  mood: { type: String },
},
  { timestamps: true }
)

const Mother = mongoose.model('Mother', motherSchema)

export {
  Mother
}