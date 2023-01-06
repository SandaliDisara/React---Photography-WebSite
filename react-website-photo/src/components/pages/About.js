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
                        <li><a href="https://www.instagram.com/sandali_disara/" target="_blank"><i className='fa-brands fa-instagram' /></a></li>
                        <li><a href="https://www.linkedin.com/in/sandali-dissanayake-61b602203/" target="_blank"><i class="fa-brands fa-linkedin"/></a></li>
                        <li><a href="https://github.com/SandaliDisara" target="_blank"><i class="fa-brands fa-github"/></a></li>
                        <li><a href="https://www.youtube.com/channel/UC4ckfsmDTSWaeEoK_NuV2rA" target="_blank"><i class="fa-brands fa-youtube"/></a></li>
                        
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
                    <p>I am a 3rd year Software Engineering Student currently doing my studies at SLIIT.</p>
                    <p>Photography and videography has always been my hobby since a very younge age.
                        <br/>Feel free to go through my image gallery and the video compilations on my<br/> Youtube channel.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;
