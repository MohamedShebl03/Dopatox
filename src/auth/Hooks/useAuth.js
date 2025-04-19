import { useAuthStore } from "../stores/authStoreB"

import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify";
import {
    signIn,
    signUp,
    logout,
    forgotPassword,
    getUser,

} from "../api/auth"

function useAuth(){
    const {user , setUser, logout: logoutFromStore} =useAuthStore()

    const handleError = (error) =>{
        return(
            error?.response?.data?.message ||
            "Something went wrong. Please try again."
        )
    }

    const signInMutation = useMutation({
        mutationFn: async (Credentials) =>{
            const response = await signIn(Credentials)
            return response
        },
        onSuccess: (data) =>{
            setUser(data)
        },
        onError: (error) =>{
            console.error("Sign-in error:", handleError(error))
        },
    })

    const signUpMutation = useMutation({
        mutationFn:async (userData) =>{
            const response = await signUp(userData)
            console.log("nada: ", response);
            
            return response
        },
        onSuccess: (data) =>{
            setUser(data)
        },
       
        onError: (error) =>{
            console.error("Sign-up error:", handleError(error))
        }
    })

    const signOutMutation = useMutation({
        mutationFn: async() =>{
            logout()
        },
        onSuccess: ()=>{
            logoutFromStore()
        },
        onError: (error) => {
            console.error("Sign-out error:", handleError(error));
        }

    })

    const forgotPasswordMutation = useMutation({
        mutationFn: async (email) =>{
            const response = await forgotPassword(email)
            return response.data
        },
        onSuccess: (data) =>{
            console.log("Forgot password success:", data)
            toast.success(
                "Password reset instructions have been sent to your email"
              );
        },
        onError: (error) => {
            console.error("Forgot password error:", handleError(error));
            toast.error(
              handleError(error) ||
                "Error sending reset password email. Please try again."
            );
          }
    })


    const resetPasswordMutation = useMutation({
        mutationFn: async ({token, password,passwordConfirmation}) => {
            const response = await resetPassword(
                token,
                password,
                passwordConfirmation

            )
            return response.data
        },
        onSuccess: () => {
            toast.success("Password reset successful!");
          },
          onError: (error) => {
            console.error("Reset password error:", handleError(error));
            toast.error(
              handleError(error) || "Error resetting password. Please try again."
            );
          },

    })

    return{
        user,
        isAuthenticated: !!user,
        signIn:signInMutation.mutateAsync,
        signUp:signUpMutation.mutateAsync,
        signOut:signOutMutation.mutateAsync,
        forgotPassword: forgotPasswordMutation.mutateAsync,
        resetPassword: resetPasswordMutation.mutateAsync,
        
        isLoading:
            signInMutation.isPending ||
            signUpMutation.isPending ||
            signOutMutation.isPending ||
            forgotPasswordMutation.isPending,
           
           
        signInError: signInMutation.error,
        signUpError: signUpMutation.error,
        signOutError: signOutMutation.error,
        forgotPasswordError: forgotPasswordMutation.error,
        resetPasswordError: resetPasswordMutation.error,   


    }
}
export default useAuth