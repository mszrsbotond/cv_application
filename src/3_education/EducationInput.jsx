export default function EducationInput({
  handleSchool, handleDegree, handleLevel, handleAdd
}){
  return(
    <div>
      <label htmlFor="school">School</label>
      <input
      type="text"
      id="school"
      onChange={handleSchool}
      />

<label htmlFor="degree">Degree</label>
      <input
      type="text"
      id="degree"
      onChange={handleDegree}
      />

<label htmlFor="level">Level</label>
      <input
      type="text"
      id="level"
      onChange={handleLevel}
      />

      <button type="button" onClick={handleAdd}>Add</button>

    </div>
  )
}