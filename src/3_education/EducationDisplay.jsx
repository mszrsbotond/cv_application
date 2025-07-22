export default function EducationDisplay({eduList}){
    return(
        <ul>
            {eduList.map((item) => (
                <li key={item.id}>{item}</li>
            ))}
        </ul>
    )
}