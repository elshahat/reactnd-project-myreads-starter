import React from "react";
import PropTypes from "prop-types";

const ShelfChanger = ({ currentShelf, updateShelf }) => {
    /**
     * Update the book data with the new shelf value
     * @param value
     */
    const updateBookShelf = (value) => {
        updateShelf(value);
    }

    return (
        <div className="book-shelf-changer">
            <select defaultValue={currentShelf} onChange={(value) => updateBookShelf(value.target.value)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
            </select>
        </div>
    )
}

ShelfChanger.propTypes = {
    currentShelf: PropTypes.string.isRequired,
    updateShelf: PropTypes.func.isRequired
}

export default ShelfChanger;
