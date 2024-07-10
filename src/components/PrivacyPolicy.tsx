import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../images/infectiouscontent-icon-1080x1080px.png";

/**
 * PrivacyPolicy Component
 *
 * This component renders the Privacy Policy page for Infectious Content LLC.
 * It maintains a consistent style with the main LandingPage component.
 *
 * Features:
 * - SEO optimization using React Helmet
 * - Animated content using Framer Motion
 * - Consistent styling with the main landing page
 * - Navigation back to the home page
 *
 * @returns {JSX.Element} The rendered PrivacyPolicy component
 */
const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Infectious Content LLC</title>
        <meta
          name="description"
          content="Privacy Policy for Infectious Content LLC - Learn how we protect your data and respect your privacy."
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

          <h1>Privacy Policy</h1>

          <p>
            Our Privacy Policy is currently being updated to ensure compliance
            with the latest data protection regulations. We are committed to
            protecting your privacy and handling your data with transparency and
            care.
          </p>

          <p>Key points of our privacy practices include:</p>

          <ul>
            <li>
              We only collect information that is necessary for providing our
              services
            </li>
            <li>Your data is never sold to third parties</li>
            <li>
              We use industry-standard security measures to protect your
              information
            </li>
            <li>
              You have the right to access, modify, or delete your personal data
            </li>
          </ul>

          <p>
            If you have any immediate questions or concerns about our privacy
            practices, please contact us at{" "}
            <a href="mailto:privacy@infectiouscontent.com">
              privacy@infectiouscontent.com
            </a>
            .
          </p>

          <p>
            We appreciate your patience as we finalize our comprehensive privacy
            policy. Check back soon for the full version.
          </p>

          <Link to="/" className="btn">
            Back to Home
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
