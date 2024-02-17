import "../rino/rino.css"
import imgRino from "../rino/rinoplastia.jpg"
const Rino = ( ) =>{
    return (
        <div style={{display:"flex",flexWrap:"wrap"}}>
            <h1 style={{margin:"auto"}}>Rinoplastia: Cirugía Estética de Nariz</h1>
            <div id="imagen">
                <img style={{width:"100%"}} src={imgRino}>
                </img>
            </div>
            <div id="item">
                <p className="texto">La rinoplastia, también conocida como cirugía de nariz, es un procedimiento quirúrgico que tiene como objetivo mejorar la apariencia estética y la función nasal.
                    Es una de las cirugías estéticas más comunes y puede abordar una variedad de preocupaciones,
                    desde corregir la forma de la nariz hasta mejorar la respiración.
                </p>
                <div id="lista" style={{width:"50%",borderRadius:15,margin:"auto"}}>
                    <h4>Beneficios: </h4>
                    <ul>
                        <li>
                            <i class="bi bi-check-circle-fill"></i>
                            Armonizacion Facial
                        </li>
                        <li>
                            <i class="bi bi-check-circle-fill"></i>
                            Correccion de lesiones
                        </li>
                    </ul>
                </div>

                <p className="texto">Este procedimiento puede realizarse por razones estéticas, para corregir una nariz que se percibe como demasiado grande, 
                    pequeña, ancha o con alguna irregularidad, así como para corregir problemas respiratorios causados por desviaciones del tabique nasal u otras obstrucciones.
                    Además, la rinoplastia puede ser parte de una cirugía reconstructiva para corregir defectos congénitos o traumáticos en la nariz.
                </p>
            </div>
        </div>
    )
}
export default Rino