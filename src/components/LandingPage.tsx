import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import backgroundImage from "../images/sukant-sharma-b6rs6V_9lH4-unsplash.jpg";
import logo from "../images/infectiouscontent-icon-1080x1080px.png";
import "../styles/index.css";

/**
 * LandingPage Component
 *
 * This component renders the main landing page for Infectious Content LLC.
 * It includes a contact form, social media links, and SEO metadata.
 */
function LandingPage() {
  // State for form inputs and submission status
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  /**
   * Handle form submission
   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event
   */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Sending...");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch("https://formspree.io/f/xjkbkbgd", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Thanks for your submission!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      setStatus("Oops! There was a problem submitting your form.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Infectious Content LLC - Crafting Contagions</title>
        <meta
          name="description"
          content="Infectious Content LLC crafts contagious marketing messages based on exhaustive market research and business strategy."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.infectiouscontent.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.infectiouscontent.com" />
        <meta
          property="og:title"
          content="Infectious Content LLC - Crafting Contagions"
        />
        <meta
          property="og:description"
          content="Infectious Content LLC crafts contagious marketing messages based on exhaustive market research and business strategy."
        />
        <meta
          property="og:image"
          content={`https://www.infectiouscontent.com${logo}`}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.infectiouscontent.com" />
        <meta
          name="twitter:title"
          content="Infectious Content LLC - Crafting Contagions"
        />
        <meta
          name="twitter:description"
          content="Infectious Content LLC crafts contagious marketing messages based on exhaustive market research and business strategy."
        />
        <meta
          name="twitter:image"
          content={`https://www.infectiouscontent.com${logo}`}
        />

        <meta name="author" content="Infectious Content LLC" />
        <meta
          name="keywords"
          content="content marketing, market research, business strategy, contagious content"
        />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Font Awesome for social media icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4L2RVYBE2D"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4L2RVYBE2D');
          `}
        </script>
      </Helmet>

      <div
        className="wrapper"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <div className="logo-container">
            <img src={logo} alt="Infectious Content LLC" className="logo" />
          </div>
          <p>
            Ready to exponentially raise awareness for your brand? Ignite
            customer engagement and watch your business explode with viral
            marketing.
          </p>
          <p>
            Get market research and business development support today. Schedule
            a free consultation, leverage proven strategies, craft contagious
            content, watch it spread organically, and drive your commercial
            success.
          </p>
          <form onSubmit={handleSubmit}>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
              className="form-control"
              required
            />
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              className="form-control"
              required
            />
            <motion.textarea
              whileFocus={{ scale: 1.05 }}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Message"
              className="form-control"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="btn"
            >
              Contact Us
            </motion.button>
          </form>
          {status && <p className="form-status">{status}</p>}

          {/* Social Media Icons */}
          <div className="social-icons">
            <a
              href="https://www.youtube.com/@infectiouscontent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.instagram.com/infectiouscontent/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.threads.net/@infectiouscontent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-threads"></i>
            </a>
            <a
              href="https://infectiouscontent.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-newspaper"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default LandingPage;
