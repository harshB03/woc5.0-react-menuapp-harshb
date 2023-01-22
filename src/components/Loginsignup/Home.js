import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";
import './login.css'


export default function Home() {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
    <div className="container">

      <div className="p-4 box mt-3 text-center my-3">
        Hello Welcome <br />
        <b>{user && user.email}</b>
      <div className="d-grid gap-2 my-3">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
      </div>
    </div>
    </>
  )
}
