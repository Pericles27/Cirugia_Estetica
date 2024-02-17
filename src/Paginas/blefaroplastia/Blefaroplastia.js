import "./blefaroplastia.css"
import imgBlef from "./blefaroplastia.jpg"
const Blefaroplastia = ()=>{
    return(
        <div>
            <h1>Blefaroplastia: Renueva tu Mirada</h1>
            <div style={{display:"flex",flexWrap:"wrap"}}>
                <div id="item2">
                    <p id="txt">¡Descubre la blefaroplastia, el procedimiento que puede rejuvenecer tu apariencia eliminando el exceso de piel y grasa alrededor de tus ojos! Este tratamiento de cirugía estética te ofrece la oportunidad de restaurar la juventud y la vitalidad de tu mirada de manera segura y efectiva.
                        <br></br>
                        La blefaroplastia se centra en el área de los párpados superiores e inferiores, 
                        abordando problemas como los párpados caídos, las bolsas de grasa y las ojeras. Durante el procedimiento,
                        se realizan incisiones precisas a lo largo de las líneas naturales de los párpados para minimizar las cicatrices visibles.
                        Luego, se elimina el exceso de piel y grasa, y se tensa la piel restante para lograr un aspecto más joven y fresco.
                    </p>
                </div>
                <div id="imagen2">
                    <img style={{width:"100%"}} src={imgBlef}></img>
                </div>
            </div>

            <p>Este tratamiento es ideal para quienes buscan mejorar la apariencia de sus ojos, ya sea por razones estéticas o funcionales. Los resultados de la blefaroplastia pueden ser sorprendentes, brindando una apariencia más descansada y rejuvenecida que puede mejorar la confianza y la autoestima.</p>

            <p>Si estás listo para darle a tus ojos una nueva vida y rejuvenecer tu mirada, ¡programa hoy mismo una consulta para explorar tus opciones y dar el primer paso hacia una apariencia más joven y vibrante!</p>
        
        </div>
    )
}
export default Blefaroplastia