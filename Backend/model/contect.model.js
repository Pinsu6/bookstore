import mongoose from "mongoose";

const contect = mongoose.Schema({
  email: {
    type:String,
  },
  msg: {
    type:String
  }
})

const Contect = mongoose.model("contectus", contect)
export default Contect