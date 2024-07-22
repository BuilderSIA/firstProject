import { burga, kana, scorpion, sichqon, tarakan } from "../data"

const ServiceList = () => {
  return (
    <div>
      <div className="serviceList-textCont">
        <div data-aos="fade-right"
            data-aos-duration="1500">
            <h2 className="serviceList-text">
                Хизмат тури
            </h2>
        </div>
    </div>
    <div className="serviceList-cont">
    
        <ul className="serviceList">
        <div data-aos="flip-left"
        data-aos-duration="1500">
            <li className="serviceList-item">
                <h2 className="servList-text">
                    КЛАПАЛАР
                </h2>
                <p className="servList-p">
                    Улар тўшакда, юмшоқ мебелда, тўқимачиликда, ешик ромлари ва дераза ромлари остида яшайдилар. Улар одамлар ва иссиқ қонли ҳайвонларнинг қони билан озиқланади. Аллергия ва оғир психологик ноқулайликни қўзғатинг...
                </p>
                <div className="servList-footer">
                    <button className="contactBtn">
                        Богланиш
                    </button>
                    <img src={kana} alt="" />
                </div>
            </li>
            </div>
            <div data-aos="flip-up"
        data-aos-duration="1500">
            <li className="serviceList-item">
                <h2 className="servList-text">
                    ТАРАКАНЛАР
                </h2>
                <p className="servList-p">
                    Улар патогенларни олиб юрадилар. Улар ёриқларда, таглик тагида, мебел орқасида, ҳаммом остида, шкафлар остида ва ҳоказоларда яшайдилар. Улар озиқ-овқат, маиший чиқиндилар, чарм буюмлар ва қоғоз билан озиқланадилар.
                </p>
                <div className="servList-footer">
                    <button className="contactBtn">
                        Богланиш
                    </button>
                    <img src={tarakan} alt="" />
                </div>
            </li>
            </div>
            <div data-aos="flip-right"
        data-aos-duration="1500">
            <li className="serviceList-item">
                <h2 className="servList-text">
                    ЧАЁН
                </h2>
                <p className="servList-p">
                    Ҳашаротлар ва арахнидлар билан озиқланадиган иссиқликни яхши кўрадиган жонзотлар. Улар омборларда ва уйларда яшашлари мумкин, лекин кўпинча улар ёғоч биноларда топилади ...
                </p>
                <div className="servList-footer">
                    <button className="contactBtn">
                        Богланиш
                    </button>
                    <img src={scorpion} alt="" />
                </div>
            </li>
            </div>
            <div data-aos="flip-left"
        data-aos-duration="1500">
            <li className="serviceList-item">
                <h2 className="servList-text">
                    КЕМИРУВЧИЛАР
                </h2>
                <p className="servList-p">
                    Енг кенг тарқалган каламушлар ва сичқонлар. Улар патогенларни олиб юради, барча сиртларда ишлайди, девор ва шифтларда ўтиш жойларини яратади, структуранинг ишончлилигини пасайтиради. Улар озиқ-овқат ва маиший чиқиндилар билан озиқланади...
                </p>
                <div className="servList-footer">
                    <button className="contactBtn">
                        Богланиш
                    </button>
                    <img src={sichqon} alt="" />
                </div>
            </li>
            </div>
            <div data-aos="flip-down"
        data-aos-duration="1500">
            <li className="serviceList-item">
                <h2 className="servList-text">
                    БУРГАЛАР
                </h2>
                <p className="servList-p">
                    Улар уй ҳайвонлари танасига кириб, қўшнилардан кўчиб кетишади. Улар юмшоқ мебеллар, кўрпа-тўшаклар, гиламлар, юмшоқ ўйинчоқлар, таглик тагида ва дераза ва ешик ромларида яшайдилар. Улар одамлар ва ҳайвонларнинг қони билан озиқланади. Улар касалликларга олиб келади ...
                </p>
                <div className="servList-footer">
                    <button className="contactBtn">
                        Богланиш
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
