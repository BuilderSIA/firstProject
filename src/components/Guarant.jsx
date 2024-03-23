import { guarant, seventhImage} from "../data"

const Guarant = () => {
  return (
    <div>
      <div className="guarant">
        <img src={seventhImage} alt="" className="ACE" />
        <div className="guarant-cont">
            <img src={guarant} alt=""/>
            <h2 className="guarant-text">
                Расмий кафолат - 1 йил. Биз жизмоний ва юридик шахсларга хизмат курсатамиз. Хизматлар лицензияланган!!!
            </h2>
            <button className="contactBtn">
                Богланиш
            </button>
        </div>
      </div>
    </div>
  )
}

export default Guarant
