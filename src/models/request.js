import mongoose from "mongoose";
const requestSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});
const Request = mongoose.models.requests || mongoose.model("requests",requestSchema);
export default Request;
