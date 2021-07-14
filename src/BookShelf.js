import React from "react";
import Book from "./Book";
import PropTypes from 'prop-types';

const BookShelf = ({ loading, shelf, books, updateShelves, showLoading }) => {
    /**
     * Get the shelf name based on the shelf code
     * @param shelf
     * @returns {string}
     */
    const getShelfName = (shelf) => {
        switch (shelf) {
            case 'currentlyReading':
                return "Currently Reading:";
            case 'wantToRead':
                return "Want to Read:";
            case 'read':
                return "Read:";
            default:
                return "None:"
        }
    }

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{getShelfName(shelf)}</h2>
            <div className="bookshelf-books">
                {loading ?
                    'Loading books...' :
                    books.length === 0 ? 'No books to list!' :
                        <ol className="books-grid">
                            {books.map(book => <li key={book.id}>
                                <Book updateShelves={() => updateShelves()} showLoading={() => showLoading()} bookData={book}/>
                            </li>)}
                        </ol>}
            </div>
        </div>
    )
}

BookShelf.propTypes = {
    loading: PropTypes.bool.isRequired,
    shelf: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    updateShelves: PropTypes.func.isRequired,
    showLoading: PropTypes.func.isRequired
}

export default BookShelf;
