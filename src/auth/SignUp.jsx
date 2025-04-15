import logo from '../assets/logo.svg'
import email from '../assets/mail-01.png'
import view from '../assets/view.png'
import viewoff from '../assets/view-off-slash.png'
function SignUp(){
    return(
        <>

           {/* Sign Up Form */}
           <div className="sign-box text-center ">
              <div className="form-logo mb-4">
                  <img src={logo} alt="logo" width="60" height="70" />
                  <h2>Sign up</h2>
              </div>

              <form>
                   <div className="mb-3">
                     <input type="text" className="form-control" placeholder="First Name" />
                   </div>
                   <div className="mb-3">
                     <input type="text" className="form-control" placeholder="Last Name" />
                   </div>
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
                   <div className="mb-4 input-group">
                     <input
                       type="password"
                       className="form-control"
                       placeholder="Confirm password"
                     />
                     <span className="icon">
                       <img src={viewoff} alt="eyeoff-icon" />
                     </span>
                   </div>
                   <button type="submit" className="btn btn-submit">Submit</button>
                </form>
               <div class="form-text mt-3">Have an account? <a href="#">sign in</a></div>
           </div>
        </>
    )
}

export default SignUp;