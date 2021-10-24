import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Bannar/Banner.css'

const Bannar = () => {
    const image =['https://preview.colorlib.com/theme/medico/img/xbanner_img.png.pagespeed.ic.MLXiW6RElW.webp']
    return (
        <div>
            <Container>
              <Row>
                <Col xs={12} lg={6}>
                  <div className=' m-2 p-5'>
                     <div>
                     <h1 className='heading'>
                        <strong>
                      Bringing The Future Of Healthcare

                        </strong>
                      </h1>
                      <p>Deep created replenish herb without night fruit day earth evening Called his green were they're fruitful to over Sea bearing sixth Earth face. Them lesser great you'll second

                      </p>
                      <Link to='/Appoinment'><Button variant="outline-dark" className='btn btn-secondary text-white button'>Make An Appoinment <i class="fas fa-arrow-right"></i></Button></Link>
                     </div>
                  </div>
                </Col>
                
                <Col xs={12} lg={6}>
                    <Image src={image} fluid/>
                </Col>
              </Row>
            </Container>
            
        </div>
    );
};

export default Bannar;