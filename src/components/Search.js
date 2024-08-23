import React from 'react';

function Search({ search, onChangeSearch }) {
    function handleSearch(event) {
        onChangeSearch(event.target.value);
    }

    return (
        <div className="ui search">
            <div className="ui icon input">
                <input className="prompt" placeholder="Search..." value={search} onChange={handleSearch} />
                <i className="search icon" />
            </div>
        </div>
    );
}

export default Search;
