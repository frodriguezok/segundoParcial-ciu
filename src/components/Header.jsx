import React, { Fragment } from "react";

const Header = ({titulo}) => {
    return(
        <Fragment>
            <div className="header">
                <h1 className="text-center"><img src="https://w7.pngwing.com/pngs/690/884/png-transparent-cat-kitten-silhouette-kitten-white-mammal-animals.png"/>{titulo}</h1>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
                            <button className="btn btn-outline-secondary" type="submit">Buscar</button>
                            </form>
                        </ul>
                        
                            <div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Ayuda
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="paginaEnBlanco.html">Acerca de</a></li>
                                    <li><a className="dropdown-item" href="paginaEnBlanco.html">Preguntas frecuentes</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>         
        </Fragment>
    );
}

export default Header;