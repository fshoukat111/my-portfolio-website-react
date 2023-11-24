import React, { useState, useEffect } from 'react';
import './slider.scss';
import firstImage from 'assets/main-image.jpeg'
import HeaderComponent from '../header/header';
import * as materialModule from "shared/modules/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AboutUsDesign from '../about-us/about-design';
import SkillDesign from '../skills/skills-design';
import ProjectDesign from '../projects/project-design';
import ContactFormDesign from '../contact-form/contact-form-design';

const Slider = () => {
    // const initialImages = [firstImage, secondImage];
    // const [images, setImages] = useState(initialImages);
    // const [currentIndex, setCurrentIndex] = useState(0);

    // const nextImage = () => {
    //     const newIndex = (currentIndex + 1) % images.length;
    //     setCurrentIndex(newIndex);
    // };

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         nextImage();
    //     }, 3000);
    //     return () => clearInterval(intervalId);
    // }, [currentIndex]);

    return (
        <div className="slideshow">
            <div className='backgroundImage' style={{ backgroundImage: `url(${firstImage})` }}>
                <HeaderComponent />
                <div className="short-description">
                    <div>
                        <h5 className='skill-title'>Frontend Engineer</h5>
                        <h1 className='name-title'>Hello I’m Fahad Shoukat</h1>
                        <div className='button-div'>
                            <materialModule.Button variant="contained" className='short-description-button'>About Me</materialModule.Button>
                            <ArrowForwardIcon className='arrow-icon' />
                            <materialModule.Button variant="contained" className='short-description-button'>Hire Me</materialModule.Button>
                            <ArrowForwardIcon className='arrow-icon' />
                        </div>
                    </div>
                </div>
            </div>
            <AboutUsDesign />
            <SkillDesign />
            <ProjectDesign />
            <ContactFormDesign />
        </div >
    );
};

export default Slider;
