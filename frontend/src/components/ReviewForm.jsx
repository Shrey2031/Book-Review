import { useState } from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt, FaArrowLeft } from 'react-icons/fa';

export default function ReviewForm({ bookTitle = "Atomic Habits", onBack }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState({
    title: '',
    content: '',
    wouldRecommend: true
  });

  const handleSubmit = async (e) => {
  e.preventDefault();

  const reviewData = {
    rating,
    title: review.title,
    content: review.content,
    wouldRecommend: review.wouldRecommend,
    bookTitle, // You might want to associate the review with the book title or ID
  };

  try {
    const response = await fetch('http://localhost:5000/api/v1/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include Authorization if token-based auth is used
        // 'Authorization': `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(reviewData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    alert('Review submitted successfully!');
    // Optional: reset form
    setRating(0);
    setReview({
      title: '',
      content: '',
      wouldRecommend: true
    });
  } catch (error) {
    console.error('Error submitting review:', error.message);
    alert(`Failed to submit review: ${error.message}`);
  }
};


  // Render star rating input
  const renderStars = () => {
    return Array(5).fill(0).map((_, i) => {
      const ratingValue = i + 1;
      return (
        <label key={i} className="cursor-pointer">
          <input 
            type="radio" 
            name="rating" 
            value={ratingValue} 
            onClick={() => setRating(ratingValue)}
            className="hidden"
          />
          {ratingValue <= (hoverRating || rating) ? (
            <FaStar 
              className="text-yellow-500 text-2xl"
              onMouseEnter={() => setHoverRating(ratingValue)}
              onMouseLeave={() => setHoverRating(0)}
            />
          ) : (
            <FaRegStar 
              className="text-yellow-500 text-2xl"
              onMouseEnter={() => setHoverRating(ratingValue)}
              onMouseLeave={() => setHoverRating(0)}
            />
          )}
        </label>
      );
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="mb-6 flex items-center text-indigo-600 hover:text-indigo-800"
      >
        <FaArrowLeft className="mr-2" /> Back to book
      </button>

      {/* Review Form Card */}
      <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Write a Review
        </h2>
        <p className="text-gray-600 mb-6">
          Share your thoughts about <span className="font-medium text-indigo-600">{bookTitle}</span>
        </p>

        <form onSubmit={handleSubmit}>
          {/* Rating Input */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-3">
              Your Rating
            </label>
            <div className="flex items-center space-x-2">
              {renderStars()}
              <span className="ml-3 text-gray-600">
                {rating > 0 ? `${rating} out of 5` : "Select rating"}
              </span>
            </div>
          </div>

          {/* Review Title */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Review Title
            </label>
            <input
              type="text"
              placeholder="Summarize your opinion in a headline"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border"
              value={review.title}
              onChange={(e) => setReview({...review, title: e.target.value})}
              required
            />
          </div>

          {/* Review Content */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Your Review
            </label>
            <textarea
              rows="6"
              placeholder="What did you like or dislike about this book? Would you recommend it to others?"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border"
              value={review.content}
              onChange={(e) => setReview({...review, content: e.target.value})}
              required
            />
          </div>

          {/* Recommendation */}
          <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-3">
              Would you recommend this book?
            </label>
            <div className="flex space-x-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="recommend"
                  checked={review.wouldRecommend}
                  onChange={() => setReview({...review, wouldRecommend: true})}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                />
                <span className="ml-2 text-gray-700">Yes, I recommend</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="recommend"
                  checked={!review.wouldRecommend}
                  onChange={() => setReview({...review, wouldRecommend: false})}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                />
                <span className="ml-2 text-gray-700">No, I don't recommend</span>
              </label>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onBack}
              className="px-6 py-2 border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={rating === 0}
              className={`px-6 py-2 rounded-md font-medium text-white transition-colors ${
                rating === 0 
                  ? 'bg-indigo-300 cursor-not-allowed' 
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
