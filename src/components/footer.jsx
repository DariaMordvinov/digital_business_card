import React from 'react';
import InstagramIcon from "../images/InstagramIcon.png";
import GitHubIcon from "../images/GitHubIcon.png";
import FacebookIcon from "../images/FacebookIcon.png";
import TwitterIcon from "../images/TwitterIcon.png";

export default function Footer() {
    return (
        <div className='footer'>
            <img className='icon' alt="Twitter icon" src={TwitterIcon} />
            <img className='icon' alt="Facebook icon" src={FacebookIcon} />
            <img className="icon" alt="Instagram icon" src={InstagramIcon} />
            <img className='icon' alt="Github icon" src={GitHubIcon} />
        </div>
    )
}