export default function SkillInput({
  skillInputFields,
  handleSkillValueChange,
  handleAddSkillField,
}) {
  return (
    <div className="skillsInput">
        <h1 className="skillsTitle">Skills</h1>
      {skillInputFields.map((skillInputField, index) => (
        <div>
          <input
            type="text"
            value={skillInputField.skill}
            onChange={(e) => handleSkillValueChange(index, e)}
          />
        </div>
      ))}
      <button onClick={handleAddSkillField}>Add field</button>
    </div>
  );
}
