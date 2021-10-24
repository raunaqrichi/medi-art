import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('./Data.JSON')
        .then(res => res.json())
        .then (data => setServices(data))
    } ,[])
    return (
        <div>
            <div>
            <p className='line'>All Of Our Services</p>
            </div>
           <div className='container'>
           {
               services.map(service => <Service key={service.id} service={service}></Service> )
           }
           </div>
        </div>
    );
};

export default Services;