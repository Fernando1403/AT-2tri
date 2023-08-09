import ColorSchemesExample from "./ColorSchemesExample"
import Carousel from './carousel'
import Card1 from './card'
import Footer from './Footer'
import Proposta from './Proposta'
import 'bootstrap/dist/css/bootstrap.min.css';


function Menu (){
    return(
        <div>
            <ColorSchemesExample/>
            <Carousel/><br/>
            <Proposta/><br/><br/>
            <Card1/><br/>
            <Footer/>
        </div>
    )
}

export default Menu