import img2 from "../aumento/aumentoimg.png"
import "../aumento/aumento.css"

import Contacto from "../../Componentes/Contacto/contacto"
const AumentoMamario = ()=>{
    return ( 
        <div style={{width:"95%",margin:"auto"}}>
            <div style={{display:"flex",flexWrap:"wrap"}}>
                <div style={{borderRadius:20,backgroundColor:"antiquewhite",padding:10}} id="item">
                    <div>
                        <h1>Descubre tu Confianza y Belleza</h1>
                        <p>Bienvenida a nuestra práctica especializada en el aumento de mamas, donde nos dedicamos a ofrecerte una experiencia única y personalizada para alcanzar tus objetivos estéticos.</p>
                    </div>

                    <div id="aumento-mamas">
                        <h2>¿En qué Consiste el Aumento de Mamas?</h2>
                        <p>El aumento de mamas, también conocido como mamoplastia de aumento, es un procedimiento quirúrgico diseñado para mejorar la forma y el tamaño de los senos.
                            Esta opción popular es ideal para aquellas mujeres que buscan aumentar el volumen de sus senos,
                            restaurar la firmeza después del embarazo o corregir asimetrías.
                        </p>
                        <p >La cirugia implica en colocar implantes mamarios debaje del tórax. La operacion no es dolorosa ya que 
                            se utiliza anestesia general o anestesia local, lo que hace que la paciente no sienta nada durante la intervencion
                        </p>
                    </div>
                </div>
                <div id="imagen">
                    <img style={{width:"100%",borderRadius:20}} src={img2}></img>
                    <div id="lista" style={{width:"100%"}}>
                        <h4>Beneficios: </h4>
                        <ul>
                            <li>
                                <i class="bi bi-check-circle-fill"></i>
                                Equilibrio de la figura
                            </li>
                            <li>
                                <i class="bi bi-check-circle-fill"></i>
                                Mayor seguridad al vestirse
                            </li>
                            <li>
                                <i class="bi bi-check-circle-fill"></i>
                                Mejor proporcion corporal
                            </li>
                            <li>
                            <i class="bi bi-check-circle-fill"></i>
                                Prótesis importadas con garantia de por vida
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{marginTop:10}}>
                <Contacto/>
            </div>
        </div>
    )
}
export default AumentoMamario