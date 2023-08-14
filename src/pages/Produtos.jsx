import ColorSchemesExample from './ColorSchemesExample';
import Card from './card';
import Footer from './Footer';
//import Card2 from './card2';
//import Card3 from './card3';
import Solucao from './Solucao';

import './Produtos.css'

function Produto(){
    return(
        <div>
            <ColorSchemesExample/><br/>

            <div className="container">

            <div>
                <h3>Projeto principal</h3>
                <Solucao/>
            </div>

            <div className="row"><br/>
                <Card/><br/>
            </div>
        </div>
            <Footer/>
        </div>
    )
}

export default Produto