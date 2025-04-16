import logo from '../assets/logo.svg'
import { useLocation,Link } from 'react-router-dom'
function AuthNav(){
    const location = useLocation()
    const isSignin = location.pathname === "/signin"
    return(
        <>
    
        <nav className="SignNav d-flex justify-content-between align-items-center sticky-top p-3 bg-light ">
            <a href="#" >
                <img width="44" height="46" src={logo} alt="logo" />
                <span className="ms-2 fw-bold fs-5">DOPATOX</span>
            </a>
            <Link to={isSignin ? "signup" : "signin"}>
              <button >{
                 isSignin ? "Sign up" : "Sign in"
                }
              </button>
            </Link>
            
        </nav>
        </>
    )
}
export default AuthNav