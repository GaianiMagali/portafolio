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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illo optio corporis enim. Deserunt quisquam sed eveniet obcaecati incidunt harum sequi laborum possimus iusto. Libero mollitia error ea vel illum.Bcaecati incidunt harum sequi laborum</p>

                <div className="about-details">
                    <div className="details">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
