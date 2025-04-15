import { Outlet } from "react-router-dom";
import AuthNav from'./AuthNav'

function LayoutAuth(){
    return(
        <>
        <AuthNav/>
        <Outlet/>
        </>
    )

}
export default LayoutAuth;