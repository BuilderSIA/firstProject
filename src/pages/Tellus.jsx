/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { letsgo } from "../data";
import axios from "axios";

const Tellus = ({ t }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({ name: "", phone: "" });


  
  const sendMessage = (event)=>{
    event.preventDefault();
    const token = "6582309797:AAEkQceDf4XyIPv55ENIGd-eXOxJpqgao4w";
    const chatID = 6582309797;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = event.target.value;
    const surname = event.target.value;
    axios({
        url:url,
        method:'POST',
        data:{
            "chat_id":chatID,
            "text":name,

        }
    }).then((res)=>{
        alert("Muvafaqqiyetli yuborildi")
    }).catch((error)=>{
        console.log("Yuborishda hatolik",error);
    })
}




  const handleSubmit = () => {
    let hasErrors = false;
    let errors = { name: "", phone: "" };

    if (!name) {
      errors.name = t("ismerror");
      hasErrors = true;
    }

    const phonePattern = /^\+998\d{2}\d{3}\d{2}\d{2}$/;
    if (!phone) {
      errors.phone = t("raqamyoq");
      hasErrors = true;
    } else if (!phonePattern.test(phone)) {
      errors.phone = t("raqamerror");
      hasErrors = true;
    }

    setErrors(errors);

    if (!hasErrors) {
      alert(t("yuborildi"));
    }
  };

  return (
    <div className="tellus" id="tellus">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="tell-cont"
        onSubmit={sendMessage}
      >
        <h2>{t("malumotqoldiring")}</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder={t("ismingiz")}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="+998901234567"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <div className="error-message">{errors.phone}</div>}
        </div>
        <button className="sendBtn" onClick={handleSubmit}>
          {t("yuborish")}
        </button>
      </div>
      <img
        src={letsgo}
        alt=""
        data-aos="fade-left"
        data-aos-duration="1000"
      />
    </div>
  );
};

export default Tellus;
















































































/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
// import { letsgo } from "../data"


// const Tellus = ({t}) => {
//   return (
//     <div className="tellus" id="tellus">
//       <div data-aos="fade-right"
//         data-aos-duration="1000"
//         className="tell-cont">
//             <h2>
//               {t("malumotqoldiring")}
//             </h2>
//             <input type="text" placeholder={t("ismingiz")} />
//             <input type="text" placeholder="+998-90-123-45-67"/>
//             <button className="sendBtn">
//                 {t("yuborish")}
//             </button>
//         </div>
//         <img src={letsgo} alt="" data-aos="fade-left" data-aos-duration="1000"/>
//     </div>
//   )
// }

// export default Tellus
