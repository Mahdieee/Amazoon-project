import React, { useState } from 'react';
import flag from "../components/assets/flag.png"
import arrow from "../components/assets/arrow.svg"

const Menu = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="menu-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="menu-key">
                <span ><img className="flag" src={flag} alt="flag" /></span>
                EN</div>
            {isHovered && (
                <ul className="menu-items">
                    <p className='changelan'>Change Language <span className='more'>Learn More</span> </p>
                    <li>
                        <input type="radio" id="item1" name="menu" value="English - EN" />
                        <label htmlFor="item1">English - EN</label>
                    </li>
                    <li>
                        <input type="radio" id="item2" name="menu" value="español - ES" />
                        <label htmlFor="item2">español - ES</label>
                    </li>
                    <li>
                        <input type="radio" id="item3" name="menu" value="العربية - AR" />
                        <label htmlFor="item3">العربية - AR</label>
                    </li>
                    <li>
                        <input type="radio" id="item3" name="menu" value="Deutsch - DE" />
                        <label htmlFor="item3">Deutsch - DE</label>
                    </li>
                    <li>
                        <input type="radio" id="item3" name="menu" value="עברית - HE" />
                        <label htmlFor="item3">עברית - HE</label>
                    </li>
                    <li>
                        <input type="radio" id="item3" name="menu" value="한국어 - KO" />
                        <label htmlFor="item3">한국어 - KO</label>
                    </li>
                    <li>
                        <input type="radio" id="item3" name="menu" value="português - PT" />
                        <label htmlFor="item3">português - PT</label>
                    </li>
                    <li>
                        <input type="radio" id="item3" name="menu" value="中文 (简体) - ZH" />
                        <label htmlFor="item3">中文 (简体) - ZH</label>
                    </li>
                    
                </ul>
                
                
            )}
            <span className="lanarrow"> <img src={arrow} alt="arrow" /></span>
        </div>
    );
};

export default Menu;

