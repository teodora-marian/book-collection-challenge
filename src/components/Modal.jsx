import React, {useState} from "react";
import Modal from "react-modal";
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "600px"
  },
};

function BookModal({book}) {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => setOpenModal(false);

  return (
    <>
      <div className='book-item'>
        <div><img src={book.thumbnailURL} alt='#'/></div>
        <div><h2>{book.title}</h2></div>
        <div><p>{book.authors.map(author => <span>{author}, </span>)}</p></div>
        <div><p>{book.categories.map(category => <span><strong>{category} </strong></span>)}</p>
        </div>
        <Button variant="contained" onClick={() => {setOpenModal(true);}}>View details</Button>
      </div>

      {openModal && (
        <Modal 
          isOpen={openModal}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <button 
            onClick={closeModal}
            style={{float: "right"}}
            >
            <CloseIcon/>
          </button>
          <img src={book.thumbnailURL} alt='#'/>
          <h2>{book.title}</h2>
          <p><i>Authors: {book.authors.map(author => <span>{author}, </span>)}</i></p>
          <p><strong>{book.shortDescription ? "Short Description: " : ""}</strong></p>
          <p>{book.shortDescription}</p>
        </Modal>
        )}
    </>
);
}

export default BookModal;