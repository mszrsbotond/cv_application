import { useState } from "react";
import HeaderInput from "./1_header/HeaderInput";
import HeaderDisplay from "./1_header/HeaderDisplay";
import ContactsInput from "./2_contacts/ContactsInput";
import ContactsDisplay from "./2_contacts/ContactsDisplay";
import EducationInput from "./3_education/EducationInput";
import EducationDisplay from "./3_education/EducationDisplay";
import ExperienceInput from "./4_experience/ExperienceInput";
import ExperienceDisplay from "./4_experience/ExperienceDisplay";
import SkillInput from "./5_skills/SkillsInput";
import SkillDisplay from "./5_skills/SkillsDisplay";

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

  const [eduInputFields, setEduInputFields] = useState([
    { school: "", degree: "" },
  ]);

  const handleEduValueChange = (index, type, event) => {
    const values = [...eduInputFields];
    values[index][type] = event.target.value;
    setEduInputFields(values);
  };

  const handleAddEduField = () => {
    setEduInputFields([...eduInputFields, { school: "", degree: "" }]);
  };

  const [expInputFields, setExpInputFields] = useState([
    { company: "", role: "", desc: "" },
  ]);

  const handleExpValueChange = (index, type, event) => {
    const values = [...expInputFields];
    values[index][type] = event.target.value;
    setExpInputFields(values);
  };

  const handleAddExpField = () => {
    setExpInputFields([...expInputFields, { company: "", role: "", desc: "" }]);
  };


const [skillInputFields, setSkillInputFields] = useState([
    {skill:""},
  ]);

  const handleSkillValueChange = (index,event) => {
    const values = [...skillInputFields];
    values[index].skill = event.target.value;
    setSkillInputFields(values);
  };

  const handleAddSkillField = () => {
    setSkillInputFields([...skillInputFields, { skill:""}]);
  };

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

      <EducationInput
        eduInputFields={eduInputFields}
        handleEduValueChange={handleEduValueChange}
        handleAddEduField={handleAddEduField}
      />

      <ExperienceInput
        expInputFields={expInputFields}
        handleExpValueChange={handleExpValueChange}
        handleAddExpField={handleAddExpField}
      />

<SkillInput
        skillInputFields={skillInputFields}
        handleSkillValueChange={handleSkillValueChange}
        handleAddSkillField={handleAddSkillField}
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
      <EducationDisplay eduInputFields={eduInputFields} />
      <ExperienceDisplay expInputFields={expInputFields} />
      <SkillDisplay skillInputFields={skillInputFields} />
    </div>
  );
}
