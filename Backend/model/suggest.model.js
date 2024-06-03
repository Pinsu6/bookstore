import mongoose from "mongoose";

const suggestSchema = mongoose.Schema({
  bookName: {
    type: String,
    require: true,
  },
});

const Suggest = mongoose.model("suggest", suggestSchema);
export default Suggest;
