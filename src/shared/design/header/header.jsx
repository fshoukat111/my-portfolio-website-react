import React, { useState } from 'react';
import './header.scss'
import logoImage from 'assets/Logo.png';
import * as materialModule from "shared/modules/material";
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

const HeaderComponent = () => {

    return (
        <div className='header'>
            <div className='logo'>
                <img src={logoImage} alt="" />
            </div>
            <materialModule.Box className='navbar'>
                <materialModule.Typography sx={{ minWidth: 100 }}>Home</materialModule.Typography>
                <materialModule.Typography sx={{ minWidth: 100 }}>About</materialModule.Typography>
                <materialModule.Typography sx={{ minWidth: 100 }}>Skills</materialModule.Typography>
                <materialModule.Typography sx={{ minWidth: 100 }}>Portfolios</materialModule.Typography>
                <materialModule.Typography sx={{ minWidth: 100 }}>Contact</materialModule.Typography>
            </materialModule.Box>
        </div>
    );
}

export default HeaderComponent