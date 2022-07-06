import { Fragment, useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Razas from './components/Razas';


function App() {

  //Inicializo el almacenamiento local creando y transformando una variable a formato json
  let razaAlmacenada = JSON.parse(localStorage.getItem("raza"));
  if(!razaAlmacenada){
    razaAlmacenada={};
  };

  //Creo un state vacio mediante useState para guardar y usar una raza de gatos
  const [raza,setRaza] = useState(razaAlmacenada);

  //Creo un state vacio mediante useState para guardar y usar una imagen

  const [img,setImg] = useState();

  //Uso useEffect para monitorear la variable razaAlmacenada

  useEffect(() => {
    if(razaAlmacenada) {
      localStorage.setItem("raza", JSON.stringify(raza));
    } else {
      localStorage.setItem("raza", JSON.stringify({}));
    };
  }, [razaAlmacenada])

  //Creo una funcion para poder llamar y traer informacion de una API externa (TheCatApi)

  const consultarApi = async(unaraza) => {
    try {
      const api = await fetch('https://api.thecatapi.com/v1/breeds/search?q='+unaraza);
      const unaRaza = await api.json();
      console.log(unaRaza)
      console.log('https://api.thecatapi.com/v1/breeds/search?q='+{unaraza})
      if(unaRaza != ""){
        setRaza(unaRaza[0]);
        const imagen = await fetch('https://api.thecatapi.com/v1/images/search?breed_ids='+unaRaza[0].id)
        const unaImagen = await imagen.json();
        setImg(unaImagen[0])
        console.log(unaImagen)
      }
      else{
        setRaza({name:"",description:"",wikipedia_url:""});
        //alert("Raza inexistente(Debe estar escrita en ingles)");
      }
    } catch(error) {
      console.log(error);
    }
  }
  

  //Funcion creada para guardar informacion en una variable y enviarla por parametro

  const detectarPalabra = (e) => {
    let unaRaza = "";
    console.log(e.target.value);
    unaRaza = e.target.value;
    if(unaRaza != ""){
      consultarApi(unaRaza)
    }    
  };


  return (
    <Fragment>
      <div>
        <div className="card">
          <div className='card-header'>
            <Header
                titulo={"InfoGatuno"}
              />
          </div>
        </div>
          <div className="card">
            <div className="card-body">
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Ingrese una raza: </span>
                <input type="text" className="form-control" placeholder="¿Que raza desea buscar?" aria-label="Username" aria-describedby="addon-wrapping" onChange={detectarPalabra}/>
              </div>
              <hr></hr>
              <br></br>
              <Razas
                raza={raza}
                img={img}
              />
            </div>
          </div>
          <div className="card text-end">
            <div className="card-footer text-muted">
              <Footer/>
            </div> 
          </div>
      </div>
    </Fragment>
  );
}

export default App;

