export default function App() {
  const students = [
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
  ];

  const filteredStudents = students.filter((student) => {
    return student.age >= 18;
  });

  return (
    <div>
      <h1>학생 목록</h1>
      <ul>
        {filteredStudents.map(({ name, age, grade }) => {
          return (
            <li
              key={name}
              onClick={() => {
                alert(`age:${age} grade:${grade}`);
              }}
              style={{ cursor: "pointer" }}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
