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
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/student' element={<Student />} />
      <Route path='/add' element={<AddStudent />} />
      <Route path='/student/:id' element={<EditStudent />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
