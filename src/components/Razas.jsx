import React, { Fragment } from "react";

const Razas = ({raza,img}) => {

    const direccion = raza.wikipedia_url
    
    var imagen = "";
    if(img) {
        imagen = img.url
    } else {
        imagen = "https://www.tophoy.com/wp-content/uploads/2020/07/gato-con-dudas-y-pensando.jpg.webp"
    }

    return(
        <Fragment>
            <div className="text-center">
                <div className="card border-secondary mb-3">
                    <div><br />
                        <img id="gato" className="card-img-top" src={imagen} />
                    </div>
                    <div className="card-body">
                        <h4 className="card-tittle" ><strong>Raza:</strong></h4><br />
                        <div>
                            <p className="card-text">{raza.name}</p> 
                            <hr />
                            <h4><strong>Descripción:</strong></h4><br /><p>{raza.description}</p> 
                            <hr />
                            <h4><strong>Temperamento:</strong></h4><br /><p>{raza.temperament}</p>
                            <hr />
                            <h4><strong>Pais origen: </strong></h4><br /><p>{raza.origin}</p>
                            <hr />
                            <h4><strong>Para más información:</strong></h4> <a href= {direccion}>{direccion}</a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Razas;