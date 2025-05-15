import { create } from "zustand"
export const useAuthStore = create((set) => ({
    user: null,
    

    setUser: (user) =>{
        if(user?.userName){
            try{
                localStorage.setItem("user" , JSON.stringify(user))
                set({user})
            }catch(err){
                console.error("Error storing in localStorage" , err)
            }
            
        }else{
            console.error("Invalid user data ot token not storing in localStorage")

        }
    },
    logout: () =>{
        set({ user: null })
        localStorage.removeItem("user")
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        
    }
    
}))

if (typeof window !== "undefined"){
    const storedUser =  localStorage.getItem("user")

    if (storedUser){
        try{
            useAuthStore.setState({
            user: JSON.parse(storedUser),
            
            })
        } catch (error){
            console.error("Error parsing stored user:",error)
            localStorage.removeItem("user")
          

        }
    }
}