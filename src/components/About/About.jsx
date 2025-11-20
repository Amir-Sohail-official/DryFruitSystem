import "./About.css";
import amir from "../../images/amir2.jpg";
import asmat from "../../images/asmat.jpg";
import saif from "../../images/saif.jpg";
import supervisor from "../../images/super.webp"
export default function About(){
  return(
    <>
    <div className="about_text_main_dev">
      <div className="about_text_dev">
      <div className="about_heading_dev"><h1>About System</h1></div>
      <div className="about_para_dev"><p> Dry Fruit Finder is a smart web system that helps users find quality dry fruits by type or province in Pakistan, offering nutritional info, prices, and nearby shop locations.
      </p></div>
      </div>

      <div className="about_text_dev">
      <div className="about_heading_dev"><h1>Our Mission</h1></div>
      <div className="about_para_dev"><p>To empower users with an easy-to-use tool that connects them to trusted dry fruit sellers, encourages healthy eating, and supports local businesses.</p></div>
    </div>
    </div>


    <div className="meet-our-team">

      <div className="meet_team_div">
      <div><h2>Meet Our Team</h2></div>
      <div><p>We are a passionate group of 7th-semester Software Engineering students dedicated to building smart, real-world solutions through innovation and collaboration. As a team, we are currently working on our Final Year Project (FYP), <strong>Dry Fruit Finder</strong> — an intelligent web-based system that helps users discover quality dry fruits by type or region across Pakistan.</p></div>

      <div><p>With a strong foundation in Full Stack Development, our team members possess a diverse skill set that includes HTML, CSS, JavaScript, React, Node.js, SQL, Visual Programming, and Object-Oriented Programming (OOP). We believe in problem-solving through technology, and our shared vision and synchronized efforts make us a strong and goal-driven team. Together, we aim to deliver a meaningful system that not only showcases our technical abilities but also serves practical value to users across the country.</p></div>
      </div>


    </div>


    <div className="about_card_main_dev">

      <div className="about_card_dev">
        <div><img src={amir} alt="" /></div>
        <div className="card_text_dev">
          <div>
            <div><h3>Name</h3></div>
            <div><h3>Role</h3></div>
            <div><h3>Skill</h3></div>
          </div>
        <div>
        <div><p>Amir Sohail</p></div>
        
        <div><p>FrontEnd Developer</p></div>
        
        <div><p>Skills: React, HTML, CSS, JavaScript, Java</p></div>
        </div>
        </div>

      </div>

      <div className="about_card_dev">
        <div><img src={asmat} alt="" /></div>
        <div className="card_text_dev">
          <div>
            <div><h3>Name</h3></div>
            <div><h3>Role</h3></div>
            <div><h3>Skill</h3></div>
          </div>
        <div>
        <div><p>Amir Sohail</p></div>
        
        <div><p>FrontEnd Developer</p></div>
        
        <div><p>Skills: React, HTML, CSS, JavaScript, Java</p></div>
        </div>
        </div>

      </div>

      <div className="about_card_dev">
        <div><img src={saif} alt="" /></div>
        <div className="card_text_dev">
          <div>
            <div><h3>Name</h3></div>
            <div><h3>Role</h3></div>
            <div><h3>Skill</h3></div>
          </div>
        <div>
        <div><p>Amir Sohail</p></div>
        
        <div><p>FrontEnd Developer</p></div>
        
        <div><p>Skills: React, HTML, CSS, JavaScript, Java</p></div>
        </div>
        </div>

      </div>
 </div>




        <div  class="supervisor-section">
          <div className="supervisor_main_dev">
          <div className="supervisor_text_dev">
          <div><h1>Our Supervisor</h1></div>
          <div><p>We are deeply grateful for the unwavering support, guidance, and mentorship of our respected supervisor. Their valuable insights, constructive feedback, and encouragement played a crucial role in shaping the direction and success of our project. Throughout every phase—from ideation to final development—they provided clarity, motivation, and academic expertise. Their dedication not only enhanced our technical growth but also inspired us to maintain high standards of excellence. This project would not have reached its full potential without their mentorship.Their belief in our abilities gave us confidence to face challenges. We sincerely thank them for being a guiding light throughout our journey.</p></div>
          </div>
          <div class="supervisor_image_dev">
          <img src={supervisor} alt="" />
    </div>
    </div>





        </div>
    </>
  )
}