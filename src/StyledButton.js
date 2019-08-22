import React from 'react';

const StyledButton = ({text, onClick, type}) => (
  <button
    type={type || 'button'}
    onClick={onClick}
    style={{
      backgroundColor: "#3498db",
      borderRadius: "4px",
      border: "none",
      color: "white",
      padding: "5px 20px",
      textAlign: "center",
      textDecoration: "none",
      fontSize: "1em",
    }}
  >
    {text}
  </button>
);

export default StyledButton;