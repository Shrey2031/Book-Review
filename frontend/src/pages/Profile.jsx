import { FaUser, FaEdit, FaBookOpen, FaStar, FaRegStar, FaSignOutAlt, FaStarHalfAlt } from 'react-icons/fa';

export default function ProfilePage() {
  // Sample user data
  const user = {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    joinDate: "Member since March 2022",
    bio: "Book enthusiast who loves fantasy and mystery novels. Always looking for new recommendations!",
    stats: {
      reviews: 42,
      followers: 128,
      following: 86,
      averageRating: 4.3
    }
  };

  // Sample recent reviews data
  const recentReviews = [
    {
      id: 1,
      bookTitle: "The Silent Patient",
      author: "Alex Michaelides",
      rating: 4.5,
      date: "2 days ago",
      excerpt: "This psychological thriller kept me guessing until the very end. The twist was unexpected and brilliantly executed."
    },
    {
      id: 2,
      bookTitle: "Educated",
      author: "Tara Westover",
      rating: 5,
      date: "1 week ago",
      excerpt: "An incredible memoir about the power of education and self-reinvention."
    }
  ];

  // Render star rating
  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-500 text-sm" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500 text-sm" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500 text-sm" />);
      }
    }
    
    return stars;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
        <button className="text-indigo-600 hover:text-indigo-800 flex items-center">
          <FaSignOutAlt className="mr-2" /> Sign Out
        </button>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Avatar Section */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-indigo-100 flex items-center justify-center">
                <FaUser className="text-indigo-600 text-5xl" />
              </div>
              <button className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors">
                <FaEdit className="text-sm" />
              </button>
            </div>
          </div>

          {/* User Info Section */}
          <div className="flex-grow">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
              <button className="text-indigo-600 hover:text-indigo-800 flex items-center text-sm">
                <FaEdit className="mr-1" /> Edit Profile
              </button>
            </div>
            
            <p className="text-gray-600 mb-2">{user.email}</p>
            <p className="text-gray-500 text-sm mb-4">{user.joinDate}</p>
            
            <div className="mb-4">
              <h3 className="font-medium text-gray-800 mb-1">About Me</h3>
              <p className="text-gray-600">{user.bio}</p>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="text-2xl font-bold text-indigo-600">{user.stats.reviews}</p>
                <p className="text-gray-600 text-sm">Reviews</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-indigo-600">{user.stats.followers}</p>
                <p className="text-gray-600 text-sm">Followers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-indigo-600">{user.stats.following}</p>
                <p className="text-gray-600 text-sm">Following</p>
              </div>
              <div>
                <div className="flex items-center">
                  {renderRating(user.stats.averageRating)}
                  <span className="ml-2 text-gray-600 text-sm">{user.stats.averageRating}</span>
                </div>
                <p className="text-gray-600 text-sm">Avg. Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Reviews Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">My Recent Reviews</h2>
          <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
            View All
          </button>
        </div>
        
        <div className="space-y-6">
          {recentReviews.map((review) => (
            <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
              <div className="flex items-start mb-2">
                <FaBookOpen className="text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-800">{review.bookTitle}</h3>
                  <p className="text-gray-600 text-sm">{review.author}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-2">
                <div className="flex mr-2">
                  {renderRating(review.rating)}
                </div>
                <span className="text-gray-500 text-sm">{review.date}</span>
              </div>
              
              <p className="text-gray-700">{review.excerpt}</p>
              
              <div className="mt-3 flex space-x-4">
                <button className="text-gray-500 hover:text-indigo-600 text-sm flex items-center">
                  <FaEdit className="mr-1" /> Edit
                </button>
                <button className="text-gray-500 hover:text-indigo-600 text-sm flex items-center">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
