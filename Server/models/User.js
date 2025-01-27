import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 50 },
  password: { type: String, required: true, minlength: 6 },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    pincode: { type: String, required: true },
    locality: { type: String, required: true },
    area: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    landmark: { type: String },
    alternatePhone: { type: String },
  },
});

export default mongoose.model("user", userSchema);
