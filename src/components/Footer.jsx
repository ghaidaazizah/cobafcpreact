import { Box } from "@chakra-ui/react";
import { studentId, studentName } from "../Task";

const Footer = () => {
    return (
        <>
            <Box className="footer" bg="gray.800" color="white" p={4} textAlign="center">
                <p className="studentName">{studentName}</p>
                <p className="studentId">{studentId}</p>
            </Box>
        </>
    );
};

export default Footer;
