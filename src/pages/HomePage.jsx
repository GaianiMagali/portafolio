import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export const HomePage = () => {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> Lorem ipsun.</span>
                </h1>
                <p className="h-sub-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis ipsa ipsam totam qui! Ducimus nisi excepturi accusantium ea maiores? Aliquam nostrum fuga fugiat mollitia, enim sapiente omnis sequi consequatur</p>

                <div className="icons">
                    <Link className="icon-holder"><FontAwesomeIcon icon={faFacebook} className="icon fb"/></Link>
                    <Link className="icon-holder"><FontAwesomeIcon icon={faGithub} className="icon gh"/></Link>
                    <Link className="icon-holder"><FontAwesomeIcon icon={faYoutube} className="icon yt"/></Link>
                </div>
            </header>
        </div>
    )
}
