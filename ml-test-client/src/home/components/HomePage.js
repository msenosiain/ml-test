import React from 'react';
import SearchItemsForm from "../items/SearchItemsForm";

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
        let query = (' ' + this.state.query).slice(1);

        query = event.target.value;

        return this.setState({query: query});
    }

    searchItems(event) {
        event.preventDefault();
        if (this.state.query) {
            this.props.history.push('/items?search=' + this.state.query);
        }
    }

    render() {
        return (
            <div>

                <SearchItemsForm
                    query={this.state.query}
                    onChange={this.updateQueryState}
                    onSearch={this.searchItems}/>
                <h1>{'Home'}</h1>
            </div>
        );
    }
}

export default HomePage;
