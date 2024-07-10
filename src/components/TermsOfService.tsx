import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../images/infectiouscontent-icon-1080x1080px.png";

/**
 * TermsOfService Component
 *
 * This component renders the Terms of Service page for Infectious Content LLC.
 * It maintains a consistent style with the main LandingPage component.
 *
 * Features:
 * - SEO optimization using React Helmet
 * - Animated content using Framer Motion
 * - Consistent styling with the main landing page
 * - Navigation back to the home page
 *
 * @returns {JSX.Element} The rendered TermsOfService component
 */
const TermsOfService: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Infectious Content LLC</title>
        <meta
          name="description"
          content="Terms of Service for Infectious Content LLC - Understand the terms governing the use of our services."
        />
      </Helmet>

      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <div className="logo-container">
            <img src={logo} alt="Infectious Content LLC" className="logo" />
          </div>

          <h1>Terms of Service</h1>

          <p>
            Our Terms of Service are currently being refined to provide you with
            the clearest understanding of the agreement between Infectious
            Content LLC and our clients.
          </p>

          <p>Key aspects of our terms include:</p>

          <ul>
            <li>Description of services provided by Infectious Content LLC</li>
            <li>Client responsibilities and expectations</li>
            <li>Intellectual property rights</li>
            <li>Payment terms and conditions</li>
            <li>Limitation of liability</li>
            <li>Termination clauses</li>
          </ul>

          <p>
            If you have any immediate questions about our services or the terms
            under which we operate, please reach out to us at{" "}
            <a href="mailto:legal@infectiouscontent.com">
              legal@infectiouscontent.com
            </a>
            .
          </p>

          <p>
            We appreciate your understanding as we finalize our comprehensive
            Terms of Service. Please check back soon for the complete document.
          </p>

          <Link to="/" className="btn">
            Back to Home
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default TermsOfService;
