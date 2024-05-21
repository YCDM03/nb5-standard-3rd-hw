// TODO: FilterButtons 컴포넌트를 작성하세요. 필터링 옵션을 선택하는 버튼들을 포함해야 합니다.
function FilterButtons({ setFilteredStudents, initialStudents }) {
  const baseAge = 18;
  const baseGrade = "A";
  const filterByAge = () => {
    const ageFilter = (minAge) => {
      const filteredByAge = initialStudents.filter((student) => {
        return student.age >= minAge;
      });
      setFilteredStudents(filteredByAge);
    };
    ageFilter(baseAge);
  };

  const filterByGrade = () => {
    const gradeFillter = (grade) => {
      const filteredByGrade = initialStudents.filter((student) => {
        return student.grade === grade;
      });
      setFilteredStudents(filteredByGrade);
    };
    gradeFillter(baseGrade);
  };

  const resetFilter = () => {
    setFilteredStudents(initialStudents);
  };

  return (
    <div>
      <button onClick={filterByAge}>18세 이상</button>
      <button onClick={filterByGrade}>A등급</button>
      <button onClick={resetFilter}>필터 초기화</button>
    </div>
  );
}

export default FilterButtons;
