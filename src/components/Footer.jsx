import logo from "../images/logu.png";
import email from "../images/email.png";
import contact from "../images/call.png";
import instagram from "../images/instagarm.png";
import fasebook from "../images/fasebook.png";
import linked from "../images/linked in.png";
import whatsapp from "../images/whatsapp.png";
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="main_footer_div">
        <div className="logu_footer_div">
          <div>
            <h1>Dry Fruit Detection System</h1>
          </div>

          <div className="logu_image_footer_dev">
            <img src={logo} alt="" height="100px" width="90px" />
          </div>

          <div>
            <p>
              <strong>Dry Fruit Detection System</strong>
              <br />
              Developed by: Amir Sohail, Asmat Ullah, Saif Ullah
            </p>
          </div>

          <div className="logu_anchor_dev">
            {/* <div><h3>Dry Fruit Detection </h3></div> */}
            {/* <div><Link to="/about" className="footer_link">About Us</Link></div>
        <div><Link to="/contact" className="footer_link">Contact Us</Link> </div> */}
            <div>
              <Link to="/privicypolicy" className="footer_link">
                Privacy and Policy
              </Link>
            </div>
            <div>
              <Link to="/termsandcondition" className="footer_link">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>

        <div className="home_footer">
          <div>
            <h2>Quick Links</h2>
          </div>
          <div>
            <Link to="/" className="link">
              Home
            </Link>
          </div>
          <div>
            <Link to="/upload" className="link">
              Upload
            </Link>
          </div>
          <div>
            <Link to="/seasonal-alert" className="link">
              Seasonal Alert
            </Link>
          </div>
          <div>
            <Link to="/feedback" className="link">
              Feedback
            </Link>
          </div>
          <div>
            <Link to="/about" className="link">
              About Us
            </Link>
          </div>
        </div>

        <div className="contact_footer">
          <div>
            <h2>Contact Us</h2>
          </div>
          <div className="email_dev">
            <div>
              <img src={email} alt="" width="35px" />
            </div>
            <div>
              <a href="mailto:amirkhan46509@gmail.com">
                amirkhan46509@gmail.com
              </a>
            </div>
          </div>
          <div className="call_dev">
            <div>
              <img src={contact} alt="" width="50px" />
            </div>
            <div>
              <p>03351946509</p>
            </div>
          </div>

          <div className="whatsapp_dev">
            <div>
              <img src={whatsapp} alt="" />
            </div>
            <div>
              <p>03439117159</p>
            </div>
          </div>
        </div>

        <div className="follow_footer">
          <div>
            <h2>Follow Us</h2>
          </div>
          <div className="fasebook_dev">
            <div>
              <img src={fasebook} alt="" />
            </div>
            <div>
              <p>
                <a
                  href="https://www.facebook.com/AmirKhan"
                  target="_blank"
                  rel="noopener"
                  className="social_links"
                >
                  Facebook
                </a>
              </p>
            </div>
          </div>
          <div className="linked_dev">
            <div>
              <img src={linked} alt="" />
            </div>
            <div>
              <p>
                <a
                  href="www.linkedin.com/in/amir-khan-5a48a5279"
                  target="_blank"
                  rel="noopener"
                  className="social_links"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
          <div className="instagram_dev">
            <div>
              <img src={instagram} alt="" />
            </div>
            <div>
              {" "}
              <p>
                <a
                  href="https://www.instagram.com/amirkhan46509"
                  target="_blank"
                  rel="noopener"
                  className="social_links"
                >
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <h2>
          Copyright © 2025, Dry Fruit Detection System. All rights Reserved
        </h2>
      </div>
    </>
  );
}
