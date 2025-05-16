import "./styles/Character.scss";

function Character({ characters }) {
  return (
    <>
      <div className="font-new text-center p-5">
        <h2>{characters.name}</h2>
        <img className="img-fluid rounded-pill" src={characters.image}></img>
        <div className="obj-paragraph">
          <p>Status: {characters.status}</p>
          <p>Gender: {characters.gender}</p>
          <p>Species: {characters.species}</p>
        </div>
      </div>
    </>
  );
}

export default Character;
