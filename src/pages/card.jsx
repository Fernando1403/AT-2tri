/*import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://imgnike-a.akamaihd.net/768x768/02630351.jpg" />
      <Card.Body>
        <Card.Title>Dunk Low Retro SE</Card.Title>
        <Card.Text>
            Light Silver and Ocean Bliss
        </Card.Text>
        <Card.Text>
        <h6>R$ 899,99</h6>
        </Card.Text>
        <Button variant="success" href='/produto1'>Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;*/

import DataBase from "../db.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function Card1() {
  return (
    <>
    <h3 className="container d-flex justify-content-center">Nossos Projetos</h3><br/>
    <div className="d-flex p-2 justify-content-around">
      {DataBase.map((DataBase) => {
        return (
          <>
            <Card className="img-fluid shadow" style={{ width: "18rem"}}>
              <Card.Img variant="top" src={DataBase.img} />
              <Card.Body>
                <Card.Title>{DataBase.nome}</Card.Title>
                <Card.Text>{DataBase.descrição}</Card.Text>
                <Button variant="secondary" href={DataBase.href} style={{width:'253px'}}>
                  Ver Mais
                </Button>
              </Card.Body>
            </Card>
          </>
        );
      })}
    </div>
    </>
  );
}

export default Card1;
