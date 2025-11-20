import "./PopUp.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
function PopUp({ onclose, item }) {


  return (
    <>
      <div className="popup_main_dev">
        <div className="popup_item_main_dev">
          
          <div className="title_popup_dev">
          <div><h3>{item.title}</h3></div>
          <div><button className="icon_btn" onClick={onclose}><FontAwesomeIcon icon={faXmark} /></button></div>
          </div>
          <div className="price_popup_main_dev">
          <div><h4>Price</h4></div>
          <div className="price_dev"><p>{item.price}</p></div>
          </div>
          <div className="deit_popup_main_dev">
          <div><h4>Diet Info</h4></div>
          <div><p>{item.diet_info}</p></div>
          </div>
          

          <div className="shop_info">
            <div><h3>Shop Info</h3></div>

            <div className="name_popup_main_dev">
              <div><h4>Name</h4></div>
              <div className="name_dev"><p>Pathan Dry Fruits</p></div>
            </div>

            <div className="conatct_popup_main_dev">
              <div><h4>Contact</h4></div>
              <div><p>03351946509</p></div>
            </div>

            <div className="location_popup_main_dev">
              <div><h4>Location</h4></div>
              <div><p>Rawalpindi</p></div>
              <div><button onClick={onclose}>Close</button></div>
            </div>
          </div>



        </div>
      </div>
    </>
  );
}

export default PopUp;
