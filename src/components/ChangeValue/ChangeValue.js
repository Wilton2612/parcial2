import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';


function MiComponente({ book }) {

  const [name, setName] = useState(book.name);
  const [isbn, setIsbn] = useState(book.isbn);
  const [author, setAuthor] = useState(book.author);
  const [publisher, setPublisher] = useState(book.publisher);
  const [genre, setGenre] = useState(book.genre);
  const [year, setYear] = useState(book.year);
  const [price, setPrice] = useState(book.price);
  const [availableOnline, setAvailableOnline] = useState(book.available_online);
  const [summary, setSummary] = useState(book.summary);


  return (
    <>
      <h5 className="card-title"><FormattedMessage id="name" />: {book.name}</h5>
      <input type="text" value={name} onChange={ (event) => {setName(event.target.value);}} />
      <p className="card-text"><b>ISBN:</b> {book.isbn}</p>
      <input type="text" value={isbn} onChange={(event) => {setIsbn(event.target.value);}} />
      <p className="card-text"><b> <FormattedMessage id="author" />:</b> {book.author}</p>
      <input type="text" value={author} onChange={(event) => {setAuthor(event.target.value);}} />
      <p className="card-text"><b><FormattedMessage id="publisher" />:</b> {book.publisher}</p>
      <input type="text" value={publisher} onChange={(event) => {setPublisher(event.target.value);}} />
      <p className="card-text"><b><FormattedMessage id="genre" />:</b> {book.gender}</p>
      <input type="text" value={genre} onChange={(event) => {setGenre(event.target.value);}} />
      <p className="card-text"><b><FormattedMessage id="year" />:</b> {book.year}</p>
      <input type="text" value={year} onChange={(event) => {setYear(event.target.value);}} />
      <p className="card-text"><b><FormattedMessage id="price" />:</b> {book.price}</p>
      <input type="text" value={price} onChange={(event) => {setPrice(event.target.value);}} />
      <p className="card-text"><b><FormattedMessage id="available_online" />:</b> {book.available_online ? "Yes" : "No"}</p>
      <input type="text" value={availableOnline} onChange={(event) => {setAvailableOnline(event.target.value);}} />
      <p className="card-text"><b><FormattedMessage id="summary" />:</b> {book.summary}</p>
      <textarea value={summary} onChange={(event) => {setSummary(event.target.value);}} />
    </>
  );
}

export default MiComponente;
