import React, { useState } from "react";
import {connect} from 'react-redux'
import {signup} from "./../../Redux/auth/authActions"

const SignupForm = ({signup}) => {
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  const hanldeSubmit = (e) => {
    e.preventDefault();
    signup({name,email,password})
  };
  return (
    <div>
      <form onSubmit={hanldeSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Password"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

const actions = {
    signup
}

export default connect(null,actions)(SignupForm);
