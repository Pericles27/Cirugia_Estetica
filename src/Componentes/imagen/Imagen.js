import "../imagen/imagen.css"
const Imagen = ()=>{
    return (
        <div style={{paddingTop:150, height:"45vh"}}>
            <h1>Dra. Natalia De Magistra</h1>
            <h5>Cirugía plastica & medicina estetica</h5>
            <button type="button" id="btn" class="btn btn-primary btn-lg">
                <a href="https://wa.me/5491132046909" target="_blank">
                    <i class="bi bi-whatsapp" style={{display:"inline",marginRight:5}}></i>
                    Reservá tu turno
                </a>
            </button>
        </div>
    )
}
export default Imagen