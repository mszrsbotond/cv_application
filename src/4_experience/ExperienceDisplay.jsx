export default function ExperienceDisplay({expInputFields}){
return(
    expInputFields.map((expInputField) => (
        <div>
            <h1>{expInputField.company}</h1>
            <h3>{expInputField.role}</h3>
            <h3>{expInputField.desc}</h3>
        </div>
    ))
)
}