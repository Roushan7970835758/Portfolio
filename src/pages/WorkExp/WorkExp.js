import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="WorkExp">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="jan 2024 - present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                QA Automation Tester
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Tata Consultancy Services
              </h4>
              <p>
                I worked as a QA Analyst at TCS for 1 year, contributing to KPMG
                projects. After completing 2 months of initial training in
                Full-Stack Development and Java, I specialized in UI automation
                using Robot Framework, mastering XPath and various libraries.
                Additionally, I conducted SAP automation testing with Worksoft
                Certify, automating over 500 test cases and managing them
                efficiently using Jira.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Nov 2023 - jan 2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                FullStack Developer Intership
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Cognizant
              </h4>
              <p>
              I completed a 3-month internship at Cognizant as a Full-Stack Developer, where I gained hands-on experience and learned the React framework.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
