import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import dataService from "././data/dataServices";
import { useAuth0 } from "@auth0/auth0-react";

function ContactMe() {
  const { isAuthenticated, user } = useAuth0();
  const selectedService = useSelector(
    (state) => state.services.selectedService
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [caseDescription, setCaseDescription] = useState("");
  const [consultationType, setConsultationType] = useState("online");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (selectedService) {
      setService(selectedService);
    }
  }, [selectedService]);

  useEffect(() => {
    if (isAuthenticated && user?.email) {
      setEmail(user.email);
    }
  }, [isAuthenticated, user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      service: formData.get("service"),
      caseDescription: formData.get("case"),
      consultationType: formData.get("consultationType"),
    };

    const response = await fetch(
      "https://poirot-m4bt.onrender.com/sendmessage",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      setIsModalOpen(true);
      setName("");
      setEmail("");
      setService("other");
      setCaseDescription("");
      setConsultationType("online");
    } else {
      console.log("error");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleConsultationTypeChange = (event) => {
    setConsultationType(event.target.value);
  };

  return (
    <div className="cases-container">
      <div className="intro-text">
        <p>
          Dear ladies and gentlemen, <br />
          <br />
          Your faithful servant Hercule Poirot is always at your service. If you
          face a mystery shrouded in secrecy, or a case requiring a sharp mind
          and deductive approach, I am here to assist. My experience and skills
          are available to you, and I am ready to offer professional
          consultation. <br /> <br />
          <strong className="strong">Consultation Services:</strong> <br />
          <br />
          <strong className="strong">Personal Consultations:</strong> If you
          wish to arrange a meeting to discuss your case, please contact me to
          set up an appointment.
          <br />
          <br />
          <strong className="strong">Online Consultations:</strong> For those
          who prefer digital communication, I am available for online
          consultations via email or video calls. <br />
          <br />
          <strong className="strong">Service Fees:</strong> Each case is unique,
          and the cost of my services depends on the complexity and requirements
          of the investigation. You can find detailed information about pricing
          and conditions by contacting me. <br />
          <br />
          <strong className="strong">
            My email:{" "}
          </strong> poirot@detective.com <br />
          <br />
          <strong className="strong">Social Networks:</strong> Join me on social
          networks to get the latest information. <br />
        </p>
        <div className="social">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip="Facebook"
          >
            <img
              className="icon-mousetach socialicon"
              src="/contact/detective.png"
              alt="facebook"
              width="50px"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip="Instagram"
          >
            <img
              className="icon-mousetach socialicon"
              src="/contact/instagram.png"
              alt="instagram"
              width="50px"
            />
          </a>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip="Telegram"
          >
            <img
              className="icon-mousetach socialicon"
              src="/contact/telegram.png"
              alt="telegram"
              width="50px"
            />
          </a>
          <a
            href="mailto:poirot@detective.com"
            data-tooltip="puaro@detective.com"
          >
            <img
              className="icon-mousetach socialicon"
              src="/contact/email.png"
              alt="email"
              width="50px"
            />
          </a>
        </div>
        <p>
          <strong className="strong">My Commitment:</strong> Every inquiry will
          be considered with the utmost attention and professionalism. I
          guarantee confidentiality and a meticulous approach to every detail of
          your case. I look forward to the opportunity to help you uncover
          mysteries and find the truth.
          <br />
          <br />
          Best wishes, <br />
          Hercule Poirot
        </p>
      </div>
      <h3>Use the form on the website to submit your inquiry.</h3>

      <form
        method="POST"
        action="/contact"
        id="bookingForm"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="service">Choose a service:</label>
        <select
          id="service"
          name="service"
          required
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="other">Other</option>
          {dataService.map((service) => (
            <option key={service.id} value={service.name}>
              {service.name}
            </option>
          ))}
        </select>
        <br />
        <br />
        <label htmlFor="case">Case description:</label>
        <textarea
          id="case"
          name="case"
          value={caseDescription}
          onChange={(e) => setCaseDescription(e.target.value)}
          required
        ></textarea>
        <br />
        <br />
        <label>Consultation type:</label>
        <br />
        <div className="radio">
          <input
            type="radio"
            id="onlineConsultation"
            name="consultationType"
            value="online"
            checked={consultationType === "online"}
            onChange={handleConsultationTypeChange}
          />
          <label htmlFor="onlineConsultation">Online consultation</label>
          <br />
          <input
            type="radio"
            id="personalConsultation"
            name="consultationType"
            value="personal"
            checked={consultationType === "personal"}
            onChange={handleConsultationTypeChange}
          />
          <label htmlFor="personalConsultation">Private consultation</label>
        </div>
        <br />
        <br />{" "}
        <input className="btn case" type="submit" value="Submit Request" />
      </form>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p className="modal-text">
              Form successfully submitted! Wait for a response.
            </p>

            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactMe;
