import { FaSearch, FaFilter, FaStar, FaRegStar, FaStarHalfAlt ,FaArrowLeft,FaArrowRight} from 'react-icons/fa';
import { useState,useEffect } from 'react';
import axios from "../api/Axios.user";

export default function BrowseBooks() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('popular');

  useEffect(() => {
    axios.get("/")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error("Error fetching books", err));
  });

  // Sample book data
  const books = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      rating: 4.7,
      reviewCount: 12453,
      cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      category: "Self-Help",
      featured: true
    },
     {
    id: 2,
    title: "Deep Work",
    author: "Cal Newport",
    rating: 4.6,
    reviewCount: 8790,
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    category: "Productivity",
    featured: true
  },
  {
    id: 3,
    title: "The Alchemist",
    author: "Paulo Coelho",
    rating: 4.4,
    reviewCount: 15432,
    // cover: "https://images.unsplash.com/photo-1590608897129-79da98d159e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    cover:"https://schoolworkhelper.net/wp-content/uploads/2021/10/The-Alchemist.jpg",
    category: "Fiction",
    featured: false
  },

  {
    id: 4,
    title: "Can't Hurt Me",
    author: "David Goggins",
    rating: 4.8,
    reviewCount: 19234,
    // cover: "https://images.unsplash.com/photo-1611078489935-fd99a7f6317a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    cover:"https://tse4.mm.bing.net/th?id=OIP.FTI2_6ZqX5c9OdJVyaVVQQAAAA&pid=Api&P=0&h=180",
    category: "Biography",
    featured: true
  }
    // Add more books...
  ];

  // Categories for filtering
  const categories = ['All', 'Fiction', 'Non-Fiction', 'Fantasy', 'Mystery', 'Biography', 'Self-Help', 'Science Fiction'];

  // Render star rating
  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    
    return stars;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Browse Our Collection</h1>
        <p className="text-gray-600">Discover books that match your interests</p>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search Input */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Title, author, ISBN..."
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 pl-10 border"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort Option */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest Releases</option>
                <option value="title">Title (A-Z)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Category Chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {books.map(book => (
          <div 
            key={book.id} 
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            {/* Book Cover */}
            <div className="relative">
              <img 
                src={book.cover} 
                alt={book.title} 
                className="w-full h-48 object-cover"
              />
              {book.featured && (
                <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-md">
                  Bestseller
                </div>
              )}
            </div>

            {/* Book Info */}
            <div className="p-4">
              <h3 className="font-bold text-gray-800 mb-1 line-clamp-1">{book.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{book.author}</p>
              
              {/* Rating */}
              <div className="flex items-center mb-2">
                <div className="flex mr-2">
                  {renderRating(book.rating)}
                </div>
                <span className="text-gray-600 text-sm">{book.rating} ({book.reviewCount.toLocaleString()})</span>
              </div>

              {/* Category Tag */}
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
                {book.category}
              </span>

              {/* View Button */}
              <button className="w-full mt-3 bg-indigo-100 text-indigo-600 py-1 rounded-md text-sm font-medium hover:bg-indigo-200 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span className="sr-only">Previous</span>
            <FaArrowLeft className="h-5 w-5" />
          </button>
          <button aria-current="page" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-indigo-50 text-sm font-medium text-indigo-600 hover:bg-indigo-100">
            1
          </button>
          <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            2
          </button>
          <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            3
          </button>
          <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span className="sr-only">Next</span>
            <FaArrowRight className="h-5 w-5" />
          </button>
        </nav>
      </div>
    </div>
  );
}
