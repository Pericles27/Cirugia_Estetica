import "./contacto.css"
const Contacto=()=>{
    return (
        <div className="box" id="contacto">
            <div style={{width:"70%"}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3284.7898315175103!2d-58.4306998!3d-34.5841841!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5b7f938b1f7%3A0x8a5240e78e1ee6c5!2sDra%20Natalia%20De%20Magistra!5e0!3m2!1ses-419!2sar!4v1706987916628!5m2!1ses-419!2sar" style={{border:0,width:"70%",margin:"auto"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div id="direcciones">
                <div className="dir" style={{display:"inline"}}>
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5>Soler 5057, C1425 CABA</h5>
                </div>
                <div className="dir" style={{display:"inline"}}>
                    <i class="bi bi-whatsapp" style={{display:"inline"}}></i>
                    <h5>  +54 9 11 3204-6909</h5>
                </div>
                <div className="dir"  id="instagram" style={{display:"inline"}}>
                    <a href="https://www.instagram.com/dranatidemagistra?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                        <i class="bi bi-instagram"></i>
                        <h4>dranatidemagistra</h4>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Contacto