import React from "react";
import "./Projects.css";
import CulinaryCornerImg from "../../img/culinary-corner.png";
import EcommerceImg from "../../img/ecommerce.png";


const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <div className="projects-header">
        <h1>Recent Projects</h1>
        <p>
          Here are some of my recent projects showcasing my skills in full-stack
          web development.
        </p>
      </div>

      <div className="projects-container">
        {/* Culinary Corner */}
        <div className="project-card">
          <img src={CulinaryCornerImg} alt="Food Delivery App" className="project-image" />
          <div className="project-info">
            <h2>Culinary Corner</h2>
            <p>
              A food delivery application where users can seamlessly browse
              menus, place orders, and make secure payments using Stripe
              integration. Features include user authentication and an admin
              panel for managing restaurants and orders.
            </p>
            <p>
              <strong>Tech Stack:</strong> React, Node.js, Express.js, MongoDB,
              Stripe, JWT, Context API
            </p>
            <div className="project-buttons">
              <a
                href="https://github.com/Prakshalhere/Culinary-Corner"
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

        {/* Homzy */}
        <div className="project-card">
          <img
            src={EcommerceImg}
            alt="E-Commerce Platform"
            className="project-image"
          />
          <div className="project-info">
            <h2>Homzy</h2>
            <p>
              A real estate platform allowing users to book visits, add
              properties, and manage favorites. Integrated map functionality for
              property locations and secure user authentication via Auth0.
            </p>
            <p>
              <strong>Tech Stack:</strong> React, Node.js, Express.js, MongoDB, Auth0, Prisma
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
