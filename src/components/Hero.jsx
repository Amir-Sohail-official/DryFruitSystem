import image from "../images/dry.webp"
import { useNavigate } from "react-router-dom"; 
import "./hero.css";
export default function Hero(){
  const navigate = useNavigate();

  const handleGetInTouch = () => {
    navigate("/login");
  };

  return <>
  <div className="hero_main_dev">

    <div className="hero_text">
      <div className="hero_heading">
        <h1>Smarter Dry Fruit Insights, Powered by AI</h1>
      </div>
      <div className="hero_paragragh">
        <p>Our AI-powered platform helps you identify dry fruits, explore their health benefits, and stay informed with seasonal and regional insights — all tailored to support your healthy lifestyle.We use advanced image recognition and data analysis to provide instant, reliable results.

</p>
      </div>
      <div className="hero_button">
        <button onClick={handleGetInTouch}>Get In Touch</button>
      </div>
    </div>

    <div className="hero_image">
      <img src={image} alt="" height="500px" />
    </div>

  </div>
  </>
}