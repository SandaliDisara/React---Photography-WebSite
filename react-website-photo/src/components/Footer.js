import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <seciton className='footer_subscription'>
                <p className='footer_subscription-heading'>
                    Join the Adventure newsletter to receive our best vacation deals
                </p>

            </seciton>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Me</h2>
                        <Link to='/sign-up'></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
