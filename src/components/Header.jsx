/* eslint-disable react/prop-types */
import { useState } from "react";
import { firstImage, menu } from "../data";
import Toggle from "./Toggle";

function Header({mode,setMode}) {
    const [sideBar,setSideBar] = useState(false);
    return (
        <div className="header">
            <nav className="navbar">
                <div className="navlogo">
                    <img src={firstImage} alt="" />
                    <div className="logotext">
                    <h2>
                        Toshkent
                    </h2>
                    <h2>
                        Dezinfeksiya
                    </h2>
                    </div>
                </div>
                <ul className={!sideBar?"resp-list":"resp-list-on"}>
                <li>
                            <a href="">
                                Асосий
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Биз ҳақимизда
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Хизматлар
                            </a>
                        </li>
                        <li>
                            <a href="">
                                FAQ
                            </a>
                        </li>
                </ul>
                <div className="menu-toggle" onClick={()=>setSideBar(!sideBar)}>
                    <img src={menu} alt="" />
                </div>
                    <ul className="navlist">
                    <li>
                            <a href="">
                                Асосий
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Биз ҳақимизда
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Хизматлар
                            </a>
                        </li>
                        <li>
                            <a href="">
                                FAQ
                            </a>
                        </li>
                    </ul>
                    <select className="lang" name="" id="">
                        <option value="">
                            Ўзбекча
                        </option>
                        <option value="">
                            Русский
                        </option>
                    </select>
                    <div className="navBtnCont">
                        <Toggle
                            mode={mode}
                            handleChange={()=>setMode(!mode)}
                        />
                        <button className="contactBtn">
                            Богланиш
                        </button>
                    </div>
            </nav>
        </div>
    );
}

export default Header;