import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Input } from "@chakra-ui/react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

function EditStudent() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  // const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    fullname: "",
    address: "",
    phoneNumber: "",
    birthDate: "",
    gender: "",
    programStudy: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      const response = await fetch(`http://localhost:3001/student/${id}`);
      const data = await response.json();
      setStudent(data);
      setFormData(data);
      // setLoading(false)
    };
    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const facultyMap = {
      Ekonomi: "Fakultas Ekonomi",
      Manajemen: "Fakultas Ekonomi",
      Akuntansi: "Fakultas Ekonomi",
      "Administrasi Publik": "Fakultas Ilmu Sosial dan Politik",
      "Administrasi Bisnis": "Fakultas Ilmu Sosial dan Politik",
      "Hubungan Internasional": "Fakultas Ilmu Sosial dan Politik",
      "Teknik Sipil": "Fakultas Teknik",
      Arsitektur: "Fakultas Teknik",
      Matematika: "Fakultas Teknologi Informasi dan Sains",
      Fisika: "Fakultas Teknologi Informasi dan Sains",
      Informatika: "Fakultas Teknologi Informasi dan Sains",
    };

    const faculty = facultyMap[formData.programStudy] || "";

    await fetch(`http://localhost:3001/student/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        faculty,
      }),
    });
    navigate("/student"); // Kembali ke halaman student setelah edit
  };

  // if (!student) return <p>Loading ...</p>;

  return (
    <>
      <NavBar />
      {!student ? (
        <p>Loading ...</p>
      ) : (
        <div>
          <h1>Edit Student</h1>
          <form onSubmit={handleSubmit} data-testid='form-student'>
            <div>
              <img src={student.profilePicture} alt='' />
              <label>Fullname:</label>
              <Input type='text' name='fullname' value={formData.fullname} onChange={handleChange} data-testid='name' required />
            </div>
            <div>
              <label>Address:</label>
              <Input type='text' name='address' value={formData.address} onChange={handleChange} data-testid='address' required />
            </div>
            <div>
              <label>Phone Number:</label>
              <Input type='text' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} data-testid='phoneNumber' required />
            </div>
            <div>
              <label>Birth Date:</label>
              <Input type='date' name='birthDate' value={formData.birthDate} onChange={handleChange} data-testid='date' required />
            </div>
            <div>
              <label>Gender:</label>
              <select name='gender' value={formData.gender} onChange={handleChange} data-testid='gender' required>
                <option value=''>Select Gender</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Other'>Other</option>
              </select>
            </div>
            <div>
              <label>Program Study:</label>
              <select name='programStudy' value={formData.programStudy} onChange={handleChange} data-testid='prody' required>
                <option value=''>Select Program Study</option>
                <option value='Ekonomi'>Ekonomi</option>
                <option value='Manajemen'>Manajemen</option>
                <option value='Akuntansi'>Akuntansi</option>
                <option value='Administrasi Publik'>Administrasi Publik</option>
                <option value='Administrasi Bisnis'>Administrasi Bisnis</option>
                <option value='Hubungan Internasional'>Hubungan Internasional</option>
                <option value='Teknik Sipil'>Teknik Sipil</option>
                <option value='Arsitektur'>Arsitektur</option>
                <option value='Matematika'>Matematika</option>
                <option value='Fisika'>Fisika</option>
                <option value='Informatika'>Informatika</option>
              </select>
            </div>
            <Button type='submit' data-testid='edit-btn'>
              Edit Student
            </Button>
          </form>
        </div>
      )}

      <Footer />
    </>
  );
}

export default EditStudent;
