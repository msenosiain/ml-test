import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ItemDetail.css';
import CategoriesBreadcrumbs from './CategoriesBreadcrumbs';
import {buildPrice, buildMeta} from "../../common/helpers";

const ItemDetail = ({item}) => {
    return (
        <div className="container-fluid">
            <CategoriesBreadcrumbs categories={[]}/>
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="item-detail-wrapper">
                    <div className="item-picture">
                        <img src={item.picture} alt=""/>
                    </div>
                    <div className="item-content">
                        <div className="item-meta">{buildMeta(item.condition, item.sold_quantity)}</div>
                        <div className="item-title">{item.title}</div>
                        <div className="item-price">{buildPrice(item.price)}</div>
                        <button type="button" className="btn btn-buy btn-block">Comprar</button>
                    </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="item-description-wrapper">
                    <div className="item-description-label">
                        Descripcion del producto
                    </div>
                    <div className="item-description">
                        {item.description}
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

ItemDetail.propTypes = {
    item: PropTypes.object.isRequired
};

export default ItemDetail;
