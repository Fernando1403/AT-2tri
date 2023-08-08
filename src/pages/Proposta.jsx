import "bootstrap/dist/css/bootstrap.min.css";

function Proposta() {
  return (
    <>
      <div className="d-flex">
        <div className="text-container">
          <h3 style={{ marginLeft: "70px" }}>Nossa Proposta</h3>
          <p style={{ fontSize: "30px", width: "60%", marginLeft: "70px" }}>
            A Wild Life Protection é uma ONG dedicada à conservação da vida
            selvagem e seus habitats. Atuamos por meio de projetos de
            preservação, conscientização e combate ao tráfico de animais para
            assegurar um futuro sustentável para as espécies ameaçadas.
          </p>
        </div>
        <div className="image-container">
          <img
            src="https://media.discordapp.net/attachments/808418993446060052/1138501940666441841/pexels-laura-the-explaura-3608263.jpg?width=359&height=536"
            alt="imagem"
            className="img-fluid shadow"
            style={{
              width: "80rem",
              naxHeight:'700px',
              borderRadius: "10px",
              marginLeft: "-12rem",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Proposta;
