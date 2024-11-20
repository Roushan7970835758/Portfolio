import React from "react";
import "./menue.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import profilePic from "../../assets/Images/jacket_Pic.png";
import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcBiotech,
  FcReadingEbook,
  FcVideoProjector,
  FcBusinessContact,
} from "react-icons/fc";
import { Link } from "react-scroll";

function menue({ toggle }) {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img
                // src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                src={profilePic}
                alt="Profile Pic"
              />
            </div>
          </Zoom>

          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="TechStack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBiotech />
                    Tech Stack
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="Projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcVideoProjector />
                    Projects
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="Education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcReadingEbook />
                    Education
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="WorkExp"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcPortraitMode />
                    Work Experience
                  </Link>
                </div>
              </div>

              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBusinessContact />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">
              <Link
                to="Home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcHome size={25} />
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link
                to="About"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcAbout size={25} />
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link
                to="TechStack"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcBiotech size={25} />
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link
                to="Projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcVideoProjector size={25} />
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link
                to="Education"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcReadingEbook size={25} />
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link
                to="WorkExp"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcPortraitMode size={25} />
              </Link>
            </div>
          </div>

          <div className="nav-item">
            <div className="nav-link">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcBusinessContact size={25} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default menue;
