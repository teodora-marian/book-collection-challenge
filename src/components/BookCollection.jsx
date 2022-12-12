import React, {useState, useEffect} from 'react';
import '../App';
import {API_URL} from '../API';
import axios from 'axios';
import Button from '@mui/material/Button';
import BookModal from "./Modal";

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
                <Button variant="contained" onClick={() => setView('grid')} style={{marginRight: '5px'}}>Grid</Button>
                <Button variant="contained" onClick={() => setView('list')}>List</Button>
            </div>
            <div className={'book-collection book-collection-' + view}>
                {books.map((book, idx) => (
                    <BookModal book={book} key={idx}/>
                ))}
            </div>
        </div>);
}

export default BookCollection