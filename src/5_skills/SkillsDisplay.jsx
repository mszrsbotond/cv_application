export default function SkillDisplay({ skillInputFields }) {
  return (
    <div className="skillsDisplay">
      <h1>Skills</h1>
      {skillInputFields.map((skillInputField) => (
        <div className="skills">
          <p>{skillInputField.skill}</p>
        </div>
      ))}
    </div>
  );
}
