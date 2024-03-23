/* eslint-disable react/prop-types */

import { helping, medal, thunder } from "../data"

const AboutUs = () => {
  return (
    <div className="info">
        <h2 className="serviceList-text">
            Биз ҳақимизда
        </h2>
        <ul className="infoList">
            <li className="infoList-items">
                <img className="info-icons" src={thunder} alt="" />
                <h3 className="info-head">
                    Тезда Хизмат Кўрсатиш
                </h3>
                <p className="info-p">
                    АРИЗАЛАР КУНИГА 24 СОАТ ҚАБУЛ ҚИЛИНАДИ. АГАР МУАММО ШОШИЛИНЧ БЎЛСА, БИЗ ДАРҲОЛ КЕТИШИМИЗ МУМКИН. ШУ БИЛАН БИРГА, СИФАТ МУКАММАЛ БЎЛИБ ҚОЛАДИ.
                </p>
            </li>
            <li className="infoList-items">
                <img className="info-icons" src={medal} alt="" />
                <h3 className="info-head">
                    Йетук Мутаҳасислаpимиз
                </h3>
                <p className="info-p">
                    БИЗНИНГ ХОДИМЛАРИМИЗ ҲАММА НАРСАГА ҒАМХЎРЛИК ҚИЛАДИ: ҲИСОБ-КИТОБЛАР, ХОНАНИ ТАЙЁРЛАШ, ҚАЙТА ИШЛАШ, ЯКУНИЙ ТОЗАЛАШ, ВЕНТИЛЯТСИЯ ВА НАЗОРАТ ТЕКШИРУВИ.
                </p>
            </li>
            <li className="infoList-items">
                <img className="info-icons" src={helping} alt="" />
                <h3 className="info-head">
                    Сизга Мақул Вақтда
                </h3>
                <p className="info-p">
                    СИЗ ЎЗИНГИЗ УЧУН МАҚУЛ ВА ҚУЛАЙ ВАҚТНИ ТАНЛАНГ ВА БИЗГА МУРОЖАТ ҚИЛИНГ. СИЗГА КАФОЛАТЛАНГАН ВА САМАРАЛИ НАТИЖАНИ ОЛИБ БОРАМИЗ
                </p>
            </li>
        </ul>
    </div>
  )
}

export default AboutUs
