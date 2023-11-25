import React, { useState } from 'react';
import './header.scss';
import logoImage from 'assets/Logo.png';
import * as materialModule from 'shared/modules/material';
import DangerousIcon from '@mui/icons-material/Dangerous';
import useMediaQuery from '@mui/material/useMediaQuery';

const HeaderComponent = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:650px)');

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className='header'>
            <div className='logo'>
                <img src={logoImage} alt='' />
            </div>
            <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span>&#9776;</span>
            </div>
            {/* Responsive Sidebar */}
            {isMobile && (
                <materialModule.Drawer
                    anchor="right"
                    open={isMenuOpen}
                    onClose={closeMenu}
                    className="sidebar-drawer"
                >
                    <materialModule.Box className='sidebar'>
                        <DangerousIcon className='close-drawer' onClick={closeMenu} />
                        <materialModule.Typography sx={{ minWidth: 100 }} className="nav-item">Home</materialModule.Typography>
                        <materialModule.Typography sx={{ minWidth: 100 }} className="nav-item">About</materialModule.Typography>
                        <materialModule.Typography sx={{ minWidth: 100 }} className="nav-item">Skills</materialModule.Typography>
                        <materialModule.Typography sx={{ minWidth: 100 }} className="nav-item">Portfolios</materialModule.Typography>
                        <materialModule.Typography sx={{ minWidth: 100 }} className="nav-item">Contact</materialModule.Typography>
                    </materialModule.Box>
                </materialModule.Drawer>
            )}
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
