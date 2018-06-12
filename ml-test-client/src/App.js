import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from "./home/components/HomePage";
import ItemsPage from "./items/components/ItemsPage";
import ItemPage from "./items/components/ItemPage";

const App = () => (
    <div className="container-fluid">
        <main className="main">
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/items' render={props => (<ItemsPage {...props} />)}/>
                <Route strict exact path='/items/:id' render={props => (<ItemPage {...props} />)}/>
            </Switch>
        </main>
    </div>
);

export default App;
