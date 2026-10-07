function StudentCard({ name, department, level }) {
  return (
    <div>
      <h1>Dynamic Rendering</h1>
      <p>Name: {name}</p>
      <p>Department: {department}</p>
      <p>Level: {level}</p>
    </div>
  );
}

export default StudentCard;