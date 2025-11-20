import React from "react";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p>
        Welcome to our Dry Fruit Detection and Information System. By using this website, you agree to the following terms and conditions:
      </p>

      <h2>1. Use of the System</h2>
      <p>
        This system is designed for educational and informational purposes only. It uses AI to detect dry fruits and provide nutritional details, seasonal alerts, and pricing data. Accuracy is not 100% guaranteed.
      </p>

      <h2>2. User Responsibilities</h2>
      <ul>
        <li>Users must not misuse the platform or attempt to harm the system.</li>
        <li>Feedback provided should be respectful and relevant to the system.</li>
        <li>Do not upload inappropriate or unrelated images.</li>
      </ul>

      <h2>3. Data Usage</h2>
      <p>
        Uploaded images are used only for detection purposes and are not stored permanently. No personal information is collected from users unless voluntarily provided in feedback.
      </p>

      <h2>4. AI Limitations</h2>
      <p>
        The AI may sometimes misidentify dry fruits or show incorrect data. We recommend verifying information before making health-related or purchase decisions.
      </p>

      <h2>5. Modifications</h2>
      <p>
        We may update these terms at any time without prior notice. Continued use of the system means you accept the new terms.
      </p>

      <h2>6. Contact</h2>
      <p>
        For questions, concerns, or suggestions, please contact the development team via the feedback section.
      </p>
    </div>
  );
};

export default TermsAndConditions;
