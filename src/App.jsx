import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import './App.css'
import Blog from './Blog';
import Features from './Features';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Login from './Login';

function App() {
  

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Blog.jsx' element={<Blog />}></Route>
      <Route path='/Features.jsx' element={<Features />}></Route>
      <Route path='/AboutUs.jsx' element={<AboutUs />}></Route>
      <Route path='/ContactUs.jsx' element={<ContactUs />}></Route>
      <Route path='/Login.jsx' element={<Login />}></Route>
    </Routes>
    </>
  )
}

export default App
