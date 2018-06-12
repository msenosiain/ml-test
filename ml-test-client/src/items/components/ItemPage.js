import React from 'react';
import SearchItemsForm from "../../common/components/SearchItemsForm";
import ItemsApi from "../api/ItemsApi";

class ItemPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            query: '',
            itemId: props.match.params.id,
            item: {}
        };

        this.updateQueryState = this.updateQueryState.bind(this);
        this.searchItems = this.searchItems.bind(this);
    }

    componentDidMount() {
        ItemsApi.fetchItem(this.state.itemId).then(response => {
            return this.setState({item: response.data})
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
                <h1>Item Page</h1>
            </div>
        );
    }
}

export default ItemPage;
