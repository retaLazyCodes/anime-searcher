import React from 'react'

export default function SearchForm(props) {
    return (
        <form
            className="search-box"
            onSubmit={props.handleSubmit}>
            <input
                type="search"
                placeholder="Search for an anime..."
                required
                value={props.keyword}
                onChange={props.handleChange} />
        </form>
    )
}