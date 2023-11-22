import mongoose from "mongoose";
const subscribeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique:true
  }
});
const Subscribe = mongoose.models.subscribe || mongoose.model("subscribes",subscribeSchema);
export default Subscribe;
