import  type { Student } from "./studentTracker";
interface StudentsCardProps {
  student: Student;

  handleDelete: (id: number) => void; 
} 

const StudentCard = ({ student, handleDelete }: StudentsCardProps) => (
  <div className="card">
    {student.imageUrl ? (
      <img src={student.imageUrl} alt={student.name} className="profile-pic" />
    ) : (
      <div className="profile-pic"></div>
    )}
    <div className="profile-pic"></div>
    <div className="details">
      <h3>{student.name}</h3>
      <p>Age: {student.age}</p>
      <p>Grade: {student.grade}</p>
      <p>Phone: {student.phone}</p>
      <p>Email: {student.email}</p>
      <p>Gender: {student.gender}</p>

      <button onClick={() => handleDelete(student.id)} className="dlt-btn">
        delete
      </button>
    </div>
  </div>
);
export default StudentCard;