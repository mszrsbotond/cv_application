export default function EducationInput({
  eduInputFields,
  handleEduValueChange,
  handleAddEduField,
}) {
  return (
    <div className="educationInput">
        <h1 className="eduTitle">Education</h1>
      {eduInputFields.map((eduInputField, index) => (
        <div>
          <label htmlFor="school">School</label>
          <input
            type="text"
            id="school"
            value={eduInputField.school}
            onChange={(e) => handleEduValueChange(index, "school", e)}
          />
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            id="degree"
            value={eduInputField.degree}
            onChange={(e) => handleEduValueChange(index, "degree", e)}
          />
        </div>
      ))}
      <button onClick={handleAddEduField}>Add field</button>
    </div>
  );
}
