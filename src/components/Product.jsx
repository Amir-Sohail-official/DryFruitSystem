import React, { useState } from "react";
import image1 from "../images/almond1.jpg";
import image2 from "../images/cashew.jpg";
import image3 from "../images/fig1.jpg";
import image4 from "../images/peanut.jpg";
import image5 from "../images/pistatio.jpg";
import image6 from "../images/rasin.jpg";
import image7 from "../images/walnut.webp";
import "./product.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import PopUp from "./PopUp";


const NextArrow = ({onClick})=>{
  return (
    <button onClick={onClick} className="next_btn slider_btn">
      <FontAwesomeIcon icon={faChevronRight} size="lg" />
    </button>
  )
  
}
const PrevArrow = ({onClick})=>{
  return (
    <button onClick={onClick} className="prev_btn slider_btn">
      <FontAwesomeIcon icon={faChevronLeft} size="lg"/>
    </button>
  )
  
}
export default function Product() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    
  };
  const productItems = [
    {
      id: 1,
      title: 'Almond',
      description: 'Rich in healthy fats fiber and vitamin E almonds boost heart health and brain function',
      image: image1,
      price: '1000pkr/kg',
      diet_info: 'Rich in healthy fats, vitamin E, and fiber, almonds support heart and brain health.They also help control blood sugar and promote weight management.', 
    },
    {
      id: 2,
      title: 'Cashew',
      description: 'Creamy and delicious, cashews are packed with iron, magnesium, and healthy antioxidants.',
      image: image2,
      price: '1000pkr/kg',
      diet_info: 'Cashews are high in magnesium, iron, and healthy fats that boost immunity.They support bone health and improve energy levels.',
    },
    {
      id: 3,
      title: 'Fig',
      description: 'Naturally sweet and high in fiber, figs support digestion and provide essential minerals like calcium.',
      image: image3,
      price: '1000pkr/kg',
      diet_info: 'Figs are high in natural sugars, fiber, and minerals like calcium and potassium.They aid digestion and help maintain strong bones and blood pressure balance.',
    },
    {
      id: 4,
      title: 'Peanut',
      description: 'A protein-rich snack, peanuts are a great source of energy, healthy fats, and essential vitamins.',
      image: image4,
      price: '1000pkr/kg',
      diet_info: 'Peanuts are protein-rich and packed with healthy fats and vitamin B.They support muscle growth and provide lasting energy.', 
    },
    {
      id: 5,
      title: 'Pistachio',
      description: 'Low in calories and high in antioxidants, pistachios promote heart health and weight management.',
      image: image5,
      price: '1000pkr/kg',
      diet_info: 'Low in calories and high in antioxidants, pistachios promote heart and eye health.They also help with weight control and blood sugar management.',
    },
    {
      id: 6,
      title: 'Raisin',
      description: 'Tiny but mighty, raisins are loaded with iron and natural sugars that boost energy levels.',
      image: image6,
      price: '1000pkr/kg',
      diet_info: 'Raisins are high in iron, natural sugars, and antioxidants.They boost energy, improve digestion, and help with anemia.',
    },
    {
      id: 7,
      title: 'Walnut',
      description: 'Walnuts are brain-boosting nuts rich in omega-3 fatty acids and powerful antioxidants.',
      image: image7,
      price: '1000pkr/kg',
      diet_info: 'Walnuts are rich in omega-3 fatty acids and antioxidants.They enhance brain function and support heart health.',
    }
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const open = (product) => {
    setSelectedProduct(product); 
  };

  const close = () => {
    setSelectedProduct(null);
  };
  return (
    <>
    <Slider {...settings}>
  {productItems.map((product) => (
    <div key={product.id} className="product_wrapper">
      <div className="product_main_div">
        <img src={product.image} alt={product.title} className="image"/>
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
        <ul className="nutrition-info">
          <li><strong>Calories:</strong> 250 kcal</li>
          <li><strong>Protein:</strong> 8g</li>
          <li><strong>Fat:</strong> 14g</li>
          <li><strong>Carbs:</strong> 20g <button onClick={() => open(product)}>Read More</button></li>
        </ul>
      </div>
      {selectedProduct?.id === product.id && (
          <PopUp onclose={close} item={selectedProduct} />
        )}
    </div>
  ))}
</Slider>
{

selectedProduct && <PopUp onclose={close} item={selectedProduct} />
}
</>
  );
}
