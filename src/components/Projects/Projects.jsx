import React from "react";
import "./Projects.css";
// import FoodDeliveryImg from "../../img/food-delivery.png";
import EcommerceImg from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <div className="projects-header">
        <h1>Recent Projects</h1>
        <p>Here are some of my recent projects showcasing my skills in full-stack web development.</p>
      </div>

      <div className="projects-container">
        {/* Food Delivery App */}
        <div className="project-card">
          <img src={HOC} alt="Food Delivery App" className="project-image" />
          <div className="project-info">
            <h2>Food Delivery App</h2>
            <p>
              A full-stack application enabling users to browse menus, add items to the cart, and
              make secure payments via Stripe integration. Includes real-time order tracking and
              admin panel for managing restaurants.
            </p>
            <p>
              <strong>Tech Stack:</strong> React, Redux, Node.js, Express.js, MongoDB, Stripe API
            </p>
            <div className="project-buttons">
              <a
                href="https://github.com/your-repo/food-delivery"
                target="_blank"
                rel="noopener noreferrer"
                className="button gradient-button"
              >
                Source Code
              </a>
              <a
                href="https://your-live-app-url.com"
                target="_blank"
                rel="noopener noreferrer"
                className="button outline-button"
              >
                Visit App
              </a>
            </div>
          </div>
        </div>

        {/* E-Commerce Platform */}
        <div className="project-card">
          <img src={EcommerceImg} alt="E-Commerce Platform" className="project-image" />
          <div className="project-info">
            <h2>E-Commerce Platform</h2>
            <p>
              A fully functional e-commerce site with product filtering, user authentication, and
              a dynamic admin dashboard for inventory management. Integrated with PayPal for secure
              payments.
            </p>
            <p>
              <strong>Tech Stack:</strong> React, Node.js, Express.js, MongoDB, PayPal API
            </p>
            <div className="project-buttons">
              <a
                href="https://github.com/your-repo/ecommerce"
                target="_blank"
                rel="noopener noreferrer"
                className="button gradient-button"
              >
                Source Code
              </a>
              <a
                href="https://your-ecommerce-app-url.com"
                target="_blank"
                rel="noopener noreferrer"
                className="button outline-button"
              >
                Visit App
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
