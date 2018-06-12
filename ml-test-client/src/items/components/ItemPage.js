import React from 'react';
import ItemsApi from "../api/ItemsApi";
import SearchItemsForm from "../../common/components/SearchItemsForm";
import ItemDetail from './ItemDetail';

class ItemPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            query: '',
            itemId: props.match.params.id,
            item: null
        };

        this.updateQueryState = this.updateQueryState.bind(this);
        this.searchItems = this.searchItems.bind(this);
    }

    componentDidMount() {
        ItemsApi.fetchItem(this.state.itemId).then(response => {
            return this.setState({item: response.data.item})
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
        } else {
            this.props.history.push('/');
        }
    }

    render() {
        const {query, item} = this.state;
        return (
            <div>
                <SearchItemsForm
                    query={query}
                    onChange={this.updateQueryState}
                    onSearch={this.searchItems}
                />
                {!item && <span>Cargando...</span>}
                {item && <ItemDetail item={item}/>}
            </div>
        );
    }
}

export default ItemPage;
