import React, { useEffect, useState } from 'react';
import Bannar from '../Bannar/Bannar';
import OpeningHours from '../OpeningHours/OpeningHours'
import Data from '../Data/Data';
import About2 from '../About2/About2';


const Home = () => {
    const [cards, setCards] = useState([]);
    useEffect(() =>{
        fetch('./Data.JSON')
        .then(res => res.json())
        .then (data => setCards(data.slice(0,6)))
    } ,[])

    return (
        <div>
            <Bannar></Bannar>
            <div>
            <p className='line'>Some Of Our Services</p>
            </div>
           <div className='container'>
           {
               cards.map(card => <Data key={card.id} card={card}></Data> )
           }
           </div>
           <OpeningHours></OpeningHours>
           <About2></About2>
        </div>
    );
};

export default Home;