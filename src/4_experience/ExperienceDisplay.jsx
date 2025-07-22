export default function ExperienceDisplay({ expInputFields }) {
  return (
    <div className="experienceDisplay">
      <h1>Experience</h1>
      {expInputFields.map((expInputField) => (
        <div className="experience">
          <p className="company">{expInputField.company}</p>
          <p className="role">{expInputField.role}</p>
          <p className="desc">{expInputField.desc}</p>
        </div>
      ))}
    </div>
  );
}
