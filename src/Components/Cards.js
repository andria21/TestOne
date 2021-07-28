import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards(props) {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="images/altezza-2.png"
                            text="Jiji's Saswauli Altezza 'Moxodaa Dzliivss...'"
                            label="Luxury"
                            path="/services"
                        />
                        <CardItem 
                            src="images/altezza-1.jpg"
                            text="Nikos Bandzi Alteza :( ! 'Raver Moxoda...'"
                            label="Poor"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src="images/altezza-2.png"
                            text="Jiji's Saswauli Altezza 'Moxodaa Dzliivss...'"
                            label="Luxury"
                            path="/services"
                        />
                        <CardItem 
                            src="images/altezza-1.jpg"
                            text="Nikos Bandzi Alteza :( ! 'Raver Moxoda...'"
                            label="Poor"
                            path="/services"
                        />
                        <CardItem 
                            src="images/altezza-2.png"
                            text="Jiji's Saswauli Altezza 'Moxodaa Dzliivss...'"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;