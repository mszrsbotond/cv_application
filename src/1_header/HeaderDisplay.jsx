export default function HeaderDisplay({ image, fullName, title }) {
  return (
    <div>
      <img src={image} alt="" height='200px'/>
      <h1>{fullName}</h1>
      <h3>{title}</h3>
    </div>
  );
}
