import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class Movie extends Component {

    constructor(){
        super();
    }

    render(){
        return  (
            <div className="card" style={{width: 18 +'rem', margin:10+'px'}}>
                    <div className="card-body">
                    <h5 className="card-title">{ this.props.name}</h5>
                    <p className="card-text">{this.props._id}</p>
                    <Link to ={`/movies/${this.props._id}`} >Details</Link>

                    
                    </div>
                </div>
        );
    }

}