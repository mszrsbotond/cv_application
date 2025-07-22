export default function ContactsDisplay({phoneNum, address, email, site}){
return(
    <div>
        <h1>{phoneNum}</h1>
        <h1>{address}</h1>
        <h1>{email}</h1>
        <h1>{site}</h1>
    </div>
)
}