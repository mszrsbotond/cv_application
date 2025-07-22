export default function SkillDisplay({skillInputFields}){
return(
    skillInputFields.map((skillInputField) => (
        <div>
            <h1>{skillInputField.skill}</h1>
        </div>
    ))
)
}