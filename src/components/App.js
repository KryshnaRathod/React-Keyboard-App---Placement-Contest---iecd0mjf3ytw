import "../styles/App.css";
import React, { useState, useEffect } from "react";

const keys = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");

const App = () => {

  const [previewText, setPreviewText] = useState("");

  useEffect(() => {
    if (previewText.toLowerCase() === "forty two") {
      fetchQuote();
    }
  }, [previewText]);

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      // Assuming the API response contains a 'content' property for the quote
      const quote = data.content;
      // Update the preview text and set the quote
      setPreviewText(quote);
    } catch (error) {
      console.log("Error fetching quote:", error);
    }
  };

  const handleKeyPress = (key) => {
    const newPreviewText = previewText + key;
    setPreviewText(newPreviewText);
  };

  return (
    <div className="keyboard">
      <div className="preview">{previewText}</div>
      <div>
        {keys.map((key) => (
          <button
            key={key}
            id={key === " " ? `key-space` : `key-${key}`}
            onClick={() => handleKeyPress(key)}
          >
            {key === " " ? "Space" : key.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
