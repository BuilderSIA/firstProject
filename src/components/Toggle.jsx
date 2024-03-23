/* eslint-disable react/prop-types */
import './Toggle.scss'
const Toggle = ({handleChange ,mode}) => {
  return (
    <div className="toggle-cont">
      <input 
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={mode}
        />
        <label htmlFor="check"></label>
    </div>
  )
}

export default Toggle
