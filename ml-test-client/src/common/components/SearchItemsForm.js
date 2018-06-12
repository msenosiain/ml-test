import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './SearchItemsForm.css';
import Logo_ML from '../assets/styles/Logo_ML.png';

const SearchItemsForm = ({query, onChange, onSearch}) => {

    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1 col-md-offset-1">
                        <Link to="/" className="navbar-brand pull-right">
                            <img alt="Brand" src={Logo_ML}/>
                        </Link>
                    </div>

                    <div className="col-md-9">
                        <form className="navbar-form ">
                            <div className="input-group">
                                <input type="text" className="form-control input-lg" value={query} onChange={onChange}
                                       placeholder="Nunca dejes de buscar"/>
                                <span className="input-group-btn">
                                    <button type="submit" className="btn btn-search btn-lg" onClick={onSearch}>
                                        <i className="glyphicon glyphicon-search"></i>
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
};

SearchItemsForm.propTypes = {
    query: PropTypes.string,
    onSearch: PropTypes.func.isRequired

};

export default SearchItemsForm;
