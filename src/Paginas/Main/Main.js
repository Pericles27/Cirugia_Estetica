import Imagen from "../../Componentes/imagen/Imagen"
import Contacto from '../../Componentes/Contacto/contacto';
import Tratamientos from '../../Componentes/tratamientos/tratamientos';
import Testimonios from "../../Componentes/Testimonios/Tetstimonios";
import "./Main.css"

const Main = () =>{
    return (
        <div>
            <Imagen/>
            <Tratamientos/>
            <div className="embed-container">
                <iframe src="https://www.instagram.com/dranatidemagistra/embed/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" frameborder="0" scrolling="no"></iframe>
            </div>
            <Testimonios/>
            <Contacto/>
        </div>
    )
}
export default Main