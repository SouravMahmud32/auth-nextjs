import mongoose from "mongoose";

let User;

try {
  // Check if the model exists
  User = mongoose.model("users");
} catch (e) {
  // If the model does not exist, define and compile it
  const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: [true, "Please provide a username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  });

  // Define and compile the 'users' model
  User = mongoose.model("users", userSchema);
}

export default User;
