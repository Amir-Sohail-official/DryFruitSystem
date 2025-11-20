import "./Contact.css";
export default function Contact(){
  return( <>
    <div className="contact_main_div_one">

      <div><h1>Contact Us</h1></div>

      <div><p>Reach out to us to accomplish the extraordinary.</p></div>


    </div>

    <div className="contact_main_dev_two">
      <div><h1>We’d Love to Hear from You</h1></div>
      <div><p>Connect with us using any of the options listed below to learn more about our services, and explore partnership opportunities.</p></div>

    </div>

    <div className="contact_main_dev_three">

      <div className="contact_info_main_dev">

      <div className="contact_info">
        <div><h2>Phone</h2></div>
        <div><h2>03351946509</h2></div>
      </div>

      <div className="contact_info">
        <div><h2>Whatsapp</h2></div>
        <div><h2>03439117159</h2></div>
      </div>

      <div className="contact_info">
        <div><h2>Email</h2></div>
        <div><h2><a href="mailto:amirkhan46509@gmail.com">amirkhan46509@gmail.com</a></h2></div>
      </div>

       <div className="contact_info">
        <div><h2>Location</h2></div>
        <div><h2>Near Stadium Road Rawalpindi street No 23</h2></div>
      </div>

      </div>

      <div className="form_contact_main_dev">
        <div className="form_contact_dev">
        <div className="form_contact_heading_dev"><h1>Got a Query? Leave Us a Message!</h1></div>
        <div className="input_contact_dev">
          <input type="text" placeholder="First Name"/>
          <input type="text" placeholder="Last Name"/>
          <input type="email" name="email" id="email" placeholder="Email"/>
          <input type="text" name="subject" id="subject" placeholder="Subject"/>
          <textarea name="your_message" id="your_messsage" placeholder="Your Message"></textarea>
        </div>

        </div>

      </div>
      
    </div>
    </>
  )
}