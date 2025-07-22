export default function ExperienceInput({
  expInputFields,
  handleExpValueChange,
  handleAddExpField,
}) {
  return (
    <div className="experienceInput">
        <h1 className="expTitle">Experience</h1>
      {expInputFields.map((expInputField, index) => (
        <div>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            value={expInputField.company}
            onChange={(e) => handleExpValueChange(index, "company", e)}
          />
          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            value={expInputField.role}
            onChange={(e) => handleExpValueChange(index, "role", e)}
          />
          <label htmlFor="desc">Desc</label>
          <input
            type="text"
            id="desc"
            value={expInputField.desc}
            onChange={(e) => handleExpValueChange(index, "desc", e)}
          />
        </div>
      ))}
      <button onClick={handleAddExpField}>Add field</button>
    </div>
  );
}
