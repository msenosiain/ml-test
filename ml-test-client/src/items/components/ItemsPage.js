import React from 'react';
import qs from 'query-string';
import SearchItemsForm from "../../common/components/SearchItemsForm";
import ItemsList from './ItemsList';
import ItemsApi from "../api/ItemsApi";

class ItemsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            query: props.location.search ? qs.parse(props.location.search).search : '',
            searchResults: null
        };
        this.updateQueryState = this.updateQueryState.bind(this);
        this.searchItems = this.searchItems.bind(this);
    }

    componentDidMount() {
        ItemsApi.searchItems(this.state.query).then(response => {
            return this.setState({searchResults: response.data})
        }).catch(error => {
            throw(error);
        });
    }

    updateQueryState(event) {
        return this.setState({query: event.target.value});
    }

    searchItems(event) {
        event.preventDefault();
        if (this.state.query.length) {
            this.props.history.push('/items?search=' + this.state.query);
            ItemsApi.searchItems(this.state.query).then(response => {
                return this.setState({searchResults: response.data})
            }).catch(error => {
                throw(error);
            });
        } else {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div>
                <SearchItemsForm
                    query={this.state.query}
                    onChange={this.updateQueryState}
                    onSearch={this.searchItems}
                />
                {!this.state.searchResults && <span>Cargando...</span>}
                {this.state.searchResults && <ItemsList {...this.state} />}
            </div>
        );
    }
}

export default ItemsPage;
