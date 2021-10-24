import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import '../Header/Header.css'


const Header = () => {
  const {user, logOut} = useAuth();
  console.log(user)
    
    return (
        <div>
           <div >
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container >
  <Navbar.Brand><i className="fas fa-book-medical"></i> Medi-Art</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" >
    <Nav className="me-auto">
    <Nav.Link><NavLink
  to="/Home"
  activeStyle={{
    fontWeight: "bold",
    color: "gray"
  }}
>
Home
</NavLink></Nav.Link>
<Nav.Link><NavLink
  to="/Services"
  activeStyle={{
    fontWeight: "bold",
    color: "gray"
  }}
>
Services
</NavLink></Nav.Link>
<Nav.Link><NavLink
  to="/About-Us"
  activeStyle={{
    fontWeight: "bold",
    color: "gray"
  }}
>
About-us
</NavLink></Nav.Link>
<Nav.Link><NavLink
  to="/Appoinment"
  activeStyle={{
    fontWeight: "bold",
    color: "gray"
  }}
>
Appointment
</NavLink> </Nav.Link>
<Nav.Link><NavLink
  to="/Contact"
  activeStyle={{
    fontWeight: "bold",
    color: "gray"
  }}
>
Contact
</NavLink> </Nav.Link>
    </Nav>
    <Nav>
<span style={{color:'white'}}> {user.displayName}</span>
{
  user.email?
  <button onClick={logOut} className='btn btn-dark text-white'><i className="far fa-user"></i> Logout</button>
  :
  <Nav.Link eventKey={2}>
      <NavLink
  to="/Register"
  activeStyle={{
    fontWeight: "bold",
    color: "gray"
  }}
>
<i className="far fa-user"></i> Login 
</NavLink>
      </Nav.Link>
}
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
           
           
            </div>
            
            
            
      </div>
        
    );
};

export default Header; 