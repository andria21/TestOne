import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection(props) {
    return (
        <div className="hero-container">
            <video src="/videos/altezza.mp4" autoPlay loop muted />
            <h1>BLACKHOLEGARAGE</h1>
            <p>Ride Awaits!</p>
            <div className="hero-btns">
                <Button 
                className="btns" 
                buttonStyle="btn--outline" 
                buttonSize="btn--large">
                    Get Started
                </Button>
                <Button 
                className="btns" 
                buttonStyle="btn--primary" 
                buttonSize="btn--large">
                    WATCH TRAILER <i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;