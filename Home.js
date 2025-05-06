import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import "./Home.css";

const Home = () => {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Initialize navigation

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    if (file) {
      alert(`File ${file.name} uploaded successfully.`);
    } else {
      alert("Please select a file first.");
    }
  };

  const handleLogin = () => {
    setUser({ name: "Anurag Raut" });
  };

  const handleSignup = () => {
    alert("Sign Up functionality will be added here.");
  };

  // New handler to redirect to Case Summaries
  const handleViewSummaries = () => {
    navigate("/casesummaries");
  };

  return (
    <div className="page-container">
      <div className="overlay"></div>
      <div className="content-container">
        <div className="header-section animate-fade-in">
          <div className="logo-container">
            <span className="scales-icon">⚖️</span>
            <h1 className="main-title">Legal Eagle</h1>
          </div>
          <p className="tagline">Your Trusted Legal Document Assistant</p>
        </div>

        {user ? (
          <h2 className="welcome-text animate-slide-up">Welcome, {user.name}!</h2>
        ) : (
          <div className="button-group animate-slide-up">
            <button className="primary-button" onClick={handleLogin}>
              Login
            </button>
            <button className="primary-button" onClick={handleSignup}>
              Sign Up
            </button>
          </div>
        )}

        <div className="upload-card animate-fade-in">
          <div className="upload-content">
            <h3 className="upload-title">
              <span className="document-icon">📄</span>
              Upload Legal Document for Analysis
            </h3>
            <p className="upload-description">
              Upload your legal documents for instant AI-powered analysis
            </p>
            <div className="upload-controls">
              <input
                type="file"
                onChange={handleFileChange}
                accept=".pdf, .doc, .docx, .txt"
                className="file-input"
              />
              <button className="upload-button" onClick={handleFileUpload}>
                Upload Document
              </button>
            </div>
          </div>
        </div>

        {/* New Case Summaries Button */}
        <div className="button-group">
          <button className="primary-button" onClick={handleViewSummaries}>
            View Case Summaries
          </button>
        </div>

        <div className="features-section">
          <div className="feature">
            <span className="feature-icon">🔒</span>
            <h4>Secure & Confidential</h4>
          </div>
          <div className="feature">
            <span className="feature-icon">⚡</span>
            <h4>Fast Analysis</h4>
          </div>
          <div className="feature">
            <span className="feature-icon">📊</span>
            <h4>Detailed Reports</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
