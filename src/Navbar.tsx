import logo from './img/capa.png';
import building from './img/vector.svg';
import dividerVertical from './img/dividerVertical.png'
import path from './img/path.png'

const Navbar = () => {
    return(
        <div id="navMainContainer">
            <div id="navLeftContainer">
                <div>
                    <div className="path"></div>
                    <div className="path"></div>
                    <div className="path"></div>
                </div>
                <img src={logo} alt="company logo" id="companyLogo"/>
            </div>
            <div id="navRightContainer">
                <img src={building} alt="building" id="building"/>
                <p id="navT1">A 가공 업체</p>
                <img src={dividerVertical} alt="divider" id="dividerVertical"/>
                <p id="navT2">로그아웃</p>
            </div>
        </div>
    )
}
export default Navbar;