import React from 'react';
import {Button, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../Data/Data.css'

const Data = (props) => {
    const{id,name,doctors,image,ratings} = props.card;

    return (
      
        <div className='data w-75 mx-auto h-75 my-5 p-3'>
            
      <div>
      <Image src={image} fluid/>
      <h1>Name: {name}</h1>
      <h2>Doctors: {doctors}</h2>
      <h4>Ratings: {ratings}</h4>
      <Link to={`/ServiceDetail/${id}`}><Button className='btn btn-secondary'>See More</Button></Link>
      </div>
      
        </div>
        
    );
};

export default Data;