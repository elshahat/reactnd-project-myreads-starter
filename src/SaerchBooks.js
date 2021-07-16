import React, { Component } from "react";
import { debounce } from 'throttle-debounce';
import { Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI';
import Book from "./Book";

class SearchBooks extends Component {
    state = {
        books: [],
        updatedBooks: []
    }

    searchForBooks = debounce(500, false, value => {
        if (value) {
            BooksAPI.search(value).then(booksResults => {
                if (booksResults.error) {
                    this.setState({
                        books: []
                    });
                } else {
                    this.setState({
                        books: this.handleBooksSync(booksResults)
                    });
                }
            });
        } else {
            this.setState({
                books: []
            });
        }
    });

    handleBooksSync(booksResults) {
        const { books } = this.props;

        return booksResults.map(bookResult => {
            books.map(book => {
                if (book.id === bookResult.id) {
                    bookResult.shelf = book.shelf;
                }
                return book;
            });
            return bookResult;
        })
    }

    render() {
        const { books } = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <div className="close-search">
                        <Link to='/'/>
                    </div>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            onChange={(e) => this.searchForBooks(e.target.value)}
                            placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.map(book => <li key={book.id}>
                            <Book bookData={book} fromSearch={true}/>
                        </li>)}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks;
