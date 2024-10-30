import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react"

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 | Not Found</h1>
      <Button data-testid='back' onClick={handleBackClick} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Go Back
      </Button>
    </div>
  );
};

export default NotFound;
