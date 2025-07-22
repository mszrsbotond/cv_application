export default function EducationDisplay({ eduInputFields }) {
  return (
    <div className="educationDisplay">
      <h1>Education</h1>
      {eduInputFields.map((eduInputField) => (
        <div className="education">
          <p>{eduInputField.school}</p>
          <p>{eduInputField.degree}</p>
        </div>
      ))}
    </div>
  );
}
