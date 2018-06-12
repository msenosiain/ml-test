import React from 'react';
import qs from 'query-string';
import SearchItemsForm from "../../common/components/SearchItemsForm";
import ItemsList from './ItemsList';
import ItemsApi from "../api/ItemsApi";
import {searchItemsSuccess} from "./itemsActions";

class ItemsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            query: props.location.search ? qs.parse(props.location.search).search : '',
            searchResults: {categories: [], items: []}
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
        let query = (' ' + this.state.query).slice(1);

        query = event.target.value;

        return this.setState({query: query});
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
                    onSearch={this.searchItems}/>
                <h1>ITEMS PAGE</h1>
                <ItemsList {...this.state} />
            </div>
        );
    }
}

export default ItemsPage;
