import axios  from "axios";

const API = axios.create({
    baseURL:"https://api.dopatox.site/api/Auth"
})
let refreshPromise = null;

API.interceptors.request.use(
    async (config) => {
        const accessToken = localStorage.getItem("accessToken")
        if (accessToken){
            config.headers.Authorization = `Bearer ${accessToken}`
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
            !originalRequest.url.includes("/signUp")&&
            !originalRequest.url.includes("/refresh")
        ){
            originalRequest._retry = true
            if (!refreshPromise) {
                const refreshToken = localStorage.getItem("refreshToken")
                if (!refreshToken) {
                    window.location.href = "/signin"
                    return Promise.reject("No refresh token found. Redirecting to login")
                }

                refreshPromise = axios.post("https://api.dopatox.site/api/Auth/refresh",{token: refreshToken})
                .then((res) => {
                    const newAccessToken = res.data.accessToken
                    localStorage.setItem("accessToken", newAccessToken)
                })
                .catch((refreshError) => {
                    console.error("Token refresh failed:", refreshError);
                    window.location.href = "/signin";
                    return Promise.reject(refreshError);        

                })
                .finally(() =>{
                    refreshPromise = null
                })
            }

            try{
                await refreshPromise
                const newAccessToken = localStorage.getItem("accessToken")
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
                return API(originalRequest)

            } catch(err){
                return Promise.reject("Session expired, please log in again.")

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
export const signUp = (userData) => API.post("/SignUp", userData)


export const signIn = async (Credentials) =>{
    const response = await API.post("/login",Credentials)
    console.log(response);
    const {accessToken} = response.data
    localStorage.setItem("accessToken" , accessToken)
    localStorage.setItem("refreshToken",refreshToken)
    return response.data
}

export const logout = () =>{
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
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

