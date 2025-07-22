export default function HeaderInput({
  handleImageUpload,
  setFirstName,
  setLastName,
  setTitle,
}) {
  return (
    <div className="headerInput">
      <h1 className="namerole">Name and Role</h1>
      <label htmlFor="image">Image</label>
      <input
        type="file"
        id="image"
        onChange={handleImageUpload}
      />
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        onChange={(event) => setFirstName(event.target.value)}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        onChange={(event) => setLastName(event.target.value)}
      />
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        onChange={(event) => setTitle(event.target.value)}
      />
    </div>
  );
}
