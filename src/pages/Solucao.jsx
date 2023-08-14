import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function Solucao() {
  return (
    <>
      <div className="d-flex">
      <div className="image-container">
          <img
            src="https://media.discordapp.net/attachments/808418993446060052/1138501940666441841/pexels-laura-the-explaura-3608263.jpg?width=359&height=536"
            alt="imagem"
            className="img-fluid shadow"
            style={{
              width: "80rem",
              naxHeight:'700px',
              borderRadius: "10px",
              marginRight: "-12rem",
              marginLeft:"5rem",
              marginTop:'5rem'
            }}
          />
        </div>
        <div className="text-container">
          <h1 style={{fontSize: "50px", margin:'70px',marginLeft: "160px", }}>Nossa Solução</h1>
          <p style={{ fontSize: "30px", width: "65%", marginLeft: "160px" }}>
            A Wild Life Protection é uma ONG dedicada à conservação da vida
            selvagem e seus habitats. Atuamos por meio de projetos de
            preservação, conscientização e combate ao tráfico de animais para
            assegurar um futuro sustentável para as espécies ameaçadas.
          </p>
          <Button variant="success" href="/solucao" style={{width:'253px', margin:"50px",marginLeft: "160px"}}>
                  Saiba Mais
          </Button>
        </div>
      </div>
    </>
  );
}

export default Solucao;
