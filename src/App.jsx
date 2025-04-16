import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import './App.css'
import Blog from './Blog';
import Features from './Features';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import SignUp from './auth/SignUp'
import SignIn from './auth/SignIn';
import LayoutAuth from './auth/LayoutAuth';
import LayoutProject from './LayoutProject';

function App() {
  

  return (
    <>
    
    <Routes>
      <Route path="/" element={<LayoutProject />}>
        <Route index element={<Home/>} />
        <Route path='Blog.jsx' element={<Blog />}></Route>
        <Route path='Features.jsx' element={<Features />}></Route>
        <Route path='AboutUs.jsx' element={<AboutUs />}></Route>
        <Route path='ContactUs.jsx' element={<ContactUs />}></Route>
      </Route>
      <Route  element={<LayoutAuth />}>
        <Route path="signin" element={<SignIn/>} />
        <Route path="signup" element={<SignUp />} />
     </Route>

     
      
    </Routes>
    </>
  )
}

export default App
