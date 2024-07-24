/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { guarant, seventhImage } from "../data"


const Guarant = ({t}) => {
  return (
    <div className="g-container" >
      <div className="guarant">
        <img src={seventhImage} alt="" className="ACE" data-aos="fade-right"
        data-aos-duration="1000" />
        <div className="guarant-cont" data-aos="fade-left"
        data-aos-duration="1000">
            <img src={guarant} alt=""/>
            <h2 className="guarant-text">
                {t("garant")}
            </h2>
            <button className="contactBtn">
                {t("Bog'lanish")}
            </button>
        </div>
      </div>
    </div>
  )
}

export default Guarant
