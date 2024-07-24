/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { letsgo } from "../data"


const Tellus = ({t}) => {
  return (
    <div className="tellus">
      <div data-aos="fade-right"
        data-aos-duration="1000"
        className="tell-cont">
            <h2>
              {t("malumotqoldiring")}
            </h2>
            <input type="text" placeholder="Исмингиз" />
            <input type="text" placeholder="+998-90-123-45-67"/>
            <button className="sendBtn">
                {t("yuborish")}
            </button>
        </div>
        <img src={letsgo} alt="" data-aos="fade-left" data-aos-duration="1000"/>
    </div>
  )
}

export default Tellus
