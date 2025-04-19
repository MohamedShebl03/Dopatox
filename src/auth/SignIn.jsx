import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'
import email from '../assets/mail-01.png'
import view from '../assets/view.png'
import { useEffect, useState } from 'react'
import useAuth from './Hooks/useAuth'
import { toast } from 'react-toastify'


function SignIn(){
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [signInData, setSignInData] = useState({email: "", password: ""})

  const {user,signIn} = useAuth()

  useEffect(() =>{
    console.log("User in effect: ", user)
    if(user) {
      navigate("/home" , {replace:true})
    }
  }, [user, navigate])
  const handleInputChange = (e,formSetter) => {
    const {name,value} = e.target 
    formSetter((prev) => ({ ...prev, [name]: value}))
  } 
  const handleSubmit = async(e,action) => {
    e.preventDefault()

  if (!signInData.email || !signInData.password ) {
        toast.error("Please fill all fields!");
        return;
      }
      console.log("omar" ,signInData);
    try{
      const response = await signIn(signInData)
      console.log("nada", response);
      toast.success(`welcome! Your account has been created successfully.`)
      navigate("/home")

    }catch (error){
      console.error (`${action} failed:` , error)
      toast.error(
        error?.response?.data?.message || "An unexpected error occurred."
      );

    }
  }

    return(
        <>
           {/* Sign in Form */}
           <div className="sign-box text-center ">
              <div className="form-logo mb-4">
                  <img src={logo} alt="logo" width="60" height="70" />
                  <h2>Sign in</h2>
              </div>

              <form onSubmit={(e) => handleSubmit(e, "Sign In")}>
                   
                   <div className="mb-3 input-group">
                     <input type="email" className="form-control" placeholder="Email"
                      name="email" value={signInData.email}
                      onChange={(e) => handleInputChange(e, setSignInData)}  />
                     <span className="icon">
                       <img src={email} alt="mail-icon" />
                     </span>
                   </div>
                   <div className="mb-3 input-group">
                     <input type="password" className="form-control" placeholder="Password"
                       name="password" value={signInData.password}
                       onChange={(e) => handleInputChange(e, setSignInData)} />
                     <span className="icon">
                       <img src={view} alt="eye-icon"  />
                     </span>
                   </div>
                   
                   <button type="submit" className="btn btn-submit mt-3">Submit</button>
                </form>
               <div class="form-text mt-3">Don't Have an account? <a href="#">sign up</a></div>
           </div>
        </>
    )
}

export default SignIn;