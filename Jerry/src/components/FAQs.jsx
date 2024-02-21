import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQs = () => {
  const faqsData = [
    {
      question: "How much are your services?",
      answer:
        "It depends on the project and the scope of work that is involved. I offer a variety of services and packages that can be tailored to fit your needs. Please contact me to discuss your project and I will provide a quote based on your needs.",
    },
    {
      question: "How much for a website?",
      answer:
        "Please refer to my web design packages for more information.",
    },
    {
      question: "How long does it take  to build a website?",
      answer:
        "My website packages include a timeline for deliverables based on the package you select. For additional add-ons like extra pages or features, the completion time for your website may increase. Please refer to the web design packages for more information.",
    },
    {
      question: "How much do you charge for web maintenance?",
      answer:
        "I have a webiste maintenance package that includes a variety of services. Please refer to the web maintenance packages for more information. If you need a custom package, please contact me to discuss your needs.",
    },
    {
      question: "How much do you charge to tutor someone for web development?",
      answer:
        "My tutoring services start at $80 dollars an hour. Please contact me to discuss your needs and I will provide a quote based on your needs.",
    },
  ];

  return (
    <section id="faq" className="section bg-light">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-6 order-1 order-lg-0 wow fadeInUp">
            {/* Heading */}
            <p className="text-center text-lg-start mb-2">
              <span className="bg-primary text-dark px-2">FAQ</span>
            </p>
            <h2 className="text-10 fw-600 text-center text-lg-start mb-5">
              Have any questions?
            </h2>
            {/* Heading end*/}

            <Accordion flush defaultActiveKey="0">
              {faqsData.length > 0 &&
                faqsData.map((faq, index) => (
                  <Accordion.Item eventKey={index} key={index}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    ></Accordion.Body>
                  </Accordion.Item>
                ))}
            </Accordion>
          </div>
          <div
            className="col-lg-6 d-flex align-items-center justify-content-center order-0 order-lg-1 wow fadeIn"
            data-wow-delay="1s"
          >
            {" "}
            <img
              className="img-fluid"
              src="images/faq.png"
              title="FAQ"
              alt="faq"
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
