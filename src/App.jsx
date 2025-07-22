import { useState } from "react";
import './style.css'
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
  const [image, setImage] = useState('src/kep.jpg');

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const [firstName, setFirstName] = useState("Botond");
  const [lastName, setLastName] = useState("Meszaros");
  const [title, setTitle] = useState("Software Engineer");

  const [phoneNum, setPhoneNum] = useState("3630764832");
  const [address, setAddress] = useState("Hungary, Budapest Bécsi út 17");
  const [email, setEmail] = useState("botondtest@gmail.com");
  const [site, setSite] = useState("https://github.com/mszrsbotond");

  const [eduInputFields, setEduInputFields] = useState([
    { school: "Obudai Egyetem", degree: "Computer Engineering" },
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
    { company: "Google", role: "Software Architect", desc: "Designed high usage APIs" },
  ]);

  const handleExpValueChange = (index, type, event) => {
    const values = [...expInputFields];
    values[index][type] = event.target.value;
    setExpInputFields(values);
  };

  const handleAddExpField = () => {
    setExpInputFields([...expInputFields, { company: "", role: "", desc: "" }]);
  };

  const [skillInputFields, setSkillInputFields] = useState([{ skill: "React" }]);

  const handleSkillValueChange = (index, event) => {
    const values = [...skillInputFields];
    values[index].skill = event.target.value;
    setSkillInputFields(values);
  };

  const handleAddSkillField = () => {
    setSkillInputFields([...skillInputFields, { skill: "" }]);
  };

  return (
    <div className="main">
      <div className="inputs">
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
      </div>
      <div className="displays">
        <HeaderDisplay
          image={image}
          firstName={firstName}
          lastName={lastName}
          title={title}
        />
        <ContactsDisplay
          phoneNum={phoneNum}
          address={address}
          email={email}
          site={site}
        />
        <EducationDisplay eduInputFields={eduInputFields} />
        <SkillDisplay skillInputFields={skillInputFields} />
        <ExperienceDisplay expInputFields={expInputFields} />
      </div>
    </div>
  );
}
