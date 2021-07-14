import React from "react";
import * as BooksAPI from './BooksAPI';
import ShelfChanger from "./ShelfChanger";
import PropTypes from "prop-types";

const Book = ({ bookData, updateShelves, showLoading }) => {
    const updateBookShelf = (book, shelf) => {
        // Show the loader
        showLoading();

        BooksAPI.update(book, shelf).then(res => {
            // Update the shelves
            updateShelves();
        });
    };

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${bookData.imageLinks.smallThumbnail}")` }}/>
                <ShelfChanger updateShelf={(shelf) => updateBookShelf(bookData, shelf)} currentShelf={bookData.shelf}/>
            </div>
            <div className="book-title">{bookData.title}</div>
            <div className="book-authors">{bookData.authors.join(", ")}</div>
        </div>
    );
}

Book.propTypes = {
    bookData: PropTypes.object.isRequired,
    updateShelves: PropTypes.func.isRequired,
    showLoading: PropTypes.func.isRequired
}

export default Book;
