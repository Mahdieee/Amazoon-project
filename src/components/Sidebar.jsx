import React from 'react'
import hum from '../components/assets/hum.png'
function Sidebar() {
    return (
        <div className='hummenu'>
            <button className='allmenu'>
            <span ><img className='hum'src={hum} alt="hum" /></span>

                ALL
            </button>
            <button className='othermenu'>
                Today's Deals
            </button>
            <button className='othermenu'>
                Customer Service
            </button>
            <button className='othermenu'>
                Registery
            </button>
            <button className='othermenu'>
                Gift Cards
            </button>
            <button className='othermenu'>
                Sell
            </button>
        </div>
    );
};

export default Sidebar;