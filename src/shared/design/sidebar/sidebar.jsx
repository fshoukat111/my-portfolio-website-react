import React from 'react';
import './sidebar.scss'

const Sidebar = () => {
    return (
        <div className="main-sidebar">
            <br />
            <div className="img-section">
                <img src='' />
                <br />
                <br />
                <h4 className="heading-h4">
                    <b>Porfolio</b>
                </h4>
            </div>
            <div className="navbar-section">
                <a href="" className="nav-item">
                    Porfolio
                </a>
                <a href="" className="nav-item">
                   About Me
                </a>
                <a href="" className="nav-item">
                    Contact
                </a>
            </div>
            <div className="social-icon-section">

            </div>
        </div>
    )
}

export default Sidebar