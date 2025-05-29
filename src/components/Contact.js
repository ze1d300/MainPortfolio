import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import contactImg from "../assets/img/contact-img.svg";
import { useState } from "react";

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    setFormDetails(formInitialDetails);
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>

          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "aanimate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get in Touch</h2>

                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="First Name"
                          value={formDetails.firstName}
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                        ></input>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={formDetails.lastName}
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                        ></input>
                      </Col>{" "}
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={formDetails.email}
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        ></input>
                      </Col>{" "}
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          value={formDetails.phone}
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        ></input>
                      </Col>{" "}
                      <Col size={12} sm={6} className="px-1">
                        <textarea
                          rows="6"
                          placeholder="Message"
                          value={formDetails.message}
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p></p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Contact;
