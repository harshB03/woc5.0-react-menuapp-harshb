import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import { useUserAuth } from "../../context/UserAuthContext";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import './login.css'


export default function Signup() {
  const  [userData,setUserData]= useState({
    name:"",
    phone:"",
    address:"",
    email:"",
    password:""

  });
  let name,value;
  const postUserData =(event)=> {
    name=event.target.name;
    value = event.target.value;
    setUserData({...userData,[name]:value})
  }
  // const [name,setName] = useState("");
  // const [number,setPhone] = useState("");
  // const [email, setEmail] = useState("");
  // // const [address,setAddress] = useState("");
  const [error, setError] = useState("");
  // const [password, setPassword] = useState("");
  // const { signUp } = useUserAuth();
  let navigate = useNavigate();
  
  // const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setError("");
  //     try {
  //         await signUp(email, password);
  //         navigate("/login");
  //       } catch (err) {
  //           setError(err.message);
  //         }
  //       };
    const submitData = async (event)=>{
         event.preventDefault();
         const {name,phone,address,email,password} = userData;
         if(name && phone && address && email && password){

         
         const res = fetch('https://menu-1df76-default-rtdb.firebaseio.com/userDataRecord.json',
         {
         method:"POST",
         headers:{
          "Content-Type":"application/json"},
         body:JSON.stringify({
          name,phone,address,email,password
         }),
        }
         );
         if(res){
          setUserData({
            name:"",
            phone:"",
            address:"",
            email:"",
            password:""
          })
          alert("User Registered Successfully")
          navigate("/login");
         }
        }
         else{
          // setError(error.message);
          alert("Please fill the complete details")
         }
        }
        // const handleSubmit = async (e) => {
        //   e.preventDefault();
        //   setError("");
        //   try {
        //     await signUp(name,phone,address,email, password);
        //     navigate("/login");
        //   } catch (err) {
        //   }
  return (
    <>
    <div className="container my-4">

      <div className="p-4 box">
        <h2 className="mb-3">SignUp and Join with us</h2>
        {error && <Alert variant="danger">{error}</Alert>}
          <form method="post" >
            <Form.Group className="mb-3" controlId="formName">
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={userData.name}
                onChange={postUserData}
              />
            </Form.Group> 
             <Form.Group className="mb-3" controlId="formNumber">
              <Form.Control
                type="tel"
                placeholder="Contact"
                name="phone"
                value={userData.phone}
                onChange={postUserData}
              /> 
               </Form.Group> 
               <Form.Group className="mb-3" controlId="formAddress">
              <Form.Control
                type="textarea"
                placeholder="Address"
                name="address"
                value={userData.address}
                onChange={postUserData}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                name="email"
                value={userData.email}
                onChange={postUserData}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={userData.password}
                onChange={postUserData}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button onClick={submitData} variant="primary" type="Submit">
                Sign up
              </Button>
            </div>
            <div className="p-4 box mt-3 text-center">
              Already have an account? <Link to="/login">Log In</Link>
            </div>
        </form>
      </div>
    </div>
    </>
  )
}
