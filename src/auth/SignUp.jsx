import logo from '../assets/logo.svg'
import email from '../assets/mail-01.png'
import view from '../assets/view.png'
import viewoff from '../assets/view-off-slash.png'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useAuth from './Hooks/useAuth'
import { toast } from 'react-toastify'
function SignUp(){
  const navigate = useNavigate()
  const [signUpData,setSignUpData] = useState({
    firstName: "",
    lastName: "",
    userName:"test3252",
    email:"",
    password:"",
    dateOfBirth:"2025-04-19"
  })

  const {user, signUp}=useAuth()

  useEffect(() =>{
    if (user) {
      navigate("/", {replace: true})
    }
  }, [user, navigate])

  const handleInputChange = (e, formSetter) =>{
    const {name, value} = e.target 
    formSetter((prev) => ({ ...prev, [name]: value}))
  }
  const handleSubmit = async (e, action) => {
    e.preventDefault()

    // if (signUpData.password !== signUpData.confirmPassword) {
    //   toast.error("Password don't match")
    //   return

    // }
    if (!signUpData.firstName || !signUpData.lastName || !signUpData.userName || !signUpData.email || !signUpData.password || !signUpData.dateOfBirth) {
      toast.error("Please fill all fields!");
      return;
    }
    console.log("omar" ,signUpData);
    
    try{
     const response =  await signUp(signUpData)
     console.log("nada", response);
       toast.success(`welcome ${signUpData.userName}! Your account has been created successfully.`)
      navigate("/")

    }catch (error){
      console.error(`${action} failed:`, error);
      toast.error(
        error?.response?.data?.message || "An unexpected error occurred."
      );

    }
  }

  



    return(
        <>

           {/* Sign Up Form */}
           <div className="sign-box text-center ">
              <div className="form-logo mb-4">
                  <img src={logo} alt="logo" width="60" height="70" />
                  <h2>Sign up</h2>
              </div>

              <form onSubmit={(e) => handleSubmit(e, "Sign Up")}>
                   <div className="mb-3">
                     <input type="text" className="form-control" placeholder="First Name" name='firstName' 
                       value={signUpData.firstName} 
                       onChange={(e) => handleInputChange(e,setSignUpData)}
                     />
                   </div>
                   <div className="mb-3">
                     <input type="text" className="form-control" placeholder="Last Name" name="lastName"
                      value={signUpData.lastName}
                      onChange={(e) => handleInputChange(e,setSignUpData)} />
                   </div>
                   <div className="mb-3 input-group">
                     <input type="email" className="form-control" placeholder="Email"
                      name='email' value={signUpData.email}
                      onChange={(e) => handleInputChange(e,setSignUpData)} />
                     <span className="icon">
                       <img src={email} alt="mail-icon" />
                     </span>
                   </div>
                   <div className="mb-3 input-group">
                     <input type="password" className="form-control" placeholder="Password"
                     name="password" value={signUpData.password} 
                      onChange={(e) => handleInputChange(e,setSignUpData)}/>
                     <span className="icon">
                       <img src={view} alt="eye-icon" />
                     </span>
                   </div>
                   {/* <div className="mb-4 input-group">
                     <input
                       type="password"
                       className="form-control"
                       placeholder="Confirm password"
                       name='confirmPassword'
                       value={signUpData.confirmPassword}
                       onChange={(e) => handleInputChange(e,setSignUpData)}
                     />
                     <span className="icon">
                       <img src={viewoff} alt="eyeoff-icon" />
                     </span>
                   </div> */}
                   <button type="submit" className="btn btn-submit" >Submit</button>
                </form>
               <div class="form-text mt-3">Have an account? <a onClick={() => navigate("/signin")}>sign in</a></div>
           </div>
        </>
    )
}

export default SignUp;