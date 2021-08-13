import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import fire from "../../firebase/fire";
import HomePage from "../HomePage/HomePage";
import Login from "./Login";

const Auth = () => {
  const { user } = useAuth();

  return (
    <div className='Auth'>
      {user ? (
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Auth;
