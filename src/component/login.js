import React,{useState} from "react";
import { Form, FormGroup, Button, Input, Label } from "reactstrap";


const Login = ({login , error}) => {
  const [detail,setDetail]=useState({email:"",password:""});
  const onsubmit= e=>{
      e.preventDefault();
      login(detail);
  }
  const onEmailchange=e=>{
      setDetail({...detail,email:e.target.value})
  }
  const onPasschange=e=>{
    setDetail({...detail,password:e.target.value})
}
  return (
    <div className="login">
      <div className="container">
    <Form className="mainLogin" onSubmit={onsubmit}>
      {(error !="")?
      (<div className="error">
        {error}
      </div>)
      :""
      }
      <FormGroup className="labelForm">
        <Label className="Llabel">Email</Label>
        <Input className="Iinput" onChange={onEmailchange} value={detail.email} type="email" placeholder="Enter Your Email"></Input>
      </FormGroup>
      <FormGroup className="passForm">
        <Label className="pssLabel">Password</Label>
        <Input className="pssInput"type="password" onChange={onPasschange} value={detail.password} placeholder="Enter Your Password"></Input>
      </FormGroup>
      <Button className="btn">Login</Button>
    </Form>
      </div>
    </div>
  );
};
export default Login;
