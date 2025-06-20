import { useState } from 'react';
// import { AuthProvider } from '../auth/Authcontext';
import axios from '../api/Axios.user';
import { FaUser , FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  //  const login = AuthProvider();
   const navigate = useNavigate();

  const handleChange =  (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     try {
      
      const { name, email, password } = formData;
      const { data } = await axios.post("/register", { name, email, password });

      

      // Save token + user to localStorage
      localStorage.setItem("user", JSON.stringify(data));
      // login(data); // optional context
      navigate("/"); // redirect to homepage or profile
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
    // Add sign-in logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign Up</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <div className="relative">
              <FaUser  className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-10"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-10"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-10"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-md transition-colors"
          >
            Sign Up
          </button>
        </form>

        {/* Alternative Links */}
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account? 
            <a href="/login" className="text-indigo-600 hover:text-indigo-800 font-medium"> log In</a>
          </p>
        </div>
      </div>
    </div>
  );
}
