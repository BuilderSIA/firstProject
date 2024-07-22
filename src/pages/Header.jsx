/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { sixthImage } from "../data"

const Header = ({handleChange,t,crntLang}) => {
    

  return (
    <div className="header" id="home">
        <nav className="navbar">
            <img src="" alt="" className="navlogo" />
            <ul className="navlist">
                <li className="list-item">
                    <a href="#home">
                        {t("Asosiy")}
                    </a>
                </li>
                <li className="list-item">
                    <a href="#about">
                        {t("Biz haqimizda")}
                    </a>
                </li>
                <li className="list-item">
                    <a href="#services">
                        {t("Xizmatlar")}
                    </a>
                </li>
                <li className="list-item">
                    <a href="#faq">
                        FAQ
                    </a>
                </li>
            </ul>
            <select name="lang" id="lang" value={crntLang} onChange={handleChange}> 
                <option value="uz">
                    O'zbek
                </option>
                <option value="ru">
                    Русский
                </option>
                <option value="en">
                    English
                </option>
            </select>
            <div className="navBtnCont">
                        
                        <button className="contactBtn">
                            {t("Bog'lanish")}
                        </button>
                    </div>
        </nav>
        <div className="hero">
        <div className="heroText">
            <div className="animate__animated animate__backInLeft">
                <div className="animate__animated animate__bounce animate__delay-1s">
                    <h1 className="heroText-main">
                    {t("Dezinfeksiya xizmati")}
                    </h1>
                </div>
                    <p className="heroText-p">
                    {t("Biz")}
                    </p>
            </div>
        </div>
        <div className="heroImg">
            <img className="heroImgMain" src={sixthImage} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Header
