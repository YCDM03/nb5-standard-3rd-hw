function StudentList({ filteredStudents }) {
  return (
    <ul>
      {filteredStudents.map((student) => {
        const { name, age, grade } = student;
        return (
          <li key={name}>
            <p>{name}</p>
            <p>{age}</p>
            <p>{grade}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default StudentList;
