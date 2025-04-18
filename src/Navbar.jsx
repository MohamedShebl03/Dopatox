import logo from './assets/Logo.svg'
import { Link, useNavigate } from "react-router-dom";
import Arrow from './assets/Arrow.png'

function Navbar() {
  const navigate = useNavigate();
  const CloseMenu = () => {
    document.querySelector(".offcanvas.show")?.classList.remove("show");
    document.querySelector(".offcanvas-backdrop")?.classList.remove("show");
  };
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    CloseMenu();
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      {/*!--Nav Bar--*/}
      <nav className="header navbar navbar-expand-lg navbar-light sticky-top">
        <div className="container d-flex justify-content-between align-items-center">
          {/*!--Logo--*/}
          <Link to='/' className="navbar-brand ">
            <img src={logo} alt="logo" width="44" height="46" />
            DOPATOX
          </Link>
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
              <ul className="navbar-nav ps-5 d-flex ">
                <li className='nav-item pe-3'>
                  <Link className="nav-link" to="/" onClick={(e) => handleScroll(e, 'features')}>Features</Link>
                </li>
                <li className='nav-item pe-3'>
                  <Link className="nav-link" to="/" onClick={(e) => handleScroll(e, 'faqs')}>Faqs</Link>
                </li>
                <li className='nav-item pe-3'>
                  <Link className="nav-link" to="/" onClick={(e) => handleScroll(e, 'screenshots')}>Screenshots</Link>
                </li>

              </ul>
            </div>
            <div>
              <button className="nav-btn" onClick={() => navigate("#")}>Download <img src={Arrow} alt="" srcset="" /></button>
            </div>
          </div>
          {/*!------------------------------*/}

          {/*!--Pages for Large Screen--*/}
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
            {/*!--Pages--*/}
            <ul className="navbar-nav">
              <li className='nav-item pe-3'>
                <Link className="nav-link" to="/" onClick={(e) => handleScroll(e, 'features')}>Features</Link>
              </li>
              <li className='nav-item pe-3'>
                <Link className="nav-link" to="/" onClick={(e) => handleScroll(e, 'faqs')}>Faqs</Link>
              </li>
              <li className='nav-item pe-3'>
                <Link className="nav-link" to="/" onClick={(e) => handleScroll(e, 'screenshots')}>Screenshots</Link>
              </li>
            </ul>
            {/*!------------------------------*/}

            {/*!--Buttons--*/}
            <div className="">
              <button className="nav-btn" onClick={() => navigate("#")}>Download <img src={Arrow} alt="" srcset="" /></button>
            </div>
            {/*!------------------------------*/}
          </div>
        </div>
      </nav>
      {/*!--------------------------------------------------------------------*/}
    </>
  )
}

export default Navbar
