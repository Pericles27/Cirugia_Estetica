import "./Lipo.css"
import imgLipo from "./Lipo.jpg"
const Lipo = ()=>{
    return(
        <div>
            <h1>Liposucción: Remodelado Corporal Preciso</h1>
            <div style={{display:"flex",flexWrap:"wrap"}}>
                <div id="imagen">
                    <img style={{width:"60%",borderRadius:15}} src={imgLipo}></img>
                </div>
                <div id="item">
                    <p className="texto">¡Descubre la liposucción, la solución efectiva para esculpir tu figura y eliminar depósitos de grasa no deseados! Este procedimiento de cirugía estética te ofrece la oportunidad de alcanzar la forma corporal deseada 
                    de manera precisa y con resultados duraderos.</p>
                    <div id="lista" style={{width:"50%",borderRadius:15,margin:"auto"}}>
                        <h4>Beneficios: </h4>
                        <ul>
                            <li>
                                <i class="bi bi-check-circle-fill"></i>
                                Mejora de la salud
                            </li>
                            <li>
                                <i class="bi bi-check-circle-fill"></i>
                                Mejora de apariencia fisica
                            </li>
                            <li>
                                <i class="bi bi-check-circle-fill"></i>
                                Eliminacion de tejido adiposo
                            </li>
                        </ul>
                    </div>
                    <p className="texto">La liposucción se realiza mediante pequeñas incisiones a través de las cuales se insertan cánulas delgadas para aspirar y eliminar la grasa localizada en áreas específicas del cuerpo, como el abdomen, los muslos, las caderas, los brazos y el cuello. Este enfoque permite al cirujano esculpir y contornear el cuerpo de manera personalizada, adaptando el tratamiento a las necesidades y objetivos únicos de cada paciente.
                    <br/>Este procedimiento es ideal para aquellos que luchan con depósitos de grasa que no responden a la dieta y al ejercicio, proporcionando una solución efectiva para mejorar la forma y la definición corporal. Los resultados de la liposucción son visibles de manera inmediata y mejoran aún más con el tiempo a medida que la hinchazón disminuye y el cuerpo se adapta a su nueva forma.</p>
                </div>
            </div>
            <p className="texto">La liposucción es un procedimiento seguro y confiable cuando se realiza por un cirujano plástico experimentado y certificado. Durante tu consulta inicial, nuestro equipo médico evaluará tus objetivos estéticos y te proporcionará información detallada sobre el procedimiento, incluidos los riesgos y las expectativas de recuperación.</p>
        </div>
    )
}
export default Lipo