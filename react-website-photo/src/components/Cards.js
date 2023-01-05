import React from 'react';
import CardItem from './CardItem';
import './Cards.css';



function Cards() {
    return (
        <div className='cards'>
            <h1>Check the latest Vlogs</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src="images/Weerawila.PNG"
                            text="Weerawila, Sri Lanka"
                            label="Youtube"
                            path="/services" />
                        <CardItem
                            src="images/yala.jpg"
                            text="Yala, Sri Lanka"
                            label="Youtube"
                            path="/services" />


                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src="images/rathnapura.PNG"
                            text="Rathnapura, Sri Lanka"
                            label="Youtube"
                            path="/services" />
                        <CardItem
                            src="images/kilinochchi.PNG"
                            text="Kilinochchi, Sri Lanka"
                            label="Youtube"
                            path="/services" />
                        <CardItem
                            src="images/south.PNG"
                            text="Explore the waterfall in the amazon"
                            label="Adventure"
                            path="/services" />


                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default Cards
