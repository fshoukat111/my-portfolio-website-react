import React, { useState } from 'react';
import './header.scss';
import logoImage from 'assets/Logo.png';
import * as materialModule from 'shared/modules/material';
import Typography from '@mui/material/Typography';

const HeaderComponent = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className='header'>
            <div className='logo'>
                <img src={logoImage} alt='' />
            </div>
            {/* Hamburger Icon */}
            <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span>&#9776;</span>
            </div>
            {/* Navbar */}
            <materialModule.Box className={`navbar ${isMenuOpen ? 'open' : ''}`}>
                <materialModule.Typography sx={{ minWidth: 100 }}>Home</materialModule.Typography>
                <materialModule.Typography sx={{ minWidth: 100 }}>About</materialModule.Typography>
                <materialModule.Typography sx={{ minWidth: 100 }}>Skills</materialModule.Typography>
                <materialModule.Typography sx={{ minWidth: 100 }}>Portfolios</materialModule.Typography>
                <materialModule.Typography sx={{ minWidth: 100 }}>Contact</materialModule.Typography>
            </materialModule.Box>
        </div>
    );
};

export default HeaderComponent;
