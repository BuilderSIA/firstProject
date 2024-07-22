import { letsgo } from "../data"


const Tellus = () => {
  return (
    <div className="tellus">
      <div data-aos="fade-right"
        data-aos-duration="1000"
        className="tell-cont">
            <h2>
            Малумотингизни қолдиринг
            </h2>
            <input type="text" placeholder="Исмингиз" />
            <input type="text" placeholder="+998-90-123-45-67"/>
            <button className="sendBtn">
                Юбориш
            </button>
        </div>
        <img src={letsgo} alt="" data-aos="fade-left"
        data-aos-duration="1000"/>
    </div>
  )
}

export default Tellus
