import React from 'react';
import ColorSchemesExample from './ColorSchemesExample';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import './Produto.css'; // Importando um arquivo de estilos CSS para personalização

function PgSolucao() {
    return (
        <div>
            <ColorSchemesExample /><br />
            <div className="text-container">
                <div className="content-wrapper">
                <div className="text-content">
                        <h3>Projeto de GPS para a Segurança da Vida Selvagem: Uma Janela em pro da vida</h3><br/>
                        <p>Na vanguarda da conservação da vida selvagem, a Wild Life Protection lança luz sobre um projeto pioneiro que transcende as barreiras convencionais: o sistema de GPS para monitoramento e proteção de animais. Este projeto inovador coloca a tecnologia a serviço da vida selvagem, abrindo uma nova janela para a coexistência pacífica entre seres humanos e animais selvagens.</p>
                        <h5>Entendendo a Necessidade</h5>
                        <p>À medida que estradas, trilhas e redes de transporte se expandem, as áreas de habitat naturais são interrompidas, muitas vezes resultando em conflitos trágicos entre animais e veículos. A Wild Life Protection reconhece a necessidade urgente de encontrar soluções que reduzam esses conflitos e ofereçam segurança tanto para a vida selvagem quanto para os motoristas.</p>
                        
                    </div>
                    <img
                        src="https://media.discordapp.net/attachments/1044250932692647976/1140650697902260234/sistema-gps-em-um-carro-inteligente_copy.jpg?width=890&height=593"
                        alt="imagem"
                        className="img-fluid1 shadow"
                        style={{width:'35rem', height:'30rem'}}
                    />
                    
                </div>
                <h5 style={{marginLeft:'50px' , marginRight:'50px'}}>A Tecnologia Como Aliada</h5>
                <p style={{marginLeft:'50px' , marginRight:'50px'}}>O projeto de GPS desenvolvido pela Wild Life Protection oferece uma perspectiva inovadora para enfrentar esse desafio complexo. Por meio da implantação de sensores de rastreamento e dispositivos de monitoramento em áreas-chave de migração e passagem de animais, conseguimos mapear padrões de movimento, identificar zonas de risco e tomar medidas preventivas eficazes.</p>
                <h5 style={{marginLeft:'50px' , marginRight:'50px'}}>Mapeamento de Migrações e Comportamentos</h5>
                <p style={{marginLeft:'50px' , marginRight:'50px'}}>Através do sistema de GPS, nossa equipe de especialistas pode rastrear as rotas de migração de diversas espécies, identificando padrões de deslocamento e comportamento. Isso não apenas aumenta nossa compreensão da ecologia animal, mas também permite que tomemos medidas para garantir sua segurança, como a implementação de cercas, sinais de trânsito e passagens subterrâneas.</p>
                <h5 style={{marginLeft:'50px' , marginRight:'50px'}}>Alertas em Tempo Real</h5>
                <p style={{marginLeft:'50px' , marginRight:'50px'}}>O sistema de GPS não é apenas uma ferramenta de monitoramento passivo. Ele oferece alertas em tempo real para os motoristas, indicando a presença de animais nas proximidades. Esses alertas permitem que os motoristas reduzam a velocidade e tomem precauções, minimizando as chances de encontros perigosos.</p>
                <h5 style={{marginLeft:'50px' , marginRight:'50px'}}>Uma Ponte para o Futuro</h5>
                <p style={{marginLeft:'50px' , marginRight:'50px'}}>O projeto de GPS para a segurança da vida selvagem não é apenas uma solução para o presente, mas uma ponte para um futuro onde a coexistência harmoniosa entre humanos e animais é uma realidade tangível. A Wild Life Protection acredita que a tecnologia pode ser um veículo para a conservação, permitindo que criaturas selvagens compartilhem o mesmo espaço que nós, sem medo.</p>
                <h5 style={{marginLeft:'50px' , marginRight:'50px'}}>Junte-se a Nós Nessa Jornada Tecnológica</h5>
                <p style={{marginLeft:'50px' , marginRight:'50px'}}>A Wild Life Protection convida você a se juntar a nós nessa jornada tecnológica em prol da segurança da vida selvagem. Ao apoiar nosso projeto de GPS, você está contribuindo diretamente para a proteção de animais em risco e promovendo uma mudança positiva no mundo. Juntos, estamos trilhando um caminho onde humanos e animais podem coexistir, com respeito e segurança como pilares fundamentais.</p><br/>
            </div>

            <Footer />
        </div>
    )
}

export default PgSolucao;
