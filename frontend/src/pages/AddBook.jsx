import { useState } from 'react';
import { FaPlusCircle, FaArrowLeft } from 'react-icons/fa';

export default function AddBookPage({ user }) {
  // Only render if user is admin
  if (!user || user.role !== 'admin') {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">🔒 Admin Access Required</h2>
          <p className="text-gray-600 mb-4">You must be an administrator to access this page.</p>
          <button 
            onClick={() => window.history.back()} 
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            <FaArrowLeft className="inline mr-2" /> Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Form state
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    description: '',
    categories: [],
    publishedDate: '',
    coverImage: '',
    isbn: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSuccessMessage('Book added successfully!');
    setIsSubmitting(false);
    setBookData({
      title: '',
      author: '',
      description: '',
      categories: [],
      publishedDate: '',
      coverImage: '',
      isbn: ''
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
          <FaPlusCircle className="text-indigo-600 mr-3" /> Add New Book
        </h1>
        <button 
          onClick={() => window.history.back()}
          className="text-indigo-600 hover:text-indigo-800 flex items-center"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          {successMessage}
        </div>
      )}

      {/* Form */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <form onSubmit={handleSubmit}>
          {/* Book Title */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
              Book Title *
            </label>
            <input
              type="text"
              id="title"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border"
              value={bookData.title}
              onChange={(e) => setBookData({...bookData, title: e.target.value})}
              required
            />
          </div>

          {/* Author */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="author">
              Author *
            </label>
            <input
              type="text"
              id="author"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border"
              value={bookData.author}
              onChange={(e) => setBookData({...bookData, author: e.target.value})}
              required
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="description">
              Description *
            </label>
            <textarea
              id="description"
              rows="5"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border"
              value={bookData.description}
              onChange={(e) => setBookData({...bookData, description: e.target.value})}
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Published Date */}
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="publishedDate">
                Published Date
              </label>
              <input
                type="date"
                id="publishedDate"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border"
                value={bookData.publishedDate}
                onChange={(e) => setBookData({...bookData, publishedDate: e.target.value})}
              />
            </div>

            {/* ISBN */}
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="isbn">
                ISBN
              </label>
              <input
                type="text"
                id="isbn"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border"
                value={bookData.isbn}
                onChange={(e) => setBookData({...bookData, isbn: e.target.value})}
              />
            </div>
          </div>

          {/* Cover Image URL */}
          <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="coverImage">
              Cover Image URL
            </label>
            <input
              type="url"
              id="coverImage"
              placeholder="https://example.com/book-cover.jpg"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border"
              value={bookData.coverImage}
              onChange={(e) => setBookData({...bookData, coverImage: e.target.value})}
            />
            {bookData.coverImage && (
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-2">Cover Preview:</p>
                <img 
                  src={bookData.coverImage} 
                  alt="Cover preview" 
                  className="h-32 object-contain border border-gray-200 rounded"
                />
              </div>
            )}
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="px-6 py-2 border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 rounded-md font-medium text-white transition-colors ${isSubmitting ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'}`}
            >
              {isSubmitting ? 'Adding...' : 'Add Book'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
