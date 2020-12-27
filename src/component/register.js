import axios from "axios";
import React,{useState} from "react";
import { Form, FormGroup, Button, Input, Label } from "reactstrap";
const Register = () => {
    const [post,setPosted]=useState({email:"",password:""});
    
    const onEmailchange=e=>{
        setPosted({...post,email:e.target.value})
    }
    const onPasschange=e=>{
        setPosted({...post,password:e.target.value})
  }
  const onsubmit=e=>{
    e.preventDefault();
    const data={email:post.email,password:post.password};
    axios.post('http://88.198.119.158:8080/employees/emailLogin',data).then((res)=>{
        console.log(res);
    })
}
   


  return (
    <div>
      <Form onSubmit={onsubmit}>
        <FormGroup className="">
          <Label className="">Email</Label>
          <Input
            className=""
            onChange={onEmailchange}
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={post.email}
          ></Input>
        </FormGroup>
        <FormGroup className="">
          <Label className="">Password</Label>
          <Input
            className=""
            type="password"
            onChange={onPasschange}
            name="password"
            value={post.password}
            placeholder="Enter Your Password"
          ></Input>
        </FormGroup>
        <Button className="">Submit</Button>
      </Form>
    </div>
  );
};
export default Register;
