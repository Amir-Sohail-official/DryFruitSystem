import React, { useState } from "react";
import image1 from "../images/almond1.jpg";
import image2 from "../images/cashew.jpg";
import image3 from "../images/fig1.jpg";
import image4 from "../images/peanut.jpg";
import "./Trending.css";
export default function Trending (){
  const trendingItems = [
      {
        id: 1,
        title: 'Almond',
        description: 'Rich in healthy fats fiber and vitamin E almonds boost heart health and brain function',
        image: image1,
        moreInfo: 'Almonds are edible seeds from the almond tree and are highly nutritious. They are packed with antioxidants, vitamin E, and magnesium, which can help lower blood pressure and cholesterol levels. Consuming almonds regularly supports healthy skin, improved brain function, and weight management.',
      },
      {
        id: 2,
        title: 'Cashew',
        description: 'Creamy and delicious, cashews are packed with iron, magnesium, and healthy antioxidants.',
        image: image2,
        moreInfo: 'Cashews are not only creamy and delicious but also packed with essential nutrients. They are rich in iron, magnesium, zinc, and healthy fats that support bone strength, improve immune system function, and promote healthy skin. Their unique buttery flavor makes them perfect for snacking, adding to desserts, or blending into dairy-free sauces and creams.',
      },
      {
        id: 3,
        title: 'Fig',
        description: 'Naturally sweet and high in fiber, figs support digestion and provide essential minerals like calcium.',
        image: image3,
        moreInfo: 'Figs are naturally sweet and loaded with dietary fiber, making them excellent for digestive health. They also contain important minerals like calcium, potassium, and iron, which help maintain bone density and support blood pressure regulation. Figs can be eaten fresh or dried and are a tasty, energy-boosting snack or a rich addition to baked goods and salads.',
      },
      {
        id: 4,
        title: 'Peanut',
        description: 'A protein-rich snack, peanuts are a great source of energy, healthy fats, and essential vitamins.',
        image: image4,
        moreInfo: 'Peanuts are a nutrient-dense snack, high in protein, healthy monounsaturated fats, and vitamins B3 and E. They are known to support muscle repair, improve heart health, and provide long-lasting energy. Commonly enjoyed roasted or as peanut butter, they are a staple in many diets due to their affordability and health benefits.',
      }
    ]
    const [selectedItem, setSelectedItem] = useState(null);
    const open = (item) => {
      setSelectedItem(item); 
    };
  
    const close = () => {
      setSelectedItem(null);
    };
  return (
    <>
    <div className="trending_main_dev">
      <div className="heading_dev">
        <h1>Trending Fruits</h1>
      </div>

      <div className="cards_dev" >
        {trendingItems.map((item)=>(
          <div className="cards_main_dev" key={item.id}>


            <div className="images_dev">
              <img src={item.image} alt={item.title} />
            </div>
           
           
            <div className="text_dev">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            </div>

            <div>
            <ul className="info_nutrition">
            <li><strong>Calories:</strong> 250 kcal</li>
            <li><strong>Protein:</strong> 8g</li>
            <li><strong>Fat:</strong> 14g</li>
            <li><strong>Carbs:</strong> 20g <button onClick={() => open(item)}>Read More</button></li>
          </ul>
            </div>



            {selectedItem?.id === item.id && (
      <div className="popup">
        <h2>{selectedItem.title}</h2>
        <p>{selectedItem.moreInfo}</p>
        {/* <ul>
          <li>Supports heart health</li>
          <li>Boosts brain function</li>
          <li>Helps with weight management</li>
          <li>Rich in antioxidants</li>
        </ul> */}
        <button onClick={close}>Close</button>
      </div>
    )}

          </div>
        ))}
        
      </div>
      
</div>


  

</>
  )
}