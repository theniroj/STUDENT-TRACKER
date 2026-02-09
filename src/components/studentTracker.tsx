import { useEffect, useState } from "react";
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
  const [students, setStudents] = useState<Student[]>(getData() ?? []);


  function getData(){
    const response= localStorage.getItem("Students")
    
    if(response){
      return JSON.parse(response);
    }

  }

  function syncLocalStorage(){
    localStorage.setItem("Students",JSON.stringify(students))
  }

  useEffect(syncLocalStorage ,[students])

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
