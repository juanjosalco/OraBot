import React, { useEffect, useState } from "react";
import "../Styles/Login.css";
import { Header } from "../../GlobalComponents/Header";
import { useNavigate } from "react-router-dom";
import {
  emailRegex,
  passwordRegex,
} from "../../GlobalComponents/Utils/RegexUtils";
import { useUser } from "../../../hooks/useUser";
import { decodeJwt } from "../../GlobalComponents/Utils/Jwt";
import { login } from "../../../api/AuthAPI";

export const LoginScreen = () => {
  const { userData, saveUserData } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [role, setRole] = useState("Developer");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const validateCredentials = () => {
    if (username.trim() === "" || password.trim() === "") {
      setError("Please enter both username and password.");
      return false;
    } else if (!emailRegex.test(username)) {
      setError("Please enter a valid email address.");
      return false;
    } else if (!passwordRegex.test(password)) {
      setError("Please enter a valid password.");
      return false;
    }

    return true;
  };

  const handleLogin = async () => {
    const response = await login(username, password);
    if (response.error) {
      setError(response.error);
    } else {
      const { token } = response;
      setToken(response.token);

      const decodedToken = decodeJwt(token);

      saveUserData({
        token: token,
        UID: decodedToken.id,
        team_id: decodedToken.team,
        role: decodedToken.role,
      });

      // Use jwt
      setRole(decodedToken.role);

      if (1) {
        if (role === "Developer") {
          navigate("/dashboard", { state: { isDeveloper: true } });
        } else if (role === "Manager") {
          navigate("/dashboard", { state: { isDeveloper: false } });
        }
      }
    
    }
  };

  const handleRecover = () => {
    navigate("/recover");
  };

  return (
    <>
      <Header back={false} />
      <div className="container">
        <h1>Welcome to OraBot!</h1>
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Username"
            className="inputs"
            value={username}
            onChange={handleUsername}
          />
          <input
            type="password"
            placeholder="Password"
            className="inputs"
            value={password}
            onChange={handlePassword}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button className="btnX" onClick={handleLogin}>
          Log in
        </button>
        <button className="questionBtn" onClick={handleRecover}>
          Forgot username or password?
        </button>
      </div>
    </>
  );
};
