import "./SeasonalAlert.css";
import walnut from "../../images/almond1.jpg";
export default function SeasonalAlert() {
  return (
    <div className="seasonal-container">
      <h1 className="seasonal-heading">Seasonal Dry Fruit Alerts</h1>
      <p className="seasonal-subheading">
        Stay updated on what’s fresh, nutritious, and seasonal.
      </p>

      <div className="seasonal-filter">
        <label>Select Season:</label>
        <select>
          <option>Winter</option>
          <option>Spring</option>
          <option>Summer</option>
          <option>Autumn</option>
        </select>
      </div>

      <div className="seasonal-content">
        <div className="fruit-grid">
          <div className="fruit-card">
            <img src={walnut} alt="Walnut" />
            <h3>Walnut</h3>
            <p className="season">Availability: <span>Peak Season</span></p>
            <p>Great for brain health and warmth in winter.</p>
          </div>
          <div className="fruit-card">
            <img src={walnut} alt="Dates" />
            <h3>Dates</h3>
            <p className="season">Availability: <span>Winter</span></p>
            <p>Rich in energy and iron, perfect for cold days.</p>
          </div>
          {/* Add more fruit cards */}
        </div>

        <div className="seasonal-sidebar">
          <h4>Why Eat Seasonal Dry Fruits?</h4>
          <ul>
            <li>Better nutrition & taste</li>
            <li>Naturally available & eco-friendly</li>
            <li>Boosts immunity during seasons</li>
          </ul>
          <blockquote>
            “Let food be thy medicine and medicine be thy food.” – Hippocrates
          </blockquote>
        </div>
      </div>
    </div>
  );
}
