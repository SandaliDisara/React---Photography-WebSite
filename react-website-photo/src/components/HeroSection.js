import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../App.css';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/videoHero.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Link to="/photos">
                <Button className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                    IMAGE GALLERY  

                </Button>
                </Link>
                <a href="https://youtube.com/playlist?list=PLkCIhGtlzgLEISk13z_uAs3pXMykCH7RY" target="_blank">
                <Button className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    WATCH VLOGS <i className='far fa-play-circle' />

                </Button>
                </a>
                
            </div>

        </div>
    )
}

export default HeroSection;
