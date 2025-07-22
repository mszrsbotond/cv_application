export default function EducationDisplay({eduInputFields}){
return(
    eduInputFields.map((eduInputField) => (
        <div>
            <h1>{eduInputField.school}</h1>
            <h3>{eduInputField.degree}</h3>
        </div>
    ))
)
}