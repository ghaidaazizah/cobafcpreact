import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Select, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react'
import Footer from "../components/Footer";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const fetchStudent = async () => {
    const response = await fetch("http://localhost:3001/student");
    const data = await response.json();
    setStudents(data);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3001/student/${id}`, { method: "DELETE" });
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  const filteredStudents = filter === "All" ? students : students.filter((s) => s.faculty === filter);

  return (
    <>
      <Navbar />
      <div>
        <Select data-testid='filter' onChange={(e) => setFilter(e.target.value)}>
          <option value='All'>All</option>
          <option value='Fakultas Ekonomi'>Fakultas Ekonomi</option>
          <option value='Fakultas Ilmu Sosial dan Politik'>Fakultas Ilmu Sosial dan Politik</option>
          <option value='Fakultas Teknik'>Fakultas Teknik</option>
          <option value='Fakultas Teknologi Informasi dan Sains'>Fakultas Teknologi Informasi dan Sains</option>
        </Select>
      </div>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <TableContainer>
        <Table id='table-student'>
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Full Name</Th>
              <Th>Faculty</Th>
              <Th>Program Study</Th>
              <Th>Option</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredStudents.map((student, index) => (
              <Tr key={student.id} className='student-data-row'>
                <Td>{index + 1}</Td>
                <Td onClick={() => navigate(`/student/${student.id}`)}>{student.fullname}</Td>
                <Td>{student.faculty}</Td>
                <Td>{student.programStudy}</Td>
                <Td>
                  <button data-testid={`delete-${student.id}`} onClick={() => handleDelete(student.id)}>
                    Delete
                  </button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        </TableContainer>
      )}
      <Footer />
    </>
  );
};

export default Student;
