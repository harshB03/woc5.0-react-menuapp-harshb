import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Loginsignup/Home";
import Login from "./components/Loginsignup/Login";
import Signup from "./components/Loginsignup/Signup";
import Menu from "./components/FoodItem/Menu";
import About from "./components/About/about";
// import ForgotPassword from "./components/Loginsignup/ForgotPassword";
import { UserAuthContextProvider } from "./context/UserAuthContext";

import { AuthProvider } from "./context/AuthContext"

import Navbar from "./components/Navbar/Navbar"
import Welcome from "./components/Welcome";
function App() {
  return (
    <>

      <Router> 
        <Navbar />
              <UserAuthContextProvider>
              <Routes >
              <Route path="/" element={  <Welcome/>}/>
              {/* <PrivateRoute exact path="/" element={<Dashboard/>} /> */}
              {/* <PrivateRoute path="/update-profile" element={<UpdateProfile/>} /> */}

              {/* <Route path="/cart" element={  <Cart/>}/> */}
              <Route path="/menu" element={ <Menu />}/>
              <Route path="/about" element={ <About/>}/>
              <Route path="/login" element={ <Login/>}/>
              <Route path="/signup" element={ <Signup/>}/>
              </Routes>
              </UserAuthContextProvider>
      </Router>
    </>
  );
}

export default App;
