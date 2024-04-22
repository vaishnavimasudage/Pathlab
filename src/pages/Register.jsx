import React, { useState  } from "react";
import { Form,Input,message } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Spinner from "../Components/Spinner";
import '../pages/Register.css';




/*export default function Register() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [responseData, setResponseData] = useState({});

  function handleInput(event) {
    let name = event.target.name;
    let value = event.target.value;
    setUserData((userData) => {
      userData[name] = value;
      return { ...userData }; // Use spread operator to create a new object
    });
  }

  function register(event) {
    event.preventDefault();
    console.log(userData);
    let url = `http://localhost:8080/register`;
    axios.post(url, userData).then((response) => {
      console.log(response.data);
      setResponseData(response.data);
      if (response.data.status) {
        alert("Done!");
        navigate("/login");
      } else {
        alert("Not done!");
      }
    });
  }

  return (
    <div className="login">
      {/* { <h1>{responseData.customerId}</h1> } */
      /*<form onSubmit={register}>
        <h1>REGISTER</h1>
        Name :{" "}
        <input type="text" name="name" onChange={handleInput} /> <br />
        Email :{" "}
        <input type="email" name="email" onChange={handleInput} /> <br />
        Password :{" "}
        <input type="password" name="password" onChange={handleInput} /> <br />
        Age : <input type="number" name="age" onChange={handleInput} /> <br />
        City : <input type="text" name="city" onChange={handleInput} /> <br />
        Number : <input type="tel" name="number" onChange={handleInput} /> <br />
        <button type="submit">Register</button>
        <div className="d-flex justify-content-between">
          <Link to="/login">Already Register ? Click here to login</Link>
          <br />
          <br />
        </div>
      </form>
    </div>
  );
}*/


export default function Register() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [responseData, setResponseData] = useState({});

  function handleInput(event) {
    let name = event.target.name;
    let value = event.target.value;
    setUserData((userData) => {
      userData[name] = value;
      return { ...userData }; // Use spread operator to create a new object
    });
  }

  function register(event) {
    event.preventDefault();
    console.log(userData);
    let url = `http://localhost:8080/register`;
    axios.post(url, userData).then((response) => {
      console.log(response.data);
      setResponseData(response.data);
      if (response.data.status) {
        alert("Done!");
        navigate("/login");
      } else {
        alert("Not done!");
      }
    });
  }

  return (
    <div className="login">
      {/* { <h1>{responseData.customerId}</h1> } */}
      <form onSubmit={register}>
        <h1>REGISTER</h1>
        Name: <input type="text" name="name" onChange={handleInput} /> <br />
        Email: <input type="email" name="email" onChange={handleInput} /> <br />
        Password: <input type="password" name="password" onChange={handleInput} /> <br />
        Age: <input type="number" name="age" onChange={handleInput} /> <br />
        City: <input type="text" name="city" onChange={handleInput} /> <br />
        Number: <input type="tel" name="number" onChange={handleInput} /> <br />
        Report <input type="text" name="test" onChange={handleInput} /> <br />
        <button type="submit">Register</button>
        <div className="d-flex justify-content-between">
          <Link to="/login">Already Registered? Click here to login</Link>
          <br />
          <br />
        </div>
      </form>
    </div>
  );
}






