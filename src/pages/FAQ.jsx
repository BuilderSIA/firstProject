/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */


const FAQ = ({t}) => {
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
                    {t("1chisavol")}
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {t("1chijavob")}
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        {t("2chisavol")}
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {t("2chijavob")}
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        {t("3chisavol")}
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {t("3chijavob")}
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
