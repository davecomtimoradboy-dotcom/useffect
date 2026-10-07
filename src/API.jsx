import { useEffect, useState } from "react";

function StudentDirectory() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchStudent() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
          throw new Error("Request Failed");
        }

        const data = await response.json();
        setStudents(data);
      } catch {
        setError("Unable to load students");
      } finally {
        setLoading(false);
      }
    }

    fetchStudent();
  }, []);

  if (loading) {
    return <h2>loading students.....</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <h3>{student.email}</h3>
        </div>
      ))}
    </div>
  );
}

export default StudentDirectory;