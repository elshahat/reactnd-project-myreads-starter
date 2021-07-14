import React from 'react'
import { Switch, Route } from "react-router-dom";
import './App.css'
import SearchBooks from "./SaerchBooks";
import ListBooks from "./ListBooks";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
    state = {
        loading: true,
        updating: true,
        books: [],
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
        this.setState({
            updating: true
        });

        BooksAPI.getAll().then(books => {
            this.setState({
                books: books,
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
        const { shelves, loading, updating, books } = this.state;
        return (
            <div className="app">
                <Switch>
                    <Route exact path="/" render={() =>
                        <ListBooks
                            shelves={shelves}
                            loading={loading}
                            updating={updating}
                            getBooks={() => this.getBooks()}
                            showLoading={() => this.showLoading()}
                        />
                    }/>
                    <Route path="/search" render={() => <SearchBooks books={books}/>}/>
                </Switch>
            </div>
        );
    }
}

export default BooksApp;
