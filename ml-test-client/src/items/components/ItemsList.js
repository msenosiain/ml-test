import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import '../styles/ItemsList.css'
import ItemRow from "./ItemRow";
import CategoriesBreadcrumbs from "./CategoriesBreadcrumbs";

const ItemsList = ({searchResults}) => {
    return (
        <div className="container-fluid">
            <CategoriesBreadcrumbs categories={searchResults.categories}/>
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="items" itemScope itemType="http://schema.org/ItemList">
                        {searchResults.items.slice(0, 4).map(item => {
                            return <Link className="item-link" key={item.id} to={`/items/${item.id}`}>
                                <ItemRow item={item}/>
                            </Link>
                        })}
                    </div>
                </div>
            </div>

        </div>
    );
};

ItemsList.propTypes = {
    searchResults: PropTypes.object.isRequired
};

export default ItemsList;
