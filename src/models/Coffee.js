import { Schema, model } from 'mongoose';

const CoffeeSchema = new Schema({
  photo: String,
  description: String,
  brand: String,
  price: Number,
  status: Boolean,
  type: String,
  user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }

}, {
  toJSON: {
    virtuals: true
  }
});

CoffeeSchema.virtual('photo_url').get(function(){
  return `http://localhost:3333/files/${this.photo}`;
})

export default model('Coffee', CoffeeSchema);