import "../Styles/Navbar.css";
import Logo from "../Images/logo.png";
import Eye from "../Images/eye button.png";
import { useRef, useState } from "react";
function Navbar () {
    const [sidebar,setSidebar] = useState(true);
    const menuRef = useRef();
    const handleMenu = () => {
        if(sidebar){
            menuRef.current.style.visibility = "visible";
            menuRef.current.style.height = "250px";
        }
        else{
            menuRef.current.style.visibility = "hidden";
            menuRef.current.style.height = "0";
        }
        setSidebar(!sidebar);
    }
    return(
        <div className="Navbar">
            <img src={Logo} alt="Logo"></img>
            <div className="Menu-cont" onClick={handleMenu}>
                <i className='bx bxs-down-arrow burger-icon' ></i>
                <p className="Heading1">MENU</p>
            </div>
            <li className="Navbar-links-cont-lg">
                <a href="/" className="Heading1">SIGN IN</a>
                <a href="/" className="Heading1">LEGAL</a>
                <a href="/" className="Heading1">LICENSES</a>
                <a href="/" className="Heading1">SECURITY</a>
                <a href="/" className="Heading1">CAREERS</a>
                <a href="/" className="Heading1">PRESS</a>
                <a href="/" className="Heading1">SUPPORT</a>
                <a href="/" className="Heading1">STATUS</a>
                <a href="/" className="Heading1">CODEBLOG</a>
            </li>
            <li className="Navbar-links-cont-sm" ref={menuRef}>
                <a href="/" className="Heading1">SIGN IN</a>
                <a href="/" className="Heading1">LEGAL</a>
                <a href="/" className="Heading1">LICENSES</a>
                <a href="/" className="Heading1">SECURITY</a>
                <a href="/" className="Heading1">CAREERS</a>
                <a href="/" className="Heading1">PRESS</a>
                <a href="/" className="Heading1">SUPPORT</a>
                <a href="/" className="Heading1">STATUS</a>
                <a href="/" className="Heading1">CODEBLOG</a>
            </li>
            <img src={Eye} alt="Eye button"></img>
        </div>
    )
}

export default Navbar;

