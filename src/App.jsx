import { useState } from "react";
import HeaderInput from "./1_header/HeaderInput";
import HeaderDisplay from "./1_header/HeaderDisplay";
import ContactsInput from "./2_contacts/ContactsInput";
import ContactsDisplay from "./2_contacts/ContactsDisplay";

export default function App() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");

  const [phoneNum, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [site, setSite] = useState("");



  return (
    <div>
      <HeaderInput
        handleImageUpload={handleImageUpload}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setTitle={setTitle}
      />
      <ContactsInput
        setPhoneNum={setPhoneNum}
        setAddress={setAddress}
        setEmail={setEmail}
        setSite={setSite}
      />
      <HeaderDisplay
        image={image}
        fullName={firstName + " " + lastName}
        title={title}
      />
      <ContactsDisplay
        phoneNum={phoneNum}
        address={address}
        email={email}
        site={site}
      />
    </div>
  );
}
