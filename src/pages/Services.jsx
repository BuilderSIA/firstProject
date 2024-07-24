/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { noBugs, noRats, noVirus } from "../data"

const Services = ({t}) => {
  return (
    <div className="services" id="services">
    <div data-aos="fade-right">
        <h2 className="serviceList-text">
            {t("Xizmatlar")}
        </h2>
    </div>
    <div data-aos="fade-right"
        data-aos-duration="500">
        <p className="service-p-text">
            {t("bizningxizmat")}
        </p>
    </div>
        <hr />
        <ul className="service-list">
    <div data-aos="fade-right"
        data-aos-duration="500">
            <li className="service-list-items">
                <div className="serv-item-left">
                    <img src={noVirus} alt="" />
                </div>
                <div className="serv-item-right">
                    <h2>
                        {t("dezinfeksiya")}            
                    </h2>
                    <p>
                        {t("dezinfeksiyahaqida")}
                    </p>
                </div>
            </li>
    </div>
    <div data-aos="fade-right"
        data-aos-duration="500">
            <li className="service-list-items">
                <div className="serv-item-left">
                    <img src={noBugs} alt="" />
                </div>
                <div className="serv-item-right">
                    <h2>
                        {t("dezinseksiya")}
                    </h2>
                    <p>
                        {t("dezinseksiyahaqida")}
                    </p>
                </div>
            </li>
    </div>
    <div data-aos="fade-right"
        data-aos-duration="500">
            <li className="service-list-items">
                <div className="serv-item-left">
                    <img src={noRats} alt="" />
                </div>
                <div className="serv-item-right">
                    <h2>
                        {t("deratizatsiya")}
                    </h2>
                    <p>
                        {t("deratizatsiyahaqida")}
                    </p>
                </div>
            </li>
    </div>
        </ul>
    </div>
  )
}

export default Services
