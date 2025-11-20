import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./Signup.css"
export default function Signup(){
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [phone, setphone] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const Handlebtn = (e) => {
    const existingEmail = "amirkhan46509@gmail.com";
    const emailPattren=/^[A-Za-z0-9.+-]+@[a-zA-Z0-9]+\.[a-zA-z]{2,}$/;
    if (Email === existingEmail) {
  setMessage("You have already signed up. Please login.");}
    else if (FName===""||LName===""||Password===""||ConfirmPassword==""||phone===""||Email===""){
      alert("please fill all the input")
    }
    else if(!emailPattren.test(Email)){
      alert("please follow the proper email pattren");
    }
    else{
      alert("signup successfull");
      navigate("/home");
    }
    e.preventDefault();
    
    
  }
  return (
    <>
    <div className="main_signup_dev">
    <div className="signup_form_dev">
      <h2>Sign Up</h2>
    <form action="" onSubmit={Handlebtn} className="signup_form">
      <div><input type="text" value={FName} placeholder="Enter Your First Name" onChange={(e)=>setFName(e.target.value)}/></div>
      <div><input type="text" value={LName}  placeholder="Enter Your Last Name" onChange={(e)=>setLName(e.target.value)}/></div>
      <div><input type="email" value={Email}  placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)}/></div>
      <div><input type="password" value={Password}  placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)}/></div>
      <div><input type="password" value={ConfirmPassword}  placeholder="Confirm Your Password" onChange={(e)=>setConfirmPassword(e.target.value)}/></div>
      <div><input type="text" value={phone}  placeholder="Enter Your Phone Number" onChange={(e)=>setphone(e.target.value)}/></div>
      <div><button className="signup_btn">submit</button></div>
      {message && <p className="form_message">{message}</p>}
    </form>
    </div>
    </div>
    </>
  )
}