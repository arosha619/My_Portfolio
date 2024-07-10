import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import Spinner from "./Pages/Spinner/Spinner";
import { useState, useEffect } from "react";
import ReactGA from 'react-ga';


const initializeAnalytics = () => {
  ReactGA.initialize('G-RLKF7V2SLC'); // Replace with your Tracking ID
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initializeAnalytics();
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Spinner/>;
  }
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
