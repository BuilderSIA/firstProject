/* eslint-disable react/prop-types */
import { call, firstImage, location } from "../data"


const Footer = ({t}) => {
  return (
    <div className="footer">
        <a href="#home" className="navlogo">
            <img src={firstImage} alt="" />
            <div className="logotext">
                <h2>
                    Toshkent
                </h2>
                <h2>
                        Dezinfeksiya
                </h2>
            </div>
        </a>
        <div className="address-cont">
            <img src={location} alt="" />
            <p>
                {t("adres")}
            </p>
        </div>
        <div className="tele-cont">
            <img src={call} alt="" />
            <p>
                +998 (99)-097-24-72 
            </p>
        </div>
    </div>
  )
}

export default Footer
