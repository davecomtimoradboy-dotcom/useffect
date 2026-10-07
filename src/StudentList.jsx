import StudentCard from "./StudentCard";


const student = [
  {
    id: 1,
    name: "ediiiii",
    department: "computer science",
    level: "400"
  },
  {
    id: 2,
    name: "Glory Chukwudi",
    department: "computer science",
    level: "400"
  },
  {
    id: 3,
    name: "Divine Austine",
    department: "computer science",
    level: "400"
  },
  {
    id: 4,
    name: "Okpara Divine",
    department: "computer science",
    level: "400"
  },
  {
    id: 5,
    name: "Mimi",
    department: "computer science",
    level: "400"
  },
  {
    id: 6,
    name: "Daniel Divine",
    department: "computer science",
    level: "400"
  },
  {
    id: 7,
    name: "Destiny Johson",
    department: "computer science",
    level: "400"
  }
];

function StudentList() {
  return (
    <div className="student-list">
      {student.map((student) => (
        <StudentCard
          key={ student.id}
          name={student.name}
          department={student.department}
          level={student.level}
        />
      ))}
    </div>
  );
}

export default StudentList;
