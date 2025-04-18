import FooterImg from './assets/Dopatox.png';
import FooterArrow from './assets/ArrowFooter.png';
import { Link } from 'react-router-dom';
import Logo from './assets/Logo.png';
function Footer() {
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <footer>
                <div className='footerImg'>
                    <img src={FooterImg} alt="" srcset="" />
                </div>

                <div className='FooterNav d-flex justify-content-between align-items-center mb-3 w-100'>
                    <div className='footerNavLeft'>
                        <img className='me-2' src={Logo} alt="" srcset="" />
                        DOPATOX
                    </div>
                    <ul className='footerNavRight d-flex gap-3 '>
                        <li><Link to="/" onClick={(e) => handleScroll(e, 'features')}>Features</Link></li>
                        <li><Link to="/" onClick={(e) => handleScroll(e, 'screenshots')}>Screens</Link></li>
                        <li>
                            <Link>Download</Link>
                            <img src={FooterArrow} alt="" srcset="" />
                        </li>
                    </ul>
                </div>
                <div className='copyright d-flex justify-content-between align-items-center'>
                        <p>Copyright DOPATOX</p>
                        <p>Privacy Policy</p>
                    </div>
            </footer>
        </>
    )
}

export default Footer
