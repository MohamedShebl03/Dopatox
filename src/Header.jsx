import logo from './assets/logo.svg'
import { Link , useNavigate } from "react-router-dom";
import { useState } from "react";


function Header() {
    const [active, setActive] = useState("/");
    const navigate = useNavigate();
    const CloseMenu = () => {
    document.querySelector(".offcanvas.show")?.classList.remove("show");
    document.querySelector(".offcanvas-backdrop")?.classList.remove("show");
  };
  return (
    <>
        {/*!--Nav Bar--*/}
    <nav className="header navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container">
        {/*!--Logo--*/}
        <Link to='/' className="navbar-brand"><img src={logo} alt="logo" width="60" height="70" /></Link>
        {/*!------------------------------*/}

        {/*!--For responsive (Drop list)--*/}
        <button
          className="navbar-toggler"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/*!--side bar*/}
        <div
          className="offcanvas offcanvas-end menu-bar"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          {/*!--container logo && close--*/}
          <div className="offcanvas-header">
            {/*!--logo--*/}
            <Link to='/' className="offcanvas-title" id="offcanvasExampleLabel">
            <img src={logo} alt="logo" width="60" height="70" />
            </Link>
            {/*!--Close--*/}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          {/*!--pages--*/}
          <div className="offcanvas-body">
            <ul className="navbar-nav ps-5">
              <li className="nav-item pe-3">
              <Link className={`nav-link ${active === "/" ? "active" : ""}`}  onClick={() => {setActive("/");CloseMenu();}} to='/'>Home</Link>
              </li>
              <li className="nav-item pe-3">
              <Link className={`nav-link ${active === "/blog" ? "active" : ""}`} onClick={() => {setActive("/blog");CloseMenu();}} to='/Blog.jsx'>Blog</Link>
              </li>
              <li className="nav-item pe-3">
              <Link className={`nav-link ${active === "/features" ? "active" : ""}`} onClick={() => {setActive("/features");CloseMenu();}} to='/Features.jsx'>Features</Link>
              </li>
              <li className="nav-item pe-3">
              <Link className={`nav-link ${active === "/about" ? "active" : ""}`} onClick={() => {setActive("/about");CloseMenu();}} to='/AboutUs.jsx'>About Us</Link>
              </li>
            </ul>
            <ul className="navbar-nav flex-row justify-content-center mt-5">
              <button className="nav-btn me-2" onClick={() => {navigate("/ContactUs.jsx");CloseMenu();}}>Contact Us</button>
              <button className="nav-btn" onClick={() => {navigate("/Login.jsx");CloseMenu();}}>Login</button>
            </ul>
          </div>
        </div>
        {/*!------------------------------*/}

        {/*!--Pages for Large Screen--*/}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/*!--Pages--*/}
          <ul className="navbar-nav mr-auto ps-5">
            <li className='nav-item pe-3'>
              <Link className={`nav-link ${active === "/" ? "active" : ""}`}  onClick={() => setActive("/")} to='/'>Home</Link>
            </li>
            <li className='nav-item pe-3'>
              <Link className={`nav-link ${active === "/blog" ? "active" : ""}`} onClick={() => setActive("/blog")} to='./Blog.jsx'>Blog</Link>
            </li>
            <li className='nav-item pe-3'>
              <Link className={`nav-link ${active === "/features" ? "active" : ""}`} onClick={() => setActive("/features")} to='./Features.jsx'>Features</Link>
            </li>
            <li className='nav-item pe-3'>
              <Link className={`nav-link ${active === "/about" ? "active" : ""}`} onClick={() => setActive("/about")} to='./AboutUs.jsx'>About Us</Link>
            </li>
          </ul>
          {/*!------------------------------*/}

          {/*!--Buttons--*/}
          <div className="ms-auto">
            <button className="nav-btn me-2" onClick={() => navigate("./ContactUs.jsx")}>Contact Us</button>
            <button className="nav-btn" onClick={() => navigate("./Login.jsx")}>Login</button>
          </div>
          {/*!------------------------------*/}
        </div>
      </div>
    </nav>
    {/*!--------------------------------------------------------------------*/}
    </>
  )
}

export default Header
