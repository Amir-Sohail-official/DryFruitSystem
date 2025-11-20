import React from "react";
import Nevbar from "./components/Nevbar";
import Contact from "./components/contact/Contact";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Login from "./components/Login/Login";
import Signup from "./components/signup/Signup";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Feedback from "./components/Feedback/Feedback";
import SeasonalAlert from "./components/SeasonalAlert/SeasonalAlert";

function App() {
  return (
    <BrowserRouter>
      <Nevbar />
      <Routes>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About></About>}/>
        <Route path="/signup" element={<Signup></Signup>}/>
        <Route path="/termsandcondition" element={<TermsAndConditions></TermsAndConditions>}/>
        <Route path="/privicypolicy" element={<PrivacyPolicy></PrivacyPolicy>}/>
        <Route path="/feedback" element={<Feedback></Feedback>}/>
        <Route path="/seasonal-alert" element={<SeasonalAlert></SeasonalAlert>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
