/* eslint-disable react/no-unescaped-entities */


const FAQ = () => {
  return (
    <div className="FAQ" id="faq">
        <div data-aos="fade-right"
        data-aos-duration="1000">
        <h2 className="Faq-text">
            FAQ
        </h2>
        </div>
        <div data-aos="fade-right"
        data-aos-duration="1500">
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Зараркунандаларни йўқ қилиш қандай амалга оширилади?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Махсус асбоб-ускуналар ёрдамида инсектитсидлар аерозолли туманга айланади ва девор қоғози, деворлар ва тахта плиталари орасидаги енг кичик бўшлиқларга, кўзга кўринмас ҳашаротлар учун потентсиал 'яшириш жойлари' га киради.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Сиз фойдаланадиган дорилар хавфлими?
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Препаратлар одамлар, уй ҳайвонлари ва ўсимликлар учун хавфли емас. Аммо даволанишдан кейин хонани 40 дақиқа давомида вентилятсия қилиш керак.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Менга уйимни даволанишга тайёрлашнинг қандайдир усули керакми?
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Асосан, идиш-товоқ ва шахсий гигиена воситаларини изолятсия қилишингиз керак. Даволаш пайтида уй ҳайвонлари ҳам изолятсия қилиниши керак. Мебел ёки маиший техникани кўчиришга ҳожат йўқ.
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ
