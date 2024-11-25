import React, { useState } from "react";
import "./DocumentGeneration.css";

const DocumentGeneration = () => {
  const [caseType, setCaseType] = useState(""); // Stores selected case type
  const [caseDetails, setCaseDetails] = useState(""); // Stores case details entered by user
  const [legalAdvice, setLegalAdvice] = useState(""); // Stores the generated legal advice
  const [isLoading, setIsLoading] = useState(false); // Tracks loading state

  // Handle advice generation based on case type
  const handleGetAdvice = () => {
    if (!caseType) {
      alert("Please select a case type.");
      return;
    }

    if (!caseDetails) {
      alert("Please enter the case details.");
      return;
    }

    setIsLoading(true);

    // Simulating advice generation logic
    setTimeout(() => {
      let advice = "";
      if (caseType === "copyright") {
        advice =
          "Compile detailed financial records and evidence to substantiate the fraud claim. Seek restitution for losses and ensure collaboration with financial forensic experts to strengthen the case.";
      } else if (caseType === "property") {
        advice =
          "मालमत्तेच्या मालकीचे पुरावे, कर भरल्याच्या पावत्या आणि संबंधित कायदेशीर कागदपत्रे व्यवस्थित सादर करा. कायदेशीर प्रक्रियेसाठी तज्ज्ञ वकीलांची मदत घ्या आणि विवादास संपूर्ण पुराव्यांच्या आधारे सोडवण्याचा प्रयत्न करा.";
      } else if (caseType === "contract") {
        advice =
          "अनुबंध की शर्तों और उल्लंघन को स्पष्ट करने वाले सभी दस्तावेजों को प्रस्तुत करें। क्षतिपूर्ति के लिए उचित दावे करें और सुनिश्चित करें कि भविष्य के विवादों से बचने के लिए अनुबंध की शर्तों को अधिक स्पष्ट रूप से परिभाषित किया जाए।";
      }
      setLegalAdvice(advice);
      setIsLoading(false);
    }, 2000); // Simulated delay for processing
  };

  return (
    <div className="document-generation-container">
      <h1>Legal Advice</h1>
      
      {/* Dropdown for case type selection */}
      <div className="case-type-selector">
        <label htmlFor="caseType">Select Case Type:</label>
        <select
          id="caseType"
          value={caseType}
          onChange={(e) => setCaseType(e.target.value)}
          className="case-type-dropdown"
        >
          <option value="">-- Select --</option>
          <option value="copyright">CopyRight Infringement</option>
          <option value="property">Property Dispute</option>
          <option value="contract">Breach of Contract</option>
        </select>
      </div>

      {/* Input for case details */}
      <div className="input-section">
        <textarea
          placeholder="Enter details about the case..."
          value={caseDetails}
          onChange={(e) => setCaseDetails(e.target.value)}
          rows="6"
          className="input-textarea"
        ></textarea>
        <button className="get-advice-button" onClick={handleGetAdvice}>
          Get Legal Advice
        </button>
      </div>

      {/* Loading state */}
      {isLoading && <p className="loading-text">Generating legal advice...</p>}

      {/* Display legal advice */}
      {legalAdvice && (
        <div className="legal-advice-result">
          <h3>Legal Advice:</h3>
          <p>{legalAdvice}</p>
        </div>
      )}
    </div>
  );
};

export default DocumentGeneration;
