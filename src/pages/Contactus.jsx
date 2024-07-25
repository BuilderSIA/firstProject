/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const Contactus = ({t}) => {



    return (
    <div data-aos="fade-right">
    <div className="contact">
        <div className="contact-cont">
            <div data-aos="zoom-in">
                <h2 className="contact-head">
                    {t("kanayoq")}
                </h2>
            </div>
            <div data-aos="zoom-in">
                <p className="contact-p">
                        {t("mijozlar")}
                </p>
            </div>
            <div data-aos="fade-up-left" id="frstContact">
            <button className="contactBtn" >
            <a href="#tellus">
                {t("Bog'lanish")}
                </a>
            </button>
            </div>
            <button className="contactBtn" id="secContact" >
            <a href="#tellus">
                {t("Bog'lanish")}
                </a>
            </button>
        </div>
    </div>
    </div>
    )
  }
  
  export default Contactus