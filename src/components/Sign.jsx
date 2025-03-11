import React, { useState } from 'react';
import arrow from "../components/assets/arrow.svg"
import buy from "../components/assets/buy.png"



const Sign = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="menu-container-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <container className='container'>
        <div className="menu-key-2">
          <div>
            <p className='hello'>Hello, sign in
              <br />  <span className='accounts'>Account & Lists <span className="signarrow"> <img src={arrow} alt="arrow" /></span>
              </span></p>
          </div></div>
        {isHovered && (
          <div className='allpart'>
            <button className='signin'>
              Sign in
            </button>
            <p className='customer'>New Customer ? <span className='start'>start here </span></p>


            <ul className="menu-items-2">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        )}
      </container>
      <div >
        <p className='return'>Returns
          < br /> <span className='orders' > & Orders</span> </p>
      </div>
      <div>
        <img className='buy' src={buy} alt="buy" />
      </div>
    </div>

  );
};

export default Sign;
