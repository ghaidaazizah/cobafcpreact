import { Box } from "@chakra-ui/react";
// import { studentId, studentName } from "../Task";

const Footer = () => {
  return (
    <Box as='footer' className='footer' bg='gray.800' color='white' p={4} textAlign='center'>
      <p className='studentName'>Ghaida Syafa Azizah</p>
      <p className='studentId'>FS11503666</p>
    </Box>
  );
};

export default Footer;
