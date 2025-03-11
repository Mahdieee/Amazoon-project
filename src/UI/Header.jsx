import React from 'react';
import icon from '../components/assets/icon.png'
import location from '../components/assets/location.png'
import Search from '../components/Search'
import Language from '../components/Language'
import Sign from '../components/Sign'
import Return from '../components/Return';
import Sidebar from '../components/Sidebar';
import Background from '../components/Background'



function Header() {
    return (
        <div>
            <header className='header' >
                <div className='section'>
                    <img className='icon' src={icon} alt="Icon" />
                    <img className='location' src={location} alt="location" />
                    <p className='p'>Deliver to iran</p>

                    <Search />
                    <Language />
                    <Sign />
                    <Return />
                    <Sidebar />
                    <Background />


                </div>
            </header>
        </div>
    );
}

export default Header;
