import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Main from './components/Main';
import MovieDetails from './components/MovieDetails';
import Addmovie from './components/Addmovie';

const router = (
    <Router>
        <ul>
            <Link to="/">Home</Link><br />
            <Link to="/main">All Movies</Link><br />
            <Link to="/add">Add</Link><br />
        </ul>

        <ul>
            <Route exact path="/" component={App}/> <br />
            <Route path="/main" component={Main}/><br />
            <Route path="/movies/:id" component={MovieDetails}/><br />
            <Route path="/add" component={Addmovie}/><br />
        </ul>
    </Router>
)


ReactDOM.render(
    router, 
    document.getElementById('root'));