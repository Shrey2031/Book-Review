import { FaSearch, FaArrowRight } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-xl p-8 md:p-12 text-white mb-10 overflow-hidden">
      {/* Optional decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full mix-blend-overlay"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay"></div>
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif leading-tight">
          Discover Your Next <span className="text-indigo-200">Favorite Book</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Read honest reviews from real readers and share your thoughts on the books you love.
        </p>
        
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-6">
          <div className="flex shadow-lg rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search for books, authors, genres..."
              className="flex-grow py-3 px-6 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button 
              className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 transition-colors duration-200"
              aria-label="Search books"
            >
              <FaSearch />
            </button>
          </div>
          
          {/* Popular Searches */}
          <div className="mt-4 text-sm">
            <p className="text-indigo-200 mb-2">Trending now:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Fantasy', 'Mystery', 'Biography', 'Sci-Fi', 'Self-Help'].map((genre) => (
                <button
                  key={genre}
                  className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full text-sm transition-all duration-200 backdrop-blur-sm"
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-lg">
            Browse Top Books <FaArrowRight className="text-sm" />
          </button>
          <button className="bg-transparent border-2 border-white/30 hover:border-white/50 px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-200">
            How It Works
          </button>
        </div>
      </div>
    </section>
  );
}
