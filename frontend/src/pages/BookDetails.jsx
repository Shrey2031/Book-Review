import ReviewForm from './ReviewForm';

function BookDetail() {
  const [showForm, setShowForm] = useState(false);
  
  return (
    <div>
      {/* Your book detail content */}
      {showForm ? (
        <ReviewForm 
          bookTitle="Book Title" 
          onBack={() => setShowForm(false)} 
        />
      ) : (
        <button 
          onClick={() => setShowForm(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md"
        >
          Write a Review
        </button>
      )}
    </div>
  );
}
