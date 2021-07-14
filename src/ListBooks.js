import React, { Component } from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";
import Loading from './icons/loading.svg';
import PropTypes from 'prop-types';

class ListBooks extends Component {
    componentDidMount() {
        this.props.getBooks();
    }

    render() {
        const { shelves, loading, updating, getBooks, showLoading } = this.props;
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
                                updateShelves={() => getBooks()}
                                showLoading={() => showLoading()}
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

ListBooks.propTypes = {
    shelves: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    updating: PropTypes.bool.isRequired,
    getBooks: PropTypes.func.isRequired,
    showLoading: PropTypes.func.isRequired
}

export default ListBooks;
