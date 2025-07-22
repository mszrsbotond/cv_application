export default function ExperienceInput({
  expInputFields,
  handleExpValueChange,
  handleAddExpField,
}) {
  return (
    <div>
      {expInputFields.map((expInputField, index) => (
        <div>
          <input
            type="text"
            value={expInputField.company}
            onChange={(e) => handleExpValueChange(index, "company", e)}
          />
          <input
            type="text"
            value={expInputField.role}
            onChange={(e) => handleExpValueChange(index, "role", e)}
          />
          <input
            type="text"
            value={expInputField.desc}
            onChange={(e) => handleExpValueChange(index, "desc", e)}
          />
        </div>
      ))}
      <button onClick={handleAddExpField}>Add field</button>
    </div>
  );
}
