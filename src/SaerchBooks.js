import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI';
import Book from "./Book";

class SearchBooks extends Component {
    state = {
        books: [],
        updatedBooks: []
    }

    search(value) {
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
    }

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
                            onChange={(e) => this.search(e.target.value)}
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
