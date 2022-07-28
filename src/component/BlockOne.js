import React, { useState, useRef } from "react";

let datosInicio = [
    {id:1,fecha:"hace 2 dias",
    autor:"steve Trabajos",}
]

let ComentariosDatos = ["soy el primer comentario!",
"Buenisima ​👍",
"Opino que opinar es necesario! ​👍",
"Inbox"]

let BlockOne = () => {

    let [datos, setDatos] = useState(datosInicio)
    let [comentarios,SetComentarios] = useState(ComentariosDatos)
    let valor1 = useRef(null)
    let valor2 = useRef(null)
    const update = (e) =>
    {
        e.preventDefault()
        let objectarray = [...comentarios]
        let  Usuario = [...datos]
        if((valor1.current.value).length <= 2)
        {
            alert("Comentario muy corto")
        
        }
        else
        {

            Usuario[0].fecha = "Ahora"
            setDatos(Usuario)
            console.log(datos)

            if(valor2.current.checked == true)
            {

                objectarray.push(valor1.current.value + " 👍")
                SetComentarios(objectarray)
                console.log("Actualizado")
            }
            else
            {
                objectarray.push(valor1.current.value)
                SetComentarios(objectarray)
                console.log("Actualizado")
            }
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="/">- Página de información</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div classNameName="collapse navbar-collapse" id="navbarNav">
                    <ul classNameName="navbar-nav">
                        <li classNameName="nav-item active">
                            <a classNameName="nav-link" href="https://es.reactjs.org/">Página de React</a>
                        </li>
                        <li classNameName="nav-item">
                            <a classNameName="nav-link" href="https://getbootstrap.com/">Página de Boostrap</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <br/>
            <h1 className="text-center">feedback de la página</h1><br/><br/>
            <div className="container-xxl">
                <div className="row container-xxl">
                    
                    <div className="col-md-6 p-1 bg-dark text-white rounded">
                        <h1 className="text-center">Perfil</h1>
                        <div className="container bg-light text-dark rounded">
                            <h6 className="text-center">Nombre</h6>
                            <h2 className="text-center">{datos[0].autor}</h2>
                            <br/>
                            <h6 className="text-center">Ultima conexión</h6>
                            <h2 className="text-center">{datos[0].fecha}</h2>
                            <br/>
                        </div>
                    </div>

                    <div className="col-md-6 p-1 .bg-light rounded">
                        <div className="container ">
                            
                            <h1 className="text-center">Comentar</h1>
                            <br/>
                            <form onSubmit={update} className="container">
                                
                                <label for="InputMensaje" className="text-justify">- Mensaje 🗨️</label>
                                <input type="text" ref={valor1} className="form-control" id="InputMensaje"/>
                                <br/>
                                <input type="checkbox" ref={valor2}/> Agregar emote ​👍​​​
                                <br/><br/>
                                <button type="onSumit" class="btn btn-outline-secondary">Enviar</button>
                            </form>
                            
                        </div>
                    </div>

                    <div>
                        <br/><br/><br/>
                        <h1 className="text-center">Sección de comentarios</h1>
                        <br/>
                        <div className="container bg-dark text-white rounded">
                            <h3>Comentarios</h3>
                            <div className="container overflow-auto bg-light text-dark rounded">
                                    {comentarios.map((dato, indice) =>
                                    {
                                        return <li key={indice} className="list-group-item border-bottom">{"🗨️ " + dato}</li>
                                    })}
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/>
            <div>
                <footer className="bg-dark position-absolute container-fluid ">
                    <h1 className="text-center">-</h1>
                </footer>
            </div>
        </div>
    )
}


export default BlockOne;