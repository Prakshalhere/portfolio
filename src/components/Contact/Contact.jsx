import React, { useContext, useRef} from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_agvcfbb",
        "template_hr7f5xp",
        form.current,
        "PV5sjUHuuvSj3_l3l"
      )
      .then(
        (result) => {
          console.log(result.text); 
          e.target.reset();
          toast.success("Thank you for your message! I'll get back to you soon.", {
            position: "top-right",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send the message. Please try again!", {
            position: "top-right",
          });
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
       <ToastContainer
        theme={darkMode ? "dark" : "light"} 
        position="top-right" 
        autoClose={5000} 
        hideProgressBar={false} 
        closeOnClick 
        pauseOnHover 
        draggable 
        pauseOnFocusLoss />

      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span>Get in Touch</span>
          <p>
            Whether you have a question, project idea, or just want to say hello,
            I’d love to hear from you! Feel free to reach out to me through the form on the right. 
            I’m always excited to connect, collaborate, and help bring your ideas to life!
          </p>

          {/* Why Reach Out Section */}
          <div className="reach-out">
            <h3 style={{ color: darkMode ? "white" : "" }}>Why Reach Out?</h3>
            <ul>
              <li>💡 Collaboration: I love collaborating on creative web development projects.</li>
              <li>📞 Consultation: Need guidance on your next project? Let’s chat!</li>
              <li>🌟 General Inquiries: Whether it's about my work or just a friendly conversation, feel free to reach out!</li>
            </ul>
          </div>

          {/* Footer Text */}
          <p style={{ color: darkMode ? "white" : "" }}>Looking forward to hearing from you soon!</p>

          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          {/* <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div> */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
