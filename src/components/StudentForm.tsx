import { useState } from "react";
import type { Student } from "./studentTracker";
interface StudentFormProps {
    handleAdd:(newStudent:Student)=>void;
    students:Student[]


}


export default function StudentForm({handleAdd,students}:StudentFormProps) {
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
        age: Number(age),
        grade,
        phone,
        email,
        gender,
        imageUrl,
      };
      handleAdd(newStudent)
      setName("");
      setAge("");
      setGrade("");
      setPhone("");
      setEmail("");
      setGender("others");
      setImageUrl(newStudent.imageUrl || "");
    }
  };

  return (
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
  );
}
