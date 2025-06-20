import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  book: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
  rating: { type: Number, required: true },
  comment: String,
}, { timestamps: true });

export default mongoose.model("Review", reviewSchema);
