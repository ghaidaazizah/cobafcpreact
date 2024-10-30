import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header, H1, Section, Button } from "@chakra-ui/react"

const NavBar = () => {
  const navigate = useNavigate();
  const [path, setPath] = useState(null);

  useEffect(() => {
    if (path) {
      navigate(path);
    }
  }, [path, navigate]);

  const handleNavigation = (newPath) => {
    setPath(newPath);
  };

  return (
    <Header>
      <H1 onClick={() => handleNavigation("/")} data-testid='home-page'>
        Student Portal
      </H1> 
      <Section>
        <Button onClick={() => handleNavigation("/student")} data-testid='student-page'>
          All Student
        </Button>
        <Button onClick={() => handleNavigation("/add")} data-testid='add-page'>
          Add Student
        </Button>
      </Section>
    </Header>
  );
};

export default NavBar;
