import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import "./styles/index.css";

/**
 * App Component
 *
 * This is the root component of the application. It sets up the routing
 * structure for the entire app using React Router.
 *
 * The component uses:
 * - BrowserRouter: For handling routing in the app
 * - Switch: To render only one route at a time
 * - Route: To define individual routes
 *
 * Routes:
 * - /: The main landing page
 * - /privacy-policy: The privacy policy page
 * - /terms-of-service: The terms of service page
 *
 * @returns {JSX.Element} The rendered App component
 */
const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {/* 
          Main Landing Page Route
          The 'exact' prop ensures this route is only matched at exactly "/"
        */}
        <Route exact path="/" component={LandingPage} />

        {/* Privacy Policy Page Route */}
        <Route path="/privacy-policy" component={PrivacyPolicy} />

        {/* Terms of Service Page Route */}
        <Route path="/terms-of-service" component={TermsOfService} />
      </Switch>
    </Router>
  );
};

export default App;
