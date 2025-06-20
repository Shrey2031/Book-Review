import Review from "../models/review.models.js";

// GET reviews by book ID
export const getReviewsByBook = async (req, res) => {
  try {
    const reviews = await Review.find({ book: req.query.bookId }).populate("user", "name");
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST a new review
export const addReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
