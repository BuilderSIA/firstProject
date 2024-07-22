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
            <div data-aos="fade-up-left">
            <button className="contactBtn">
                {t("Bog'lanish")}
            </button>
            </div>
        </div>
    </div>
    </div>
    )
  }
  
  export default Contactus