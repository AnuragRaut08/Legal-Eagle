import React, { useState } from "react";
import "./JudgementPrediction.css";

const JudgementPrediction = () => {
  const [caseType, setCaseType] = useState(""); // Stores selected case type
  const [caseDetails, setCaseDetails] = useState(""); // Stores case details entered by user
  const [predictedJudgment, setPredictedJudgment] = useState(""); // Stores the prediction result
  const [isLoading, setIsLoading] = useState(false); // Tracks loading state

  // Handle prediction based on case type
  const handlePredict = () => {
    if (!caseType) {
      alert("Please select a case type.");
      return;
    }

    if (!caseDetails) {
      alert("Please enter the case details.");
      return;
    }

    setIsLoading(true);

    // Simulating prediction logic
    setTimeout(() => {
      let prediction = "";
      if (caseType === "copyright") {
        prediction =
          "Based on precedents, the court is likely to impose a significant jail term along with a substantial fine, considering the severity of the infringement.";
      } else if (caseType === "property") {
        prediction =
          "मालमत्तेच्या कागदपत्रांच्या आधारे न्यायालय मालकी हक्क फिर्यादीच्या बाजूने निर्णय देऊन मालमत्ता हस्तांतरित करण्याचा आदेश देण्याची शक्यता आहे.";
      } else if (caseType === "contract") {
        prediction =
          "न्यायालय अनुबंध के उल्लंघन को ध्यान में रखते हुए प्रतिवादी पर जुर्माना लगाने का आदेश दे सकता है।";
      }
      setPredictedJudgment(prediction);
      setIsLoading(false);
    }, 2000); // Simulated delay for processing
  };

  return (
    <div className="judgment-prediction-container">
      <h1>Judgment Prediction</h1>

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
          placeholder="Enter the details of the case..."
          value={caseDetails}
          onChange={(e) => setCaseDetails(e.target.value)}
          rows="6"
          className="input-textarea"
        ></textarea>
        <button className="predict-button" onClick={handlePredict}>
          Predict Judgement 
          
        </button>
      </div>

      {/* Loading state */}
      {isLoading && <p className="loading-text">Predicting judgment...</p>}

      {/* Display prediction result */}
      {predictedJudgment && (
        <div className="judgment-result">
          <h3>Predicted Judgment:</h3>
          <p>{predictedJudgment}</p>
        </div>
      )}
    </div>
  );
};

export default JudgementPrediction;
