import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <img src="/src/assets/WLP4.png" alt="" width={'300px'}/>
            <p>
            A Wild Life Protection é uma ONG dedicada à conservação da vida selvagem e seus habitats. Atuamos por meio de projetos de preservação, conscientização e combate ao tráfico de animais para assegurar um futuro sustentável para as espécies ameaçadas.
            </p>
          </div>
          <div className="footer-section links">
            <h3>Links</h3>
            <ul>
              <li><a href="/">Início</a></li>
              <li><a href="/produtos">Projetos</a></li>
              <li><a href="/contato">Contato</a></li>
              <li><a href="/sobre">Sobre nós</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contato</h3>
            <p>
              <i className="fa fa-phone"></i> (99) 9999-9999
            </p>
            <p>
              <i className="fa fa-envelope"></i> suporte@wlp.com
            </p>
            <p>
              <i className="fa fa-map-marker"></i> Rua FIAP SCHOOL, 123 - São Paulo - SP
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Wild Life Protect. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;