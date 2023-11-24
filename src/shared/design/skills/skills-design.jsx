import React from 'react'
import './skills-design.scss';
import * as materialModule from "shared/modules/material";
import placeholderImage from 'assets/place-holder.png'

const SkillDesign = () => {
    return (
        <div className="skills-main-section">
            <h2 className="skills-heading">Skills</h2>
            <div className="skills-child-section">
                <materialModule.Card className="skill-card">
                    <materialModule.CardActionArea>
                        <materialModule.CardContent className="skill-card-description">
                            <materialModule.Typography className="icon-div">
                                <img src={placeholderImage} alt="" />
                            </materialModule.Typography>
                            <materialModule.Typography className="description-div">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </materialModule.Typography>
                        </materialModule.CardContent>
                    </materialModule.CardActionArea>
                </materialModule.Card>
                <materialModule.Card className="skill-card">
                    <materialModule.CardActionArea>
                        <materialModule.CardContent className="skill-card-description">
                            <materialModule.Typography gutterBottom variant="h5" component="div" className="icon-div">
                                <img src={placeholderImage} alt="" />
                            </materialModule.Typography>
                            <materialModule.Typography className="description-div">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </materialModule.Typography>
                        </materialModule.CardContent>
                    </materialModule.CardActionArea>
                </materialModule.Card>
                <materialModule.Card className="skill-card">
                    <materialModule.CardActionArea>
                        <materialModule.CardContent className="skill-card-description">
                            <materialModule.Typography gutterBottom variant="h5" component="div" className="icon-div">
                                <img src={placeholderImage} alt="" />
                            </materialModule.Typography>
                            <materialModule.Typography className="description-div">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </materialModule.Typography>
                        </materialModule.CardContent>
                    </materialModule.CardActionArea>
                </materialModule.Card>
                <materialModule.Card className="skill-card">
                    <materialModule.CardActionArea>
                        <materialModule.CardContent className="skill-card-description">
                            <materialModule.Typography gutterBottom variant="h5" component="div" className="icon-div">
                                <img src={placeholderImage} alt="" />
                            </materialModule.Typography>
                            <materialModule.Typography className="description-div">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </materialModule.Typography>
                        </materialModule.CardContent>
                    </materialModule.CardActionArea>
                </materialModule.Card>
            </div>
        </div>
    )
}

export default SkillDesign