import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function Solucao() {
  return (
    <>
      <div className="d-flex">
      <div className="image-container">
          <img
            src="https://media.discordapp.net/attachments/1044250932692647976/1140620511441862817/Design_sem_nome.png"
            alt="imagem"
            className="img-fluid "
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
            A Wild Life Protection teve a ideia de por uma integração com o GPS, colocar icones e avisos de animais no própio GPS com objetivo de maior segurança tanto dos animais quanto das pessoas que estiverem passando na área.
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
