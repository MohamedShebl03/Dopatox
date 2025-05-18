import axios  from "axios";

const API = axios.create({
    baseURL:"https://api.dopatox.site/api/Auth"
})
const getAccessToken = () => localStorage.getItem("accessToken");
const getRefreshToken = () => localStorage.getItem("refreshToken");


API.interceptors.request.use(
    (config) => {
       const token = getAccessToken()
        if (token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

API.interceptors.response.use(
    (response) => response,
    async (error) =>{
        const originalRequest = error.config

        if (
            (error.response?.status === 401 || error.response?.status === 403)&&
            !originalRequest._retry &&
            !originalRequest.url.includes("/login")&&
            !originalRequest.url.includes("/signUp")
        )
            
        {
            originalRequest._retry = true
            try {
                const refreshToken = getRefreshToken();
                const res = await axios.post("https://api.dopatox.site/api/Auth/refresh", {
                  token: refreshToken,
                });
                const {accessToken} = res.data
                localStorage.setItem("accessToken", accessToken)

                originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                return API(originalRequest); 
              } catch (refreshError) {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                window.location.href = "/login";
                return Promise.reject("Session expired, please log in again.");
              }
            }
        
            return Promise.reject(error)
        }
    )

            




// --------------API-----------

export const getUser = async () =>{
    const res = await API.get("google/user")
    const {user} = res.data
    return {user}
}
export const signUp = async (userData) => {
  const response = await API.post("/SignUp" , userData)
  return response.data
}


export const signIn = async (Credentials) =>{
    const response = await API.post("/login",Credentials)
    console.log(response);
    const {token, refreshToken,userName,email,roles} = response.data
    const user = {userName,email,roles}
    localStorage.setItem("accessToken" ,token)
    localStorage.setItem("refreshToken",refreshToken)
    return {user, token}
}
  
export const logout = () => API.post("/logout")

export const verifyCode = async (verifyData) => {
        const response = await API.post("/VerifyCode",  verifyData)
        const { userName, email, token,refreshToken, roles } = response.data
        const user = {userName,email,roles}
        localStorage.setItem("accessToken", token)
        localStorage.setItem("refreshToken", refreshToken)
        return {user,token}
        
   
}


export const forgotPassword = async (email) =>{
    try{
        const response = await API.post("/forgotPassword", {email})
        return response.data


    }catch (error){
        console.error("Forgot password API error:", error)
        if (error.response?.status === 404){
            throw new Error ("No user found with this email address.")
        } 
        throw new Error(
            error.response?.data?.message || "Error sending reset password email."
          );

    }
}
export const resetPassword = async (token, password, passwordConfirmation) => {
    try {
      const response = await API.patch(`/resetPassword/${token}`, {
        password,
        passwordConfirmation,
      });
      return response.data;
    } catch (error) {
      console.error("Reset password API error:", error);
      if (error.response?.status === 404) {
        throw new Error("Invalid token or password.");
      }
      throw new Error(
        error.response?.data?.message || "Error resetting password."
      );
    }
};

export default API;

