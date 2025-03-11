import React, { useState } from 'react'
import arrow from './assets/arrow.svg'
import searchsvg from './assets/searchsvg.svg'

function Search() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    };
    return (
        <div className='form'>
            <div className="dropdwon">
                <button className='allbutton' onClick={handleOpen}>All
                    <span> <img src={arrow} alt="arrow" /></span></button>
                {open ? (
                    <ul className='menu'>
                        <li className='menu-item'>
                            <button>All</button>
                        </li>
                        <li className='menu-item'>
                            <button>Mobiles</button>
                        </li>
                        <li className='menu-item'>
                            <button>Laptops</button>
                        </li>
                        <li className='menu-item'>
                            <button>Mobile Accessories</button>
                        </li>
                    </ul>
                ) : null}
                {/* {open ? <div> Is Open </div> : <div> Is Closed </div>} */}
            </div>
            <form className='searchbox' action="">
                <input className='input' type="search" placeholder='Search Amazon' />
                <button className='search'>
                    <img className='searchpic' src={searchsvg} alt="searchsvg" />
                </button>
            </form>
        </div>
    );
};

export default Search;