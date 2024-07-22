/* eslint-disable react/prop-types */
import { helping, medal, thunder } from "../data"


const Aboutus = ({t}) => {
  return (
    <div className="aboutus" id="about">
      <div data-aos="fade-right">
        <h2>
          {t("Biz haqimizda")}
        </h2>
        <hr />
      </div>
      <div className="about-cont">
      <div data-aos="fade-right"
        data-aos-duration="1000">   
        <ul className="infoList">
            <li className="infoList-items">
                <img className="info-icons" src={thunder} alt="" />
                <h3 className="info-head">
                    {t("Tezda")}
                </h3>
                <p className="info-p">
                    {t("arizalar")}
                </p>
            </li>
            <li className="infoList-items">
                <img className="info-icons" src={medal} alt="" />
                <h3 className="info-head">
                    {t("kadrlar")}
                </h3>
                <p className="info-p">
                {t("kadrlarhaqida")}
                </p>
            </li>
            <li className="infoList-items">
                <img className="info-icons" src={helping  } alt="" />
                <h3 className="info-head">
                    {t("vaqt")}
                </h3>
                <p className="info-p">
                    {t("vaqthaqida")}
                </p>
            </li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
