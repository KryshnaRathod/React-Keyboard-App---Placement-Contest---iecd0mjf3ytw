import "../styles/App.css";
import React, { useState, useEffect } from "react";

const keys = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");

const App = () => {


  return (
    <div className="keyboard">
      <div className="preview">{previewText}</div>
      <div>
        {keys.map((key) => (
          <button
            key={key}
            id={key === ' ' ? 'key-space' : `key-${key}`}
            onClick={handleKeyPress}
          >
            {key === ' ' ? 'Space' : key.toUpperCase()}
          </button>
        ))}
      </div>
      {quote && <div className="quote">{quote}</div>}
    </div>
  );
};

export default App;
