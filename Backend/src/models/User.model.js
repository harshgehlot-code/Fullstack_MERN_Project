

// import mongoose from "mongoose";
// import bcrypt from "bcryptjs";


// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true, // Remove whitespace
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true, // Ensure email uniqueness
//       lowercase: true, // Convert to lowercase
//     },
//     password: {
//       type: String,
//       required: true,
//       minlength: 6, // Minimum password length
//     },
//   },
//   { timestamps: true } // 
// );


// userSchema.pre("save", async function (next) {
//   // Skip hashing if password hasn't been modified
//   if (!this.isModified("password")) return next();

//   // Hash password with bcrypt (10 salt rounds)
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// /**
//  * Instance method: Compare entered password with hashed password
//  * @param {string} enteredPassword - Plain text password to compare
//  * @returns {Promise<boolean>} True if passwords match, false otherwise
//  */
// userSchema.methods.comparePassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// // Export User model
// export default mongoose.model("User", userSchema);


import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  { timestamps: true }
);

/**
 * Pre-save Hook: Hash password before saving to database
 * Uses async/await pattern without 'next' callback to avoid TypeError
 */
userSchema.pre("save", async function () {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified("password")) {
    return;
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    throw new Error(error);
  }
});

/**
 * Instance method: Compare entered password with hashed password
 * @param {string} enteredPassword - Plain text password from login
 * @returns {Promise<boolean>}
 */
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Export the User model
const User = mongoose.model("User", userSchema);
export default User;
