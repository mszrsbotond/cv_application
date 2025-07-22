export default function EducationInput({
  eduInputFields,
  handleEduValueChange,
  handleAddEduField,
}) {
  return (
    <div>
      {eduInputFields.map((eduInputField, index) => (
        <div>
          <input
            type="text"
            value={eduInputField.school}
            onChange={(e) => handleEduValueChange(index, "school", e)}
          />
          <input
            type="text"
            value={eduInputField.degree}
            onChange={(e) => handleEduValueChange(index, "degree", e)}
          />
        </div>
      ))}
      <button onClick={handleAddEduField}>Add field</button>
    </div>
  );
}
