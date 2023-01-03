import React from 'react';
import '../../App.css';
import './About.css';

function About() {
    return (
        <div className='about-wrapper'>
            <div className='about-left'>
                <div className='about-left-content'>
                    <div>
                        <div className='shadow'>
                            <div className='about-img'>
                                <img src='images/img01.jpg' alt='profileImage' />
                            </div>
                        </div>
                        <h2>Sandali Disara</h2>
                        <h3>Software Engineering Student</h3>
                    </div>
                    <ul className='icons'>
                        <li><i className='fas fa-play-circle' /></li>
                        <li><i className='far fa-instagram' /></li>
                        <li><i className='fa-brands fa-instagram' /></li>
                        <li><i className='far fa-play-circle' /></li>
                    </ul>
                </div>
            </div>
            <div className='about-right'>
                <h1> Hi<span>!</span></h1>
                <h2>Here is who I am and what I do</h2>
                <div className='about-btns'>
                    <button type='button' className='btn btn-black'>Resume</button>
                    <button type='button' className='btn btn-grey'>Projects</button>
                </div>
                <div className='about-para'>
                    <p>fvdfvdfvgdfvfdbdvg</p>
                    <p>vfdgfdhgfnhfnhnhfnhgcng</p>
                </div>
            </div>
        </div>
    )
}

export default About;
