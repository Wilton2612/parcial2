
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
export default function CardDetail()
{

    const [empresa, setEmpresa] = useState({

        id: "", 
        nombre: "", 
        correo: "", 
        telefono: "",
        peliculas: []

    })
    
    const { id } = useParams()
    useEffect(() => {
        const URL = 'http://localhost:3000/empresas'
        fetch(`${URL}/${id}`, {
        }).then(response => response.json())
            .then(data => {
                setEmpresa(data)
            }).catch(error => console.log(error))

    }, [id])



    const renderCards = (empresa) => {
        const peliculas = empresa.peliculas.map(pelicula => (
            <div className="card" style={{ width: "18rem", background:"#7286D3", display: "block", margin: "0 auto"}}>
                 <p className="card-text" key={pelicula.id}>{pelicula.nombre}</p>
            </div>
           
        ));

        return peliculas;
    }
    return (

        <>
    
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">{empresa.nombre}</h5>
                    <p class="card-text">{empresa.correo}</p>
                    <p class="card-text">{empresa.telefono}</p>
                    {renderCards(empresa)}
                </div>
            </div>

         
        </>

    )



}