export default function HeaderDisplay({ image, firstName, lastName, title }) {
  return (
    <div className="headerDisplay">
      <img src={image} alt=""/>
      <div className="info">
        <div className="name">
          <p>{firstName}</p>
          <p>{lastName}</p>
        </div>
        <p>{title}</p>
      </div>
    </div>
  );
}
