import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Text, Flex, Link } from "@chakra-ui/react";

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
    <Box>
      <Text onClick={() => handleNavigation("/")} data-testid='home-page'>
        Student Portal
      </Text>
      <Flex>
        <Link onClick={() => handleNavigation("/student")} data-testid='student-page'>
          All Student
        </Link>
        <Link onClick={() => handleNavigation("/add")} data-testid='add-page'>
          Add Student
        </Link>
      </Flex>
    </Box>
  );
};

export default NavBar;
