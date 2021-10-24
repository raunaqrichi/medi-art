import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from './Components/AboutUs/AboutUs';
import Appoinment from './Components/Appointment/Appoinment';
import Contact from './Components/Contact/Contact';
import initializeAuthentication from './Firebase/firebase.initialize';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';



initializeAuthentication();
function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route exact path='/Home'>
        <Home></Home>
        </Route>
        <PrivateRoute exact path='/Services'>
        <Services></Services>
        </PrivateRoute>
        <PrivateRoute exact path='/ServiceDetail/:Id'>
        <ServiceDetail></ServiceDetail>
        </PrivateRoute>
        <Route exact path='/About-Us'>
        <AboutUs></AboutUs>
        </Route>
        <PrivateRoute exact path='/Appoinment'>
        <Appoinment></Appoinment>
        </PrivateRoute>
        <Route exact path='/Contact'>
        <Contact></Contact>
        </Route>
        <Route exact path='/Register'>
        <Register></Register>
        </Route>
        <Route exact path='*'>
        <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </Router>
      
      
      
     
      </AuthProvider>
    </div>
  );
}

export default App;
