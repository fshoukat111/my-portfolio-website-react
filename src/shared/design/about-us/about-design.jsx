import React from 'react';
import './about-design.scss';
import profileImage from 'assets/profile.jpg'


const AboutUsDesign = () => {
    return (
        <div className='about-me-section'>
            <div className='about-me'>
                <div className="profile-section">

                    <img className='profile-img' src={profileImage} alt="" />
                </div>
                <div className="proflie-description">
                    <h2 className='about-me-title'>About Me</h2>
                    <p className="about-me-short-decription">A Frontend Engineer Based in Pakistan</p>
                    <p className="about-me-decription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className="about-me-deatail-div">
                        <div className="about-me-deatail-data">
                            <h2 className='about-me-profile-title'>Name:</h2>
                            <h2 className='about-me-heading'>Fahad</h2>
                        </div>
                        <div className="about-me-deatail-data">
                            <h2 className='about-me-profile-title'>Zip Code:</h2>
                            <h2 className='about-me-heading'>6000</h2>
                        </div>
                    </div>
                    <div className="about-me-deatail-div">
                        <div className="about-me-deatail-data">
                            <h2 className='about-me-profile-title'>Date of Birth:</h2>
                            <h2 className='about-me-heading'>30July1996</h2>
                        </div>
                        <div className="about-me-deatail-data">
                            <h2 className='about-me-profile-title'>Email:</h2>
                            <h2 className='about-me-heading'>fahad.shoukat111@gmail.com</h2>
                        </div>
                    </div>
                    <div className="about-me-deatail-div">
                        <div className="about-me-deatail-data">
                            <h2 className='about-me-profile-title'>Address:</h2>
                            <h2 className='about-me-heading'>Pakistan,Multan</h2>
                        </div>
                        <div className="about-me-deatail-data">
                            <h2 className='about-me-profile-title'>Phone:</h2>
                            <h2 className='about-me-heading'>+923332344848</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsDesign