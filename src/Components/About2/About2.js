import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import '../About2/About2.css'

const About2 = () => {
    const img = ['https://preview.colorlib.com/theme/medisen/img/xtop_service.png.pagespeed.ic.Sm2VeVkzSI.webp']
    return (
        <div>
            <div className='my-5'>
            <Container>
  <Row>
   
    <Col xs={12} lg={6}>
    <div className='my-5'>
        
        <h1 className='line1'>Health Care Access</h1>
        <p>Health care access looks at adults and children who go without medical and dental care, including because of the cost.</p>
        <h1 className='line1'>Health Care Quality</h1>
        <p>Health care quality tracks preventable hospital admissions, Medicare plan ratings and the quality of nursing homes and hospitals.</p>
        <h1 className='line1'>Public Health</h1>
        <p>The public health ranking measures rates of obesity, smoking, suicide, mental health and mortality for adults and infants.</p>
    </div>
    </Col>
    <Col xs={12} lg={6}>
    <Image src={img} fluid/>
    </Col>
  </Row>
  
</Container>
</div>
</div>
    );
};

export default About2;