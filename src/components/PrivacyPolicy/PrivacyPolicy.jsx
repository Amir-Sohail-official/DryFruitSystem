import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p>
        We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our Dry Fruit Detection and Information System.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        - <strong>Uploaded Images:</strong> Images uploaded for dry fruit detection are used temporarily and not stored permanently.<br />
        - <strong>Feedback:</strong> If you submit feedback, your comments may be saved for improvement purposes.
      </p>

      <h2>2. Use of Information</h2>
      <p>
        The information collected is used solely for:
      </p>
      <ul>
        <li>Providing accurate detection and nutritional insights</li>
        <li>Improving our system’s performance and user experience</li>
        <li>Responding to user feedback</li>
      </ul>

      <h2>3. Data Security</h2>
      <p>
        We do not store sensitive user data. All detection is processed securely and temporarily. No personal user information (e.g., name, email) is required for basic system use.
      </p>

      <h2>4. Third-Party Access</h2>
      <p>
        We do not share any user information with third-party services or organizations.
      </p>

      <h2>5. User Rights</h2>
      <p>
        Users can request that their feedback be removed at any time by contacting us. Since no accounts or personal info are required, no identity-related data is collected.
      </p>

      <h2>6. Policy Updates</h2>
      <p>
        We may update this policy as the system evolves. Any changes will be reflected on this page with the updated date.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have any questions or concerns about our Privacy Policy, please reach out through the feedback form.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
