import "../Styles/Hero.css";
import Phone from "../Images/intro-phone 1.png";
import Cube from "../Images/intro-cube 1.png";
import Cubes from "../Images/intro-cubes 1.png";
import Stairs from "../Images/intro-stairs 1.png";
import Pillar from "../Images/intro-pillar 1.png";
import Vector from "../Images/Vector.png";
function Hero(){
    return(
        <div className="Hero">
            <img src={Vector} alt="Vector" className="vector-img"></img>
            <div className="Title-cont">
                <p className="Title">CASH</p>
                <img src={Phone} alt="Phone icon" className="hero-phone-icon"></img>
                <p className="Title">APP</p>
            </div>
            <div className="Hero-Floating-objects">
                <div>
                    <img src={Cube} alt="Cube" className="cube-icon"></img>
                    <img src={Stairs} alt="Stairs" className="stair-icon"></img>
                </div>
                <div>
                    <img src={Cubes} alt="Cubes" className="cubes-icon"></img>
                    <img src={Pillar} alt="Pillar" className="pillar-icon"></img>
                </div>
            </div>
            <i className='bx bx-down-arrow-alt bx-sm down-arrow'></i>
            <footer className="Hero-footer">
                <div className="footer-icon">
                    <div className="app-store">
                        <i className='bx bxl-apple bx-sm apple-icon'></i>
                        <p className="Heading1">APP STORE</p>
                    </div>
                    <div className="play-store">
                        <i className='bx bxl-play-store bx-sm play-icon' ></i>
                        <p className="Heading1">GOOGLE PLAY</p>
                    </div>
                </div>
                <div className="policy-cont Hero-policy-cont">
                    <p className="Paragraph1 Hero-policy policy-text">Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
                        See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.</p>
                    <div className="Policy-icon">
                    <i className='bx bxl-twitch bx-sm twitch-icon' ></i>
                    <i className='bx bxl-twitter bx-sm twitter-icon' ></i>
                    <i className='bx bxl-instagram bx-sm insta-icon' ></i>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Hero