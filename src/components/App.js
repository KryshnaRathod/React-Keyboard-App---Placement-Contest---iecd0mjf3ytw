import "../styles/App.css";
import React, { useState, useEffect } from "react";

const keys = 'abcdefghijklmnopqrstuvwxyz0123456789 '.split('');

const App = () => {
  const [previewText, setPreviewText] = useState('');
  const [quote, setQuote] = useState('');

  useEffect(() => {
    if (previewText.toLowerCase() === 'forty two') {
      fetchQuote();
    } else {
      setQuote('');
    }
  }, [previewText]);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
    } catch (error) {
      console.log('Error fetching quote:', error);
    }
  };

  const handleKeyPress = (event) => {
    const keyPressed = event.target.id.split('-')[1];
    const newPreviewText = previewText + keyPressed;
    setPreviewText(newPreviewText);
  };

  return (
    <div className="keyboard">
      <div className="preview">{previewText}</div>
      <div>
        {keys.map((key) => (
          <button
            key={key}
            id={`key-${key}`}
            onClick={handleKeyPress}
          >
            {key === ' ' ? 'Space' : key.toUpperCase()}
          </button>
        ))}
      </div>
      {previewText.toLowerCase() === 'forty two' && (
        <div className="quote">{quote}</div>
      )}
    </div>
  );
};

export default App;
 
  

