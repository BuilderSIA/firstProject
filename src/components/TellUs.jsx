import { letsgo } from "../data"

const TellUs = () => {
  return (
    <div className="tellus">
        <div className="tell-cont">
            <h2>
            Малумотингизни қолдиринг
            </h2>
            <input type="text" placeholder="Исмингиз" />
            <input type="text" placeholder="+998-90-123-45-67"/>
            <button className="sendBtn">
                Юбориш
            </button>
        </div>
        <img src={letsgo} alt="" />
    </div>
  )
}

export default TellUs
