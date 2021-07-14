import React from "react";
import * as BooksAPI from './BooksAPI';
import ShelfChanger from "./ShelfChanger";
import PropTypes from "prop-types";

const Book = ({ bookData, updateShelves, showLoading, fromSearch }) => {
    const noImage = 'https://dummyimage.com/128x192/2e7c31/ffffff.png&text=No+Image';
    const updateBookShelf = (book, shelf) => {
        /**
         * If the user is using this component from the search page,
         * don't call the showLoading() method because it's used only in the "My Reads" screen
         */
        if (!fromSearch) {
            // Show the loader
            showLoading();
        }

        BooksAPI.update(book, shelf).then(() => {
            /**
             * If the user is using this component from the search page,
             * don't call the updateShelves() method because it's used only in the "My Reads" screen
             */
            if (!fromSearch) {
                // Update the shelves
                updateShelves();
            }
        });
    };

    const checkImage = (bookData) => {
        if (bookData.imageLinks) {
            return bookData.imageLinks.smallThumbnail
        } else {
            return noImage;
        }
    }

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${checkImage(bookData)}")` }}/>
                <ShelfChanger updateShelf={(shelf) => updateBookShelf(bookData, shelf)} currentShelf={bookData.shelf ? bookData.shelf : 'none'}/>
            </div>
            <div className="book-title">{bookData.title}</div>
            {bookData.authors && <div className="book-authors">{bookData.authors.join(',')}</div>}
        </div>
    );
}

Book.propTypes = {
    bookData: PropTypes.object.isRequired,
    updateShelves: PropTypes.func,
    showLoading: PropTypes.func,
    fromSearch: PropTypes.bool
}

export default Book;
