/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { close, firstImage,menusvg,sixthImage } from "../data"

const Header = ({handleChange,t,crntLang}) => {
    const [shadow, setShadow] = useState(false);
    const [menu,setMenu] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };



  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header" id="home">
        <nav className={shadow?"navbarshadow":"navbar"}
            style={menu?{}:{justifyContent:"end"}} id="nav">
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
            <div className="nav-cont" id={menu?"opened":"closed"}>
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
            </div>
            <button onClick={()=>setMenu(!menu)} className="menubtn">
            <img src={menu ? close :menusvg} alt="button" className="menuimg" />
            </button>
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
