import "./tratamientos.css"
const Tratamientos = ()=>{
    return(
        <div className="btn-group a" role="group" aria-label="Basic example">
            <button type="button" class="btn boton">Presentación</button>
            <button type="button" class="btn boton">Tratamientos</button>
            <button type="button" class="btn boton"><a href="#Testimonios">Testimonios</a></button>
            <button type="button" class="btn boton"><a href="#contacto">contacto</a></button>
        </div>
    )
}
export default Tratamientos