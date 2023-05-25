import { NavLink, Link } from "react-router-dom"

const { useEffect, useState } = require("react");


export default function Card()
{
    const [books, setBooks] = useState([])



    useEffect(() => {
        const URL = 'http://localhost:3000/books'
        fetch(URL, {
        }).then(response => response.json())
            .then(data => {
                setBooks(data)
            }).catch(error => console.log(error))

    }, [])

    const renderCards = () => {
        const cards = []
        for (let i = 0; i < books.length; i += 3) {
            const row = (
                <div className="row" key={i}>
                    {books.slice(i, i + 3).map((book, index) => (
                        <div className="col" key={index}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={book.imagen} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{book.nombre}</h5>
                              
                                    <Link to={`/books/${book.id}`}  className="btn btn-primary"> IR al detail </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )
            cards.push(row)
        }
        return cards
    }

    return (
        <>
           
            <div className="container">
                {renderCards()}
            </div>
           
        </>
    )


}