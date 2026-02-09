import { useState } from "react";
import "./StudentTracker.css";
import StudentCard from "./StudentCard";
import StudentForm from "./StudentForm";

export interface Student {
  id: number;
  name: string;
  age: number;
  grade: string;
  phone: string;
  email: string;
  gender: string;
  imageUrl?: string;
}

const StudentTrackerApp = () => {
  const [students, setStudents] = useState<Student[]>([
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

  const handleAdd = (newStudent: Student) => {
    setStudents((prevstudents) => [...prevstudents, newStudent]);
  };

  const handleDelete = (id: number) => {
    setStudents(students.filter((students) => students.id !== id));
  };

  return (
    <div className="container">
      <header>
        <h1>Student Tracker</h1>
      </header>

      <StudentForm handleAdd={handleAdd} students={students} />
      <div className="student-list">
        <h2>Student List</h2>
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};
export default StudentTrackerApp;
