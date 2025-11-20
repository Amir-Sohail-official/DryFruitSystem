import { useState } from "react";
import "./Feedback.css";

export default function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("Suggestion");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message && rating > 0) {
      setSubmitted(true);
      
    }
  };

  return (
    <div className="feedback_container">
      <h2 className="feedback_heading">We Value Your Feedback</h2>
      <p className="feedback_subheading">Tell us how we can improve your experience.</p>

      {!submitted ? (
        <form className="feedback_form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <div className="dropdown_field">
            <label>Feedback Type:</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option>Suggestion</option>
              <option>Bug Report</option>
              <option>General Feedback</option>
            </select>
          </div>

          <textarea placeholder="Your Message..." value={message} onChange={(e) => setMessage(e.target.value)} required />

          <div className="rating_field">
            <label>Rating:</label>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= rating ? "star filled" : "star"}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>

          <button type="submit" className="feedback_btn">Submit</button>
        </form>
      ) : (
        <div className="submitted_message">
          <h3>Thanks for your feedback!</h3>
          <p>We really appreciate your input.</p>
        </div>
      )}
    </div>
  );
}
