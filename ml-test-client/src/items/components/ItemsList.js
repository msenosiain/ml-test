import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const ItemsList = ({query, searchResults}) => {
    return (
        <div>
            {searchResults.items.map(item => {
                return <Link key={item.id} to={`/items/${item.id}`}><div >{item.title}</div></Link>
            })}
        </div>
    );
};

ItemsList.propTypes = {
   // items: PropTypes.array.isRequired
};

export default ItemsList;
