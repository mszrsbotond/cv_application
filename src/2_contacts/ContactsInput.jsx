export default function ContactsInput({
  setPhoneNum,
  setAddress,
  setEmail,
  setSite,
}) {
  return (
    <div>
      <label htmlFor="phone">Phone Number</label>
      <input
        type="text"
        id="phone"
        onChange={(event) => setPhoneNum(event.target.value)}
      />
      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        onChange={(event) => setAddress(event.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <label htmlFor="site">Site</label>
      <input
        type="text"
        id="site"
        onChange={(event) => setSite(event.target.value)}
      />
    </div>
  );
}
