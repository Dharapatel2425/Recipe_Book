import React from 'react';

function Footer(props) {
    return (
        <div className='footer container'>
            <div className='footer-section'>
                <p className='title'>RecipeBook.com</p>
                <p>RecipeBook is a place where you can please your soul and
                    tummy with delicious food recipes of all cuisine.
                    And our service is absolutely free.So start exploring now.</p>
                <p>&copy; 2019| All Rights Reserved</p>
            </div>
            <div className='footer-section'>
                <p className='title'>Contact Us</p>
                <p>dhara.pipaliya25@gmail.com</p>
                <p>0123-345-456</p>
                <p>23, Sanday Bay</p>

            </div>
            <div className='footer-section'>
                <p className='title'>Socials</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
            
        </div>
    );
}

export default Footer;