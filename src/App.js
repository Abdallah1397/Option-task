import React, { useState } from "react";
import "./component/login.css";
import "./App.css";
import Login from "./component/login";
import Home from './component/home'
import './component/home.css'
import Register, {register} from './component/register'

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "password",
  };
  const [user, SetUser] = useState({ email: "" });
  const [error, setError] = useState("");
  const login = (detail) => {
    if (
      detail.email == adminUser.email &&
      detail.password == adminUser.password
    ) {
      SetUser({ email: detail.email });
      setError("")
    } else {
      setError("Email or Password is Wrong")
    }
  };
  const logout = () => {
    console.log("Logout");
    SetUser({email:""});
  };
  return (
    <div className="App">
      {user.email != "" ? <div>
        <Home user={user.email} log={logout} />
      </div> : 
      <div><Login login={login} error={error} />
      </div>}
    </div>
  );
}

export default App;
