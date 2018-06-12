// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import SearchItemsForm from './items/SearchItemsForm';
// import {connect} from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <SearchItemsForm />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    // children: PropTypes.object.isRequired,
    // loading: PropTypes.bool.isRequired
};

// function mapStateToProps(state, ownProps) {
//     return {loading: state.ajaxCallsInProgress > 0};
// }

// export default connect(mapStateToProps)(App);
export default App;
