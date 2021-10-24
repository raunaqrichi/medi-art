import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import '../AboutUs/AboutUs.css';
import About2 from '../About2/About2';

const AboutUs = () => {
    const img = ['https://preview.colorlib.com/theme/medisen/img/xability_img.png.pagespeed.ic.SVqrAnbbFL.webp'];
    return (
        <div className='my-5'>
            <Container>
  <Row>
    <Col xs={12} lg={6}>
    
    <Image src={img} alt='' fluid/>

    </Col>
    <Col xs={12} lg={6}>
    <div className='my-5'>
        <h1 className='title'>Our Patients Are at the Centre of Everything We Do</h1>
        <p>Kind lesser bring said midst they're created signs made the beginni years created Beast upon whales herb seas evening she'd day green dominion evening in moved have fifth in won't in darkness fruitful god behold whos without bring created creature.</p>
    </div>
    <div className='d-flex p-2'>
        <div className='m-3'><p><h1><i class="fas fa-laptop-medical text-primary"></i></h1> Modern Technology</p></div>
        <div className='m-3'><p><h1><i class="fas fa-globe text-primary"></i></h1> Worldclass Facilities</p></div>
    </div>
    <div className='d-flex p-2'>
    <div className='m-3'><p><h1><i class="fas fa-user-nurse text-primary"></i></h1> Experienced Nurse</p></div>
        <div className='m-3'><p><h1><i class="fas fa-headset text-primary"></i></h1> 24 Hours Support</p></div>
    </div>
    </Col>
  </Row>
  
</Container>
<About2></About2>
        </div>
    );
};

export default AboutUs;