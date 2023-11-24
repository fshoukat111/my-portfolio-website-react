import React from 'react';
import './project-design.scss';
import projectOneImage from 'assets/projectOne.jpg'
import projectTwoImage from 'assets/projectTwo.jpg'
import projectThreeImage from 'assets/projectThree.jpg'

const ProjectDesign = () => {
    return (
        <div className='project-main-section'>
            <h2 className='project-heading'>Portfolio</h2>
            <div className="project-chlid-section">
                {/* <div> */}
                    <img src={projectOneImage} alt="" className="project-image" />
                {/* </div> */}
                {/* <div> */}
                    <img src={projectTwoImage} alt="" className="project-image" />
                {/* </div> */}
                {/* <div> */}
                    <img src={projectThreeImage} alt="" className="project-image" />
                {/* </div> */}
            </div>
        </div>
    )
}

export default ProjectDesign