import { useState } from "react"
import { useNavigate } from "react-router-dom"; 
import "./Login.css"

export default function Login(){
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [phone, setphone] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();


  const Handlebtn = (e) => {
    const userFname="amir";
    const userLname="sohail";
    const userPassword="1234";
    const userConfirmPassword="1234";
    const useremail="amirkhan46509@gmail.com";
    const userPhone="03351946509";
    if(userFname!==FName||userLname!==LName||userPassword!==Password||userConfirmPassword!==ConfirmPassword||useremail!==Email||userPhone!==phone){
      setMessage("You have no account, please sign up first.");
      navigate("/signup");
    }
    else{
       setMessage("");
       navigate("/");
    }
    e.preventDefault();
  }
  return (
    <>
    <div className="main_Login_dev">
    <div className="login_form_dev">
    <h2>Login</h2>
    <form action="" onSubmit={Handlebtn} className="login_form">
      <div><input type="text" value={FName} placeholder="Enter Your First Name" onChange={(e)=>setFName(e.target.value)}/></div>
      <div><input type="text" value={LName}  placeholder="Enter Your Last Name" onChange={(e)=>setLName(e.target.value)}/></div>
      <div><input type="email" value={Email}  placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)}/></div>
      <div><input type="password" value={Password}  placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)}/></div>
      <div><input type="password" value={ConfirmPassword}  placeholder="Confirm Your Password" onChange={(e)=>setConfirmPassword(e.target.value)}/></div>
      <div><input type="text" value={phone}  placeholder="Enter Your Phone Number" onChange={(e)=>setphone(e.target.value)}/></div>
      <div><button className="login_btn">submit</button></div>
      {message && <p className="form_message">{message}</p>}
    </form>
    </div>
    </div>
    </>
  )
}