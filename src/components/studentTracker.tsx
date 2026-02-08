import { useState } from "react";
import "./StudentTracker.css";
1;

const StudentCard = ({ students, handleDelete }) => (
  <div className="card">
    {students.imageUrl ? (
      <img src={students.imageUrl} alt={students.name} className="profile-pic" />
    ) : (
      <div className="profile-pic"></div>
    )}
    <div className="profile-pic"></div>
    <div className="details">
      <h3>{students.name}</h3>
      <p>Age: {students.age}</p>
      <p>Grade: {students.grade}</p>
      <p>Phone: {students.phone}</p>
      <p>Email: {students.email}</p>
      <p>Gender: {students.gender}</p>

      <button onClick={() => handleDelete(students.id)} className="dlt-btn">
        delete
      </button>
    </div>
  </div>
);

const StudentTrackerApp = () => {
  const [students, setStudents] = useState<students[]>([
    {
      id: 1,
      name: "Ashish Baduwal",
      age: 20,
      grade: "A",
      phone: "123-456-7890",
      email: "ashishbaduwal@example.com",
      gender: "male",
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Niraj Baduwal",
      age: 22,
      grade: "B",
      phone: "987-654-3210",
      email: "nirajbaduwal@example.com",
      gender: "male",
      imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
    },
  ]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("others");
  const [imageUrl, setImageUrl] = useState("");

  const addStudent = () => {
    if (!name || !age || !grade || !phone || !email || !gender || !imageUrl) {
      const newStudent = {
        id: students.length + 1,
        name,
        age,
        grade,
        phone,
        email,
        gender,
        imageUrl,
      };
      setStudents([...students, newStudent]);

      setName("");
      setAge("");
      setGrade("");
      setPhone("");
      setEmail("");
      setGender("others");
      setImageUrl(newStudent.imageUrl || "");
    }
  };
 

  const handleDelete = (id: number) => {
    setStudents(students.filter((students) => students.id !== id));
  };

  return (
    <div className="container">
      <header>
        <h1>Student Tracker</h1>
      </header>

      <div className="form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="others">Others</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <button onClick={addStudent}>Add Student</button>
      </div>
      <div className="student-list">
        <h2>Student List</h2>
        {students.map((student) => (
          <StudentCard
            key={student.id}
            students={student}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};
export default StudentTrackerApp;
