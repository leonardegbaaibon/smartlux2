import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./Services.css";
import pic1 from './Smart.png';
import instagram from './Instagramicon2.jpeg';
import linkedin from './linkedinicon.jpeg';
import facebook from './facebookicon.jpeg';
import twitter from './twittericon.png';
import { MdLocationPin } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import{ GoMailRead } from 'react-icons/go';
import { IoLogoWhatsapp } from 'react-icons/io';
// import logo from './Group 407.png';
// import Proimg from './Smartlux3.png';
// import { Outlet, Link } from "react-router-dom";




const Services = () =>{
    return(
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
        <div className="main-services">
            <div className="main-service1">
                <img src={pic1} alt="" srcset="" className="service-img1" />
                <h3 className="service-text1">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et veritatis tempora 
                    delectus temporibus cum maiores. Nesciunt perferendis possimus quaerat 
                    nam! Nemo officia nam consequuntur autem reiciendis mollitia provident omnis et.
                </h3>
            </div>
            <div className="main-service2">
                <img src={pic1} alt="" srcset="" className="service-img2" />    
                <h3 className="service-text2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus 
                        consequatur quibusdam ad neque animi, iure et, optio fugit nobis
                         incidunt ex excepturi illo ab soluta tempore laboriosam sit rem? Et.
                </h3>
            </div>
            <div className="main-service3">
                <img src={pic1} alt="" srcset="" className="service-img3" />
                <h3 className="service-text3">
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                      eligendi distinctio explicabo reiciendis laudantium, 
                     doloribus necessitatibus nam harum dicta suscipit voluptas. 
                     Modi nobis nostrum, numquam eos adipisci quod inventore itaque?   
                </h3>
            </div>

        </div>
        <div className="footer-div">
            <div className="seperate-footer">
              <div className="contact-div">
                  <h2 className="h3-contact">
                    CONTACT US
                  </h2>
                  <p className="contact-p">
                  Do you want to make an enquiry, a complaint or you just want to know more about us? Then you’re on the right
                   Send us a message right here or contact us on any of the channels lised below.
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
                    <h3 className="h3-connect">
                      CONNECT WITH US
                    </h3>
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
                <h2 className="h3-newsletter">
                  NEWSLETTER
                </h2>
                <p className="latest-div">
                  Get the latest updates and deals
                </p>
                <input type="text" required placeholder="Your Name" className="name-div"/>
                <input type="text" required placeholder="Your Email" className="email-div"/>
                <div>
                  <button className="subscribe-button">
                    Subscribe
                  </button>
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
    )
}
export default Services