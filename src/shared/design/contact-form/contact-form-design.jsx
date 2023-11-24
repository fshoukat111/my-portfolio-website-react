import React from 'react';
import './contact-form-design.scss';
import mapImage from 'assets/map.jpg';
import facebookImage from 'assets/Facebook.png';
import instaImage from 'assets/insta.png';
import twitterImage from 'assets/twitter.png';
import linkedInImage from 'assets/LinkedIn.png';
import * as materialModule from 'shared/modules/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ContactFormDesign = () => {
    return (
        <div className="contact-form-main-section">
            <div className="form-data-section">
                <h3 className="contact-heading">Contact</h3>
                <div className="contact-form">
                    <input type="text" placeholder="Name" className="input-form" />
                    <input type="email" placeholder="Email" className="input-form" />
                    <input type="text" placeholder="Subject" className="input-form" />
                    <materialModule.TextField
                        className="text-field"
                        variant="standard"
                        placeholder="Message"
                        InputProps={{
                            disableUnderline: true,
                        }}
                    ></materialModule.TextField>
                    <div className="social-icons">
                        <materialModule.Button variant="contained" className="short-description-button">
                            Submit
                        </materialModule.Button>
                        <ArrowForwardIcon className="btn-arrow-icon" />
                        <img src={instaImage} alt="" className="social-icon-img" />
                        <img src={twitterImage} alt="" className="social-icon-img" />
                        <img src={facebookImage} alt="" className="social-icon-img" />
                        <img src={linkedInImage} alt="" className="social-icon-img" />
                    </div>
                </div>
            </div>
            <div className="map-image-section">
                <img src={mapImage} alt="" className="map-image" />
            </div>
        </div>
    );
};

export default ContactFormDesign;
