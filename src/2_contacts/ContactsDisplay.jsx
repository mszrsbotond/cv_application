export default function ContactsDisplay({phoneNum, address, email, site}){
return(
    <div className="contactsDisplay">
        <h1>Contacts</h1>
        <div className="contacts">
            <p>{phoneNum}</p>
            <p>{address}</p>
            <p>{email}</p>
            <p>{site}</p>
        </div>
    </div>
)
}