import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import BrowseBooks from './components/BookCard'
import SignInPage from './pages/Register'
import ReviewForm from './components/ReviewForm'
import LoginPage from './pages/Login'
import ProfilePage from './pages/Profile'
// import RequireAuth from './auth/RequireAuth'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BrowseBooks />} />
        <Route path="/signup" element={<SignInPage />} />
        <Route path="/review" element={< ReviewForm/>} />
        <Route path="/login" element={< LoginPage/>} />
        <Route path="/profile" element={<ProfilePage />} />
     
      </Routes>
     </BrowserRouter>  
    </>
  )
}

export default App
