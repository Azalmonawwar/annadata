import mongoose from "mongoose";
const contactSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});
const Contact = mongoose.models.contacts || mongoose.model("contacts",contactSchema);
export default Contact;
