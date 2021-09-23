import React from 'react';
import avatar1 from '../assets/avatar1.png';

export const ImageSection = () => {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={avatar1} alt="about" />
            </div>

            <div className="about-info">
                <h4>I am<span> Lorem ipsum</span></h4>
                <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illo optio corporis enim. Deserunt quisquam sed eveniet obcaecati incidunt harum sequi laborum possimus iusto. Libero mollitia error ea vel illum.Bcaecati incidunt harum sequi laborum</p>

                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                    </div>
                    <div className="right-section">
                        <p>: Magali Gaiani</p>
                        <p>: 27</p>
                        <p>: Argentina</p>
                        <p>: Spanish</p>
                    </div>
                </div>

                <button className="btn">
                    Download CV
                </button>
            </div>
        </div>
    )
}
