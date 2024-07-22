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
                        Дезинсексия - ҳашаротларни йўқ қилиш
                    </h2>
                    <p>
                        Кўп одамлар биринчи навбатда 'дезинфестатсия' сўзини исталмаган қўшниларидан - чойшаблар, ҳамамбöcеклер, чумолилар ва бошқа ҳашаротлардан халос бўлиш ёлини қидирганда дуч келишади. Уларнинг ўзлари йўқимсиз ва улар ҳам маълум инфектсия ташувчилари. Дезинсексия - бу ҳашаротларни: чивинлар, чивинлар, чойшаблар, тараканлар, куя, шомил, қобиқ қўнғизлари, ёғоч битлари ва бошқа судралиб юрувчи ва учувчи жонзотларни йўқ қилиш.
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
                        Дератизатсия - кемирувчиларни йўқ қилиш.
                    </h2>
                    <p>
                        Тошкентда дератизатсия кемирувчиларни йўқ қилишга қаратилган комплекс чора-тадбирларнинг бутун мажмуасидир. Маълумки, кемирувчилар жуда қаттиқ жонзотлар бўлиб, улар турли хил хавфли таъсирларга дош берадилар. Шунинг учун уларни йўқ қилиш учун бир қатор усуллардан фойдаланиш керак. Дератизатсия Тошкент шаҳрида кемирувчилар пайдо боʻлган жойларда: коʻп қаватли уйлар, омборлар, доʻконлар, умумий овқатланиш корхоналари амалга оширилади.
                    </p>
                </div>
            </li>
    </div>
        </ul>
    </div>
  )
}

export default Services
