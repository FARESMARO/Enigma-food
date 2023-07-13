import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../pages/login.css";

export default function Login() {
  const [usename, setUsename] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  function handClick() {
    setLoading(true);
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: usename,
        password: password,

        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token === undefined) {
          toast.error("Invalid username or password");
        } else {
          navigate("/Home");
          console.log("hello");
        }
      })
      .finally(() => {
        setLoading(false);
        setUsename("");
        setPassword("");
      });
  }
  // username: "kminchelle",
  // password: "0lelplR",
  return (
    <div className="container">
      <div className="Login-page">
        {" "}
        <div className="card">
          <h1 className="tittel ">Login</h1>
          <div className="mx-20 ">
            <form className="input">
              <TextField
                label="Username"
                variant="outlined"
                evalue={usename}
                onChange={(e) => setUsename(e.target.value)}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                evalue={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </form>
            <div className="button">
              <Button variant="contained" onClick={handClick}>
                Login
              </Button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
