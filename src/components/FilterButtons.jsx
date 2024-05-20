// TODO: FilterButtons 컴포넌트를 작성하세요. 필터링 옵션을 선택하는 버튼들을 포함해야 합니다.
function FilterButtons({ setFilteredStudents, initialStudents }) {
  const filterByAge = (minAge) => {
    const filteredByAge = initialStudents.filter((student) => {
      return student.age >= minAge;
    });
    setFilteredStudents(filteredByAge);
  };
  const filterByGrade = (grade) => {
    const filteredByGrade = initialStudents.filter((student) => {
      return student.grade === grade;
    });
    setFilteredStudents(filteredByGrade);
  };
  const resetFilter = () => {
    setFilteredStudents(initialStudents);
  };

  return (
    <div>
      <button
        onClick={() => {
          filterByAge(18);
        }}
      >
        18세 이상
      </button>
      <button
        onClick={() => {
          filterByGrade("A");
        }}
      >
        A등급
      </button>
      <button onClick={resetFilter}>필터 초기화</button>
    </div>
  );
}

export default FilterButtons;
