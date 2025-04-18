import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import './App.css'
import SignUp from './auth/SignUp'
import SignIn from './auth/SignIn';
import LayoutAuth from './auth/LayoutAuth';
import LayoutProject from './LayoutProject';

function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<LayoutProject />}>
          <Route index element={<Home />} />
        </Route>
        <Route element={<LayoutAuth />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
