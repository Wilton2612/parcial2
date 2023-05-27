import { NavLink, Link, useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom";
import ChangeValue from "../ChangeValue/ChangeValue";
import { FormattedMessage } from 'react-intl';
const { useEffect, useState } = require("react");

export default function Card() {
    const navigate = useNavigate();
    const [books, setBooks] = useState([])
    const [rol, setRol] = useState(false)
    const [book, setBook] = useState({
        id: "",
        name: "",
        isbn: "",
        author: "",
        publisher: "",
        gender: "",
        year: 0,
        available_online: "",
        price: 0,
        summary: ""

    })


    useEffect(() => {
        const URL = 'http://localhost:3000/books'
        fetch(URL, {
        }).then(response => response.json())
            .then(data => {
                console.log("obteniendo datos: ", data)
                setBooks(data)
            }).catch(error => console.log(error))

    }, [])

    const renderCards = () => {
        const cards = [];
        for (let i = 0; i < books.length; i += 4) {
            const row = (
                <div className="row" key={i}>
                    {books.slice(i, i + 3).map((book, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card" style={{ maxWidth: "18rem" }}>
                                <img src={book.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Name: {book.name}</h5>
                                    <p className="card-title">ISBN: {book.isbn}</p>
                                    <Link to={`/books/${book.id}`} className="btn btn-primary"> <FormattedMessage id="detail"/> </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
            cards.push(row);
        }
        return cards;
    };


    const { id } = useParams()
    useEffect(() => {
        const URL = 'http://localhost:3000/books'
        fetch(`${URL}/${id}`, {
        }).then(response => response.json())
            .then(data => {
                console.log("obteniendo datos: ", data)
                setBook(data)
            }).catch(error => console.log(error))

    }, [id])


    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (token === "Administrador") {
            
            setRol(true);
        } else {
          
            setRol(false);
           
        }
    }, []);

    const onLogout = () => {
        sessionStorage.removeItem("token");
        navigate('/');
      };

    const detailBooks = () => {

        return (
            <>
                <div className="card mb-3">
                    <div className="card-body">
                        {rol === true ? (
                            <>
                                <ChangeValue book={book} />
                            </>

                        ) : (
                        <><h5 className="card-title"> <FormattedMessage id="name" />: {book.name}</h5>
                            <p className="card-text"><b>ISBN:</b> {book.isbn}</p>
                            <p className="card-text"><b> <FormattedMessage id="author" />:</b> {book.author}</p>
                            <p className="card-text"><b> <FormattedMessage id="publisher" />:</b> {book.publisher}</p>
                            <p className="card-text"><b><FormattedMessage id="genre" />:</b> {book.gender}</p>
                            <p className="card-text"><b><FormattedMessage id="year" />:</b> {book.year}</p>
                            <p className="card-text"><b><FormattedMessage id="price" />:</b> {book.price}</p>
                            <p className="card-text"><b><FormattedMessage id="available_online" />:</b> {book.available_online ? "Yes" : "No"}</p>
                            <p className="card-text"><b><FormattedMessage id="summary" />:</b> {book.summary}</p> 
                        </>

                        )

                        }
                    </div>
                </div>


            </>

        )

    }

    return (
        <>
        <button  className="btn btn-primary" onClick={onLogout} style={{ marginBottom: "30px" }}>
                <FormattedMessage id="logout" />
            </button>
            <div className="container">
                <div class="row">
                    <div class="col">
                        {renderCards()}
                    </div>
                    <div class="col">
                        {detailBooks()}
                    </div>
                </div>
            </div>

        </>
    )


}