import { Routes, Route } from "react-router-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Home from "./Routes/Home";
import Student from "./Routes/Student";
import AddStudent from "./Routes/AddStudent";
import EditStudent from "./Routes/EditStudent";
import NotFound from "./Routes/NotFound";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/student/:id" element={<EditStudent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {window.location.pathname !== "/notfound" && <Footer />}
      </Box>
    </ChakraProvider>
  );
};

export default App;
