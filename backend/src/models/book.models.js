import mongoose,{Schema} from "mongoose";

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: String,
  description: String,
  coverImage: String,
  averageRating: { type: Number, default: 0 },
});

export const Book = mongoose.model("Book", bookSchema);
