import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = () => {
  const educationDetails = [
    {
      yearRange: "2019",
      title: "React Nanodegree Student",
      place: "Udacity Inc",
      desc: "The React Nanodegree by Udacity is a program that teaches how to create dynamic web applications using React. Through hands-on projects and mentorship, students learn front-end development skills and build real-world React applications.",
    },
    {
      yearRange: "February 2018 - June 2018",
      title: "Internship",
      place: "i.c.Stars",
      desc: "Engaged in intensive training and a two-year practicum, collaborating within team-based environments to solve diverse real-world problems. Partnered with corporate entities to cultivate leadership abilities, foster civic engagement, and embrace a community-oriented approach.",
    },
  
  ];

  const experienceDetails = [
    {
      yearRange: "2023 - current",
      title: "Technical Instructor",
      place: "TechLuminate Academy",
      desc: "Techluminate Academy provides job training in web development for underserved communities. Our program offers intensive, hands-on learning to equip participants with the skills needed to pursue careers in technology. Through our training, we aim to bridge the digital divide and create pathways to economic empowerment for all.",
    },
    {
      yearRange: "2020 - 2023",
      title: "Application Analyst",
      place: "Accenture",
      desc: "At Accenture, I developed UI components using HTML, CSS, and Sass for AEM. I created a SharePoint form for internal training registration and automated workflows using SharePoint and Power Automate. I resolved bugs, onboarded and trained junior developers, and collaborated in Scrum team Daily Standups",
    },
    {
      yearRange: "2018 - 2019",
      title: "Mobile Application Developer",
      place: "Red Foundry",
      desc: "At Red Foundry, I developed UI components for iOS, Android, and web apps using React and React Native. I fixed bugs, maintained the company's WordPress site, and managed Confluence for documentation. I created user stories from business requirements, estimated tasks, and integrated APIs for CRUD operations. Additionally, I onboarded and trained junior developers.",
    },
  ];

  const skills = [
    {
      name: "Web Design",
      percent: 65,
    },
    {
      name: "HTML/CSS",
      percent: 100,
    },
    {
      name: "JavaScript",
      percent: 85,
    },
    {
      name: "React JS",
      percent: 85,
    },
    {
      name: "Stripe API",
      percent: 75,
    },
    {
      name: "Bootstrap",
      percent: 99,
    },
  ];

  return (
    <section id="resume" className="section">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">Resume</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          A summary of My Resume
        </h2>
        {/* Heading end*/}
        <div className="row g-5 mt-5">
          {/* My Education */}
          <div className="col-lg-6 wow fadeInUp">
            <h2 className="text-7 fw-600 mb-4 pb-2">My Education</h2>
            <div className="border-start border-2 border-primary ps-3">
              {educationDetails.length > 0 &&
                educationDetails.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-5">{value.title}</h3>
                    <p className="mb-2">
                      {value.place} / {value.yearRange}
                    </p>
                    <p className="text-muted">{value.desc}</p>
                    <hr className="my-4" />
                  </div>
                ))}
            </div>
          </div>
          {/* My Experience */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
            <h2 className="text-7 fw-600 mb-4 pb-2">My Experience</h2>
            <div className="border-start border-2 border-primary ps-3">
              {experienceDetails.length > 0 &&
                experienceDetails.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-5">{value.title}</h3>
                    <p className="mb-2">
                      {value.place} / {value.yearRange}
                    </p>
                    <p className="text-muted">{value.desc}</p>
                    <hr className="my-4" />
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* My Skills */}
        <h2 className="text-7 fw-600 mb-4 pb-2 mt-5 wow fadeInUp">My Skills</h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div className="col-md-6 wow fadeInUp" key={index}>
                <p className="fw-500 text-start mb-2">
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div className="progress progress-sm mb-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <p className="text-center mt-5 wow fadeInUp">
          <a
            className="btn btn-outline-dark shadow-none rounded-0"
            href={resumeFile}
            download
          >
            Download CV
          </a>
        </p>
      </div>
    </section>
  );
};

export default Resume;
