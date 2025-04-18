import logo from '../assets/logo.svg'
import email from '../assets/mail-01.png'
import view from '../assets/view.png'
import { Link } from 'react-router-dom';
function SignIn(){
    return(
        <>
         
           

           {/* Sign in Form */}
           <div className="sign-box text-center ">
              <div className="form-logo mb-4">
                  <img src={logo} alt="logo" width="60" height="70" />
                  <h2>Sign in</h2>
              </div>

              <form>
                   
                   <div className="mb-3 input-group">
                     <input type="email" className="form-control" placeholder="Email" />
                     <span className="icon">
                       <img src={email} alt="mail-icon" />
                     </span>
                   </div>
                   <div className="mb-3 input-group">
                     <input type="password" className="form-control" placeholder="Password" />
                     <span className="icon">
                       <img src={view} alt="eye-icon" />
                     </span>
                   </div>
                   
                   <button type="submit" className="btn btn-submit mt-3">Submit</button>
                </form>
               <div class="form-text mt-3">Don't Have an account? <Link to='/signup'>Sign Up</Link></div>
           </div>
        </>
    )
}

export default SignIn;