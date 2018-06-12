import React from 'react';
import PropTypes from 'prop-types';

const CategoriesBreadcrumbs = ({categories}) => {

    return (
        <div className="row">
            <div className="col-md-9 col-md-offset-1">
                <div className="categories-breadcrumb">
                    {categories.map((category, index) => {
                        if (index === 0) {
                            return <span key={index}>{category}</span>
                        } else if (index === categories.length - 1) {
                            return <span key={index}> > <strong>{category}</strong></span>
                        } else {
                            return <span key={index}> > {category}</span>
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

CategoriesBreadcrumbs.propTypes = {
    categories: PropTypes.array.isRequired
};

export default CategoriesBreadcrumbs;
