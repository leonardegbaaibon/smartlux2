import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Smartbody.css";
import pic1 from "./Smart.png";
import { MdLocationPin } from 'react-icons/md';
import Proimg from "./Smartlux3.png";
import instagram from './Instagramicon2.jpeg';
import linkedin from './linkedinicon.jpeg';
import facebook from './facebookicon.jpeg';
import twitter from './twittericon.png';
import { BsTelephoneFill } from 'react-icons/bs';
import{ GoMailRead } from 'react-icons/go';
import { IoLogoWhatsapp } from 'react-icons/io';

const Homepage = () => {
  // var count = 1;
  // setInterval(function () {
  //   document.getElementById("radio" + count).checked = true;
  //   count++;
  //   if (count > 3) {
  //     count = 1;
  //   }
  // }, 10000);

  return (
    <div className="body">
       <div className="nav-bar">
        {/* <div className="logo-div">
          <img src={logo} alt="logo" className="logo1-div" />
        </div>  */}
       </div>
      <hr />.
      {/* <div className="slide-body">  */}
        {/* image slider start */}
        {/* <div className="slider">
          <div className="slides"> */}
            {/* radio button start */}
            {/* <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" /> */}
            {/* radio button end */}
            {/* <div className="slide first" id="opaque-width">
              <div className="mymove" id="mymove1">
                <b className="b-word">Meadow Villa</b>
                <button className="btn-slide1">View Project</button>
                <b className="b-word1">Orchid Apartment</b>
                <b className="b-word2">Egbaaibon's House</b>
              </div> */}
              {/* <b className="b-word">
                  Meadow Villa
              </b> */}
              {/* <b className="b-word1">
                  Orchid Apartment
              </b>
              <b className="b-word2">
                  Egbaaibon's House
              </b> */}
            {/* </div>
            <div className="slide" id="opaque-width2">
              <div className="mymove2">
                <b className="b2-word">Orchid Apartment</b>
                <button className="btn-slide2">View Project</button>
              </div>
            </div>
            <div className="slide" id="opaque-width3">
              <div className="mymove3">
                <b className="b3-word">Egbaaibon's House</b>
                <button className="btn-slide3">View Project</button>
              </div>
            </div>

            <div className="navigation-auto">
              <div className="auto-btn1">1</div>
              <div className="auto-btn2">2</div>
              <div className="auto-btn3">3</div>
            </div>
          </div>

          <div className="navigation-manual">
            <label for="radio1" className="manual-btn">
              1
            </label>
            <label for="radio2" className="manual-btn">
              2
            </label>
            <label for="radio3" className="manual-btn">
              3
            </label>
          </div>
        </div>
      </div> */}
      <div className="slide-div">
      <Slide easing="ease" className="move-div">
          <div className="each-slide">
            <div className="slide1-div">
              <div className="image1-div">
                <p className="location-dot">
                  <MdLocationPin /> Lekki Lagos,Nigeria
                </p>
                <h2 className="vill1">Meadow villa</h2>
                <div className="projectbutton-div">
                  <button className="project-button">
                    <div className="view-project">
                      <h3 />
                      View Project
                    </div>
                    <i class="fa fa-long-arrow-right" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div className="slide2-div">
              <div className="image1-div">
                <p className="location-dot">
                  <MdLocationPin /> Lekki Lagos,Nigeria
                </p>
                <h2 className="vill2">Orchid Apartment</h2>
                <div className="projectbutton-div">
                  <button className="project-button">
                    <div className="view-project">
                      <h3 />
                      View Project
                    </div>
                    <i class="fa fa-long-arrow-right" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div className="slide3-div">
              <div className="image1-div">
                <p className="location-dot">
                  <MdLocationPin /> Lekki Lagos,Nigeria
                </p>
                <h2 className="vill3">Meadow villa</h2>
                <div className="projectbutton-div">
                  <button className="project-button">
                    <div className="view-project">View Project</div>
                    <i class="fa fa-long-arrow-right" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        </div>
      <div className="Project-div">
        <h2>Our projects</h2>
      </div>
      <div className="project1-div">
        <div className="serve1-div">
          <div className="pro-div">
            <img src={Proimg} alt="meadow-villa" className="meadow1-div" />
          </div>
          <h2 className="meadowtext1-div">Meadow Villa</h2>
        </div>
        <div className="serve2-div">
          <img src={pic1} alt="meadow-villa" className="meadow2-div" />
          <h2 className="orch">Orchid Apartment</h2>
        </div>
      </div>
      <hr />
      <div>
        <div className="About-div">
          <h2>About Us</h2>
        </div>
        <div className="about-us">
          <img src={pic1} alt="jimo-develop" className="jimo-develop" />
          <p className="about-text">
            Would you rather handle the daily management yourself but don’t want
            to bother advertising the vacancy, showing the property at the
            tenant’s convenience and screening the tenants? Then Placement might
            be right for you.
          </p>
        </div>
      </div>
      <hr />
      <div>
        <div className="services-div">
          <h2>Our Services</h2>
        </div>
        <div className="service1-div">
          <img src={pic1} alt="services" className="services" />
          <p className="service1-h3">
            <h3 className="manage-div">Property Management</h3>
            Would you rather handle the daily management yourself but don’t want
            to bother advertising the vacancy, showing the property at the
            tenant’s convenience and screening the tenants? Then Placement might
            be right for you.
            <br />
          </p>
        </div>
        <div className="service2-div">
          <img src={pic1} alt="services2" className="services" />
          <p className="service2-h3">
            <h3 className="prop-div">Property and Facility Management</h3>
            Would you rather handle the daily management yourself but don’t want
            to bother advertising the vacancy, showing the property at the
            tenant’s convenience and screening the tenants? Then Placement might
            be right for you.
          </p>
        </div>
      </div>
      <hr />
      <div className="footer-div">
        <div className="seperate-footer">
          <div className="contact-div">
            <h2 className="h3-contact">CONTACT US</h2>
            <p className="contact-p">
              Do you want to make an enquiry, a complaint or you just want to
              know more about us? Then you’re on the right Send us a message
              right here or contact us on any of the channels lised below.
            </p>
            <div className="all-icon">
            <div className="marker-div">
                       <p> <MdLocationPin /> 1 Ayinke street, Akoka, Yaba, Lagos State, Nigeria.</p>
                    </div>
                    <div className="phone-div">
                    <p><BsTelephoneFill /> +2348099751498</p>
                    </div>
                    <div className="envelope-div">
                    <p> <GoMailRead /> info@jimodevelopment.com</p>
                    </div>
                    <div className="whatsapp-div">
                    <p> <IoLogoWhatsapp/> +2347084631267</p>
                    </div>

            </div>
            <div>
              <h3 className="h3-connect">CONNECT WITH US</h3>
              <div className="social-icon">
                        <div className="instagram-div">
                        <img src={instagram} alt="instagram-icon" />
                        </div>
                        <div className="facebook-div">
                        <img src={facebook} alt="facebook-icon" />
                        </div>
                        <div className="twitter-div">
                        <img src={twitter} alt="twitter-icon" />
                        </div>
                        <div className="linkedin-div">
                        <img src={linkedin} alt="linkedin-icon" />
                        </div>
                    </div>
            </div>
          </div>
          <div className="newsletter-div">
            <h2 className="h3-newsletter">NEWSLETTER</h2>
            <p className="latest-div">Get the latest updates and deals</p>
            <input
              type="text"
              required
              placeholder="Your Name"
              className="name-div"
            />
            <input
              type="text"
              required
              placeholder="Your Email"
              className="email-div"
            />
            <div>
              <button className="subscribe-button">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="hr-div">
          <hr />
          <div>
            <h3 className="reserved-div">
              (c)2022-Jimo Property Development Limited. All Rights Reserved
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
