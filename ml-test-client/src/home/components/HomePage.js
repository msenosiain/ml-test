import React from 'react';
import SearchItemsForm from "../../common/components/SearchItemsForm";

class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            query: ''
        };

        this.updateQueryState = this.updateQueryState.bind(this);
        this.searchItems = this.searchItems.bind(this);
    }

    updateQueryState(event) {
        return this.setState({query: event.target.value});
    }

    searchItems(event) {
        event.preventDefault();
        if (this.state.query) {
            this.props.history.push('/items?search=' + this.state.query);
        }
    }

    render() {
        return (
            <SearchItemsForm
                query={this.state.query}
                onChange={this.updateQueryState}
                onSearch={this.searchItems}/>
        );
    }
}

export default HomePage;
