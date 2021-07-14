import React, { Component } from "react";
import BookShelf from "./BookShelf";
import * as BooksAPI from './BooksAPI';
import { Link } from "react-router-dom";
import Loading from './icons/loading.svg';

class ListBooks extends Component {
    state = {
        loading: true,
        updating: true,
        shelves: {
            currentlyReading: [],
            wantToRead: [],
            read: []
        }
    }

    componentDidMount() {
        this.getBooks();
    }

    // Get the list of books
    getBooks() {
        BooksAPI.getAll().then(books => {
            this.setState({
                shelves: {
                    currentlyReading: books.filter(book => book.shelf === 'currentlyReading'),
                    wantToRead: books.filter(book => book.shelf === 'wantToRead'),
                    read: books.filter(book => book.shelf === 'read')
                }
            });
        }).finally(() => {
            this.setState({
                loading: false,
                updating: false
            });
        });
    }

    // Show the loader on every book shelf change
    showLoading() {
        this.setState({
            updating: true
        });
    }

    render() {
        const { shelves, loading, updating } = this.state;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {Object.keys(shelves).map(shelf =>
                            <BookShelf
                                key={shelf}
                                loading={loading}
                                shelf={shelf}
                                books={shelves[shelf]}
                                updateShelves={() => this.getBooks()}
                                showLoading={() => this.showLoading()}
                            />
                        )}
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Search</Link>
                </div>
                {updating && <div className="loading"><img src={Loading} alt="Loading"/></div>}
            </div>
        )
    }
}

export default ListBooks;
