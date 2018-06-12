import React from 'react';
import PropTypes from 'prop-types';
import {buildPrice} from '../../common/helpers';
import '../styles/ItemRow.css';
import ic_shipping from '../../assets/img/ic_shipping.png'

const ItemRow = ({item}) => {
    return (
        <div className="item-row" aria-label="item" itemProp="productID" content={item.id}>
            <div className="item-picture">
                <img src={item.picture} alt="item" itemProp="image"/>
            </div>
            <div className="item-content">
                <p>
                    <span className="item-price" itemProp="price">{buildPrice(item.price)}</span>
                    {item.free_shipping && <img className="free-shipping-badge" src={ic_shipping} alt="free_shipping"/>}
                </p>
                <p>
                    <span className="item-title" itemProp="name">{item.title}</span>
                </p>
            </div>
            <div className="item-location">{item.location}</div>
        </div>
    );
};

ItemRow.propTypes = {
    item: PropTypes.object.isRequired
};

export default ItemRow;
