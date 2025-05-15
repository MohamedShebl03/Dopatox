import { useState } from 'react';
import { toast } from 'react-toastify'
import logo from '../assets/logo.svg'
import email from '../assets/mail-01.png'
import { useNavigate } from 'react-router-dom';
import useAuth from './Hooks/useAuth';
import view from '../assets/view.png'
function VerifyCode(){
    const navigate = useNavigate()
    const {verifyCode} = useAuth()
    
     const [verifyData,setVerifyData] = useState({
        email:"",
        code:"",
      })
      const handleInputChange = (e) =>{
        const {name, value} = e.target 
        setVerifyData((prev) => ({ ...prev, [name]: value}))
      }
      const handleSubmit = async (e) =>{
        e.preventDefault()

        if (!verifyData.email || !verifyData.code){
            toast.error("Please fill all fields")
            return
        }
        try {
            await verifyCode(verifyData)
            toast.success("Account verified successfully!")
            navigate("/dashboard")
        } catch(error){
            console.error("verification failed", error);
            toast.error("Invalid code or email")
        }
      }
    return(
        <>
           <div className="sign-box text-center ">
              <div className="form-logo mb-4">
                  <img src={logo} alt="logo" width="60" height="70" />
                  <h2>Verify your email</h2>
              </div>

              <form onSubmit= {handleSubmit}>
                   
                   <div className="mb-3 input-group">
                     <input type="email" className="form-control" placeholder="Email"
                      name="email" 
                      value={verifyData.email}
                      onChange={handleInputChange}
                      />
                     <span className="icon">
                       <img src={email} alt="mail-icon" />
                     </span>
                   </div>
                   <div className="mb-3 input-group">
                     <input type="password" className="form-control" placeholder="your-code"
                       name="code"
                       value={verifyData.code}
                      onChange={handleInputChange}
                       />
                     <span className="icon">
                       <img src={view} alt="eye-icon"  />
                     </span>
                   </div>
                   
                   <button type="submit" className="btn btn-submit mt-3">Verify</button>
                </form>
               
           </div>
        </>
    )
}

export default VerifyCode;