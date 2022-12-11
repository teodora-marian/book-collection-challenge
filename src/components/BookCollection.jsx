import React, {useState, useEffect} from 'react';
import '../App';
import { API_URL } from '../API';
import axios from 'axios';
import Button from '@mui/material/Button';

const BookCollection = () => {
  const [books, setBooks] = useState([]);
  const [view, setView] = useState('grid');

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res);
        setBooks(res.data.books);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>

      <div className="header-toggle-buttons">
        <Button variant="contained" onClick={() => setView('grid')} style={{ marginRight:'5px'}}>Grid</Button>
        <Button variant="contained" onClick={() => setView('list')}>List</Button>
      </div>

      <div className= {'book-collection book-collection-' + view}>
        {books.map((book) => ( 
          <div className='book-item' key={book.isbn}>
            <div><img src={book.thumbnailURL} alt='#'/></div>
            <div><h2>{book.title}</h2></div>
            <div><p>{book.authors.map(author => <span>{author} </span>)}</p></div>
            <div><p>{book.categories.map(category => <span><strong>{category} </strong></span>)}</p></div>
          </div>
        ))}
      </div>

    </div>);

}

export default BookCollection