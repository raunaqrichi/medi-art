import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Service = (props) => {
    const{id,name,doctors,image,ratings,details} = props.service;
    return (
        <div className='data w-75 mx-auto h-75 my-5 p-3'>
            <Image src={image} fluid/>
      <h1>Name: {name}</h1>
      <h2>Doctors: {doctors}</h2>
      <h3>Rating: {ratings}</h3>
      <p>{details}</p>
      <Link to={`/ServiceDetail/${id}`}><Button className='btn btn-secondary'>See More</Button></Link>
        </div>
    );
};

export default Service;