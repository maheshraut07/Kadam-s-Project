import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 50 },
  password: { type: String, required: true, minlength: 6 },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model("user", userSchema);
