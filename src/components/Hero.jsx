/* eslint-disable react/prop-types */
import { sixthImage } from "../data";


const Hero = () => {
  return (
    <div className="hero" >
      <div className="heroText">
        <h1 className="heroText-head">
            Дизинфексия хизмати
        </h1>
        <p className="heroText-p">
        Биз Тошкентда 10 йилдан бери профессионал дезинфексия ишларини олиб борамиз, шунинг учун биринчи марта зараркунандалардан қандай қутулишни биламиз.
        </p>
      </div>
      <div className="heroImg">
        <img className="heroImgMain" src={sixthImage} alt="" />
      </div>
    </div>
  )
}

export default Hero
