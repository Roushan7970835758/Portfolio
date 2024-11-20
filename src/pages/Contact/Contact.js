import { React } from "react";
import "./Contact.css";
import { BsInstagram , BsGithub, BsLinkedin } from "react-icons/bs";
const Contact = () => {
  return (
    <>
      <div className=" contact" id="Contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img
                    src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                    alt="ocontact"
                    className="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact With
                      <a
                        href="https://www.linkedin.com/in/roushan-kumar-1659441a4/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsLinkedin
                          color="blue"
                          size={30}
                          className="ms-2"
                          role="button"
                        />
                      </a>

                      <a
                        href="https://github.com/Roushan7970835758?tab=overview&from=2024-11-01&to=2024-11-21"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsGithub
                        size={30}
                        className="ms-2 github-icon"
                        role="button"
                      />


                      </a>
                      

                      <a
                        href="https://www.instagram.com/rv_roushan/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsInstagram  
                        color="orange"
                        size={30}
                        className="ms-2"
                        role="button"
                      />

                      </a>
                      
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="Write your message"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <button className="button">SEND MESSAGE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
