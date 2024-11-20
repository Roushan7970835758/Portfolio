import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import profilePic from "../../assets/Images/profile.png";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="About">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                src={profilePic}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I am currently working as a{" "}
                <strong>QA Automation Tester</strong> at{" "}
                <strong>Tata Consultancy Services (TCS)</strong> with 1 year of
                experience in the field. My skill set encompasses a range of
                technologies, including:
                <br />
                <strong>Frontend Development:</strong> HTML, CSS / SCSS,
                Bootstrap, JavaScript, React JS, and Next.js
                <br />
                <strong>Backend Development:</strong> Node.js, Express.js,
                MongoDB, and SQL
                <br />
                <strong>Automation Testing:</strong> Selenium, Robot Framework,
                Cucumber, and Appium
                <br />
                <strong>Version Control:</strong> Git / GitHub
                <br />I have a strong passion for{" "}
                <strong>web development</strong>, which drives me to continually
                explore and learn new technologies to enhance my skills.
                Additionally, I have worked on solving 500+ leetcode{" "}
                <strong>DSA (Data Structures and Algorithms)</strong> problems
                in Java, strengthening my problem-solving abilities. With a
                blend of web development expertise and a solid foundation in
                automation testing, I am eager to take on challenges that allow
                me to grow and contribute effectively.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
