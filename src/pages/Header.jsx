/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { firstImage, sixthImage } from "../data";

const Header = ({ handleChange, t, crntLang }) => {
  const [shadow, setShadow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  const handleNavItemClick = () => {
    const navbarToggler = document.getElementById('navbarToggler');
    if (window.getComputedStyle(navbarToggler).display !== 'none') {
      navbarToggler.click();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header">
      <nav className={shadow ? "navbar navbar-expand-lg bg-white fixed-top shadow-sm" : "navbar navbar-expand-lg bg-white fixed-top"} style={{maxWidth:"1920px",margin:"0 auto"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <img src={firstImage} alt="" />
            <div className="logotext">
              <h2>Toshkent</h2>
              <h2>Dezinfeksiya</h2>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="navbarToggler"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home" onClick={handleNavItemClick}>
                  {t("Asosiy")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#about" onClick={handleNavItemClick}>
                  {t("Biz haqimizda")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#services" onClick={handleNavItemClick}>
                  {t("Xizmatlar")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#faq" onClick={handleNavItemClick}>
                  FAQ
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <select className="form-select" name="lang" id="lang" value={crntLang} onChange={handleChange}>
                <option value="uz">O'zbek</option>
                <option value="ru">Русский</option>
                <option value="en">English</option>
              </select>
              <button className="contactBtn">
                <a href="#tellus" style={{color:"white"}}>
                {t("Bog'lanish")}
                </a>
                </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="hero" id="home">
        <div className="heroText">
          <div className="animate__animated animate__backInLeft">
            <div className="animate__animated animate__bounce animate__delay-1s">
              <h1 className="heroText-main">{t("Dezinfeksiya xizmati")}</h1>
            </div>
            <p className="heroText-p">{t("Biz")}</p>
          </div>
        </div>
        <div className="heroImg">
          <img className="heroImgMain" src={sixthImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;

