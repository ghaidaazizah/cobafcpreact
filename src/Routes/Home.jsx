import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react"
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/student");
  };

  return (
    <>
      <h1>Home</h1>
      <p>Welcome to the Home page</p>
      <Button data-testid='student-btn' onClick={handleButton}>
        All Student
      </Button>
      <Footer />
    </>
  );
};

export default Home;
