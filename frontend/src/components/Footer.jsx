import { FaFacebook, FaTwitter, FaInstagram, FaGoodreads ,FaBookOpen} from 'react-icons/fa';
import { SiGoodreads } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center mb-4">
              <FaBookOpen className="text-indigo-600 mr-2 text-xl" />
              <span className="text-xl font-bold text-indigo-600">BookNook</span>
            </div>
            <p className="text-gray-600 text-sm">
              Discover, review, and share your favorite books with our community of passionate readers.
            </p>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Explore</h3>
            <ul className="space-y-2">
              {['Featured Books', 'Top Rated', 'New Releases', 'Genres'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Community</h3>
            <ul className="space-y-2">
              {['Guidelines', 'Discussions', 'Top Reviewers', 'Events'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Stay Connected</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <FaGoodreads className="h-5 w-5" />
              </a>
            </div>
            
            <p className="text-gray-600 text-sm mb-2">Subscribe to our newsletter</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-l-md border border-r-0 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 text-sm"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-md text-sm font-medium transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} BookNook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
