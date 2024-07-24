/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { burga, kana, scorpion, sichqon, tarakan } from "../data"

const ServiceList = ({t}) => {
  return (
    <div>
      <div className="serviceList-textCont">
        <div data-aos="fade-right"
            data-aos-duration="1500">
            <h2 className="serviceList-text">
                {t("xizmatturi")}
            </h2>
        </div>
    </div>
    <div className="serviceList-cont">
    
        <ul className="serviceList">
        <div data-aos="flip-left"
        data-aos-duration="1500">
            <li className="serviceList-item">
                <h2 className="servList-text">
                    {t("klapalar")}
                </h2>
                <p className="servList-p">
                    {t("kalapahaqida")}
                </p>
                <div className="servList-footer">
                    <button className="contactBtn">
                        {t("Bog'lanish")}
                    </button>
                    <img src={kana} alt="" />
                </div>
            </li>
            </div>
            <div data-aos="flip-up"
        data-aos-duration="1500">
            <li className="serviceList-item">
                <h2 className="servList-text">
                    {t("tarakan")}
                </h2>
                <p className="servList-p">
                    {t("tarakanhaqida")}
                </p>
                <div className="servList-footer">
                    <button className="contactBtn">
                        {t("Bog'lanish")}
                    </button>
                    <img src={tarakan} alt="" />
                </div>
            </li>
            </div>
            <div data-aos="flip-right"
        data-aos-duration="1500">
            <li className="serviceList-item">
                <h2 className="servList-text">
                    {t("chayon")}
                </h2>
                <p className="servList-p">
                    {t("chayonhaqida")}
                </p>
                <div className="servList-footer">
                    <button className="contactBtn">
                        {t("Bog'lanish")}
                    </button>
                    <img src={scorpion} alt="" />
                </div>
            </li>
            </div>
            <div data-aos="flip-left"
        data-aos-duration="1500">
            <li className="serviceList-item">
                <h2 className="servList-text">
                    {t("kemiruvchi")}
                </h2>
                <p className="servList-p">
                    {t("kemiruvchihaqida")}
                </p>
                <div className="servList-footer">
                    <button className="contactBtn">
                        {t("Bog'lanish")}
                    </button>
                    <img src={sichqon} alt="" />
                </div>
            </li>
            </div>
            <div data-aos="flip-down"
        data-aos-duration="1500">
            <li className="serviceList-item">
                <h2 className="servList-text">
                    {t("burga")}
                </h2>
                <p className="servList-p">
                    {t("burgahaqida")}
                </p>
                <div className="servList-footer">
                    <button className="contactBtn">
                        {t("Bog'lanish")}
                    </button>
                    <img src={burga} alt="" />
                </div>
            </li>
        </div>
        </ul>
    </div>
    </div>
  )
}

export default ServiceList
