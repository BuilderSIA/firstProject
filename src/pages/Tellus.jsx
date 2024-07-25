/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { letsgo } from "../data";

const Tellus = ({ t }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({ name: "", phone: "" });

  const handleSubmit = () => {
    let hasErrors = false;
    let errors = { name: "", phone: "" };

    if (!name) {
      errors.name = "Please enter your name.";
      hasErrors = true;
    }

    const phonePattern = /^\+998-\d{2}-\d{3}-\d{2}-\d{2}$/;
    if (!phone) {
      errors.phone = "Please enter your phone number.";
      hasErrors = true;
    } else if (!phonePattern.test(phone)) {
      errors.phone = "Please enter a valid phone number.";
      hasErrors = true;
    }

    setErrors(errors);

    if (!hasErrors) {
      // Add your form submission logic here
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="tellus" id="tellus">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="tell-cont"
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
            placeholder="+998-90-123-45-67"
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
