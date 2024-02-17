import "./NavBar.css"
import img1 from "./logo.jpg"
import { Link } from "react-router-dom"
const NavBar = ()=> {
    return(
        <div className="navbar navbar-expand-lg bg-body-tertiary" id="Navegador">
            <div className="container-fluid" style={{backgroundColor:"rgb(243, 215, 183)"}}>
                <Link class="navbar-brand" to={'/'} style={{textDecoration:'none',border:"0px"}}>
                    <img style={{height:75}} src={img1}></img>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={'/Aumento-Mamario'} style={{textDecoration:'none'}}>Aumento Mamario</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to={'/Rinoplastia'} style={{textDecoration:'none'}}>Rinoplastia</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to={'/Liposuccion'} style={{textDecoration:'none'}}>Liposuccion</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cirugia facial
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link class="dropdown-item" to={'/Blefaroplastia'} style={{textDecoration:'none'}}>Blefaroplastia</Link></li>
                                <li><Link class="dropdown-item" to={'/Lifting'} style={{textDecoration:'none'}}>Lifting facial</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={'/'} style={{textDecoration:'none'}}>Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default NavBar