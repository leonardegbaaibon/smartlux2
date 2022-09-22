import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Project.css";
import { MdLocationPin } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import pic1 from "./Smart.png";
// import logo from './Group 407.png';
import Proimg from "./Smartlux3.png";
// import { Outlet, Link } from "react-router-dom";
import instagram from "./Instagramicon2.jpeg";
import linkedin from "./linkedinicon.jpeg";
import facebook from "./facebookicon.jpeg";
import twitter from "./twittericon.png";
import { BsTelephoneFill } from "react-icons/bs";
import { GoMailRead } from "react-icons/go";
import { IoLogoWhatsapp } from "react-icons/io";

const Project = () => {
  return (
    <div>
      <hr />.
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
      <div className="main-project">
        <div className="flex-projectitems">
          <b className="overview">Overview</b>
          <b className="features">Features</b>
          <b className="details">Home Details</b>
          <b className="payment">Payment Plan</b>
        </div>
        <hr />
        <div className="main-overview">
          <div className="overview-div">
            <p className="overview-topic">Overview</p>
            <p className="overview-word">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              consectetur fuga earum voluptatum corrupti veniam quo, accusamus
              dicta nihil vero obcaecati atque, vel cum enim, aliquid odio.
              Totam, pariatur nostrum!
            </p>
          </div>
          <div className="overview-video">
            <FaPhotoVideo />
          </div>
        </div>
        <div className="main-features">
          <div className="features-div">
            <p className="features-topic">Features</p>
            <p className="features-word">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              rerum temporibus, ab sequi natus est praesentium blanditiis
              provident neque iusto dolor reprehenderit libero mollitia numquam
              aspernatur vel, quis at repellat?
            </p>
          </div>
          <div className="features-image">
            <div className="features-img1">
              <img src={pic1} alt="" />
            </div>
            <div className="features-img2">
              <img src={Proimg} alt="" />
            </div>
          </div>
        </div>
        <div className="main-home">
          <div className="home-div">
            <p className="home-topic">Home Details</p>
            <p className="home-word">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus explicabo neque architecto assumenda! Amet error quia
              inventore eligendi delectus? Eos quod iure, accusamus facilis
              dolorem incidunt illum mollitia quos sed. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Natus repellat totam debitis
              rem fugit nulla ipsa incidunt itaque a magni expedita vero,
              distinctio maxime voluptates illo temporibus officia similique
              delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolores nostrum maxime nulla ipsam vitae nisi odit in nemo
              aspernatur? Corrupti neque quisquam facilis officia at alias
              eveniet soluta. Laboriosam, alias.
            </p>
          </div>
          <div className="home-image"></div>
        </div>
        <div className="inspection-div">
          <button className="btn-inspection">Schedule an inspection</button>
        </div>
        <div className="main-payment">
          <div className="payment-div">
            <p className="payment-topic">Payment Pay</p>
            <p className="payment-word">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              architecto omnis cupiditate odio dolores. Delectus illum, porro
              laborum repellendus quod, quis quia illo totam, fugit quo corrupti
              cumque blanditiis eum.
            </p>
          </div>
          <div className="download-btn">
            <button className="btn-whatsapp">Chat on Whatsapp</button>
            <button className="btn-brochure"> Download Brochure</button>
            <button className="btn-application">
              Download Application Form
            </button>
          </div>
        </div>
      </div>
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
                <p>
                  {" "}
                  <MdLocationPin /> 1 Ayinke street, Akoka, Yaba, Lagos State,
                  Nigeria.
                </p>
              </div>
              <div className="phone-div">
                <p>
                  <BsTelephoneFill /> +2348099751498
                </p>
              </div>
              <div className="envelope-div">
                <p>
                  {" "}
                  <GoMailRead /> info@jimodevelopment.com
                </p>
              </div>
              <div className="whatsapp-div">
                <p>
                  {" "}
                  <IoLogoWhatsapp /> +2347084631267
                </p>
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
export default Project;
