import React from 'react';
import axios from 'axios';

export default class MovieDetails extends React.Component{
    constructor(){
        super();
        this.state={
            movies:[]
        }
        this.deletemovie = this.deletemovie.bind(this);
        
    }

    deletemovie()
    {
        const {id} = this.props.match.params;
        axios.delete('http://localhost:8000/api/movies/'+id)
        .then(res=>console.log(res.data));
    }

    componentDidMount(){
        console.log(this.props);
        const {id} = this.props.match.params;

        axios.get('http://localhost:8000/api/movies/'+id)
        .then(res=>console.log(res.data));

        axios.get('http://localhost:8000/api/movies/'+id)
        .then(res=>{
            
                this.setState({
                    movies : res.data.movies
                })
           
            
        } );
    }

    render(){
        return(
            <div>
                    <h1>Movie Details</h1>
                    <div className="card" style={{width: 18 +'rem', margin:10+'px'}}>
                    <div className="card-body">
                    <p className="card-title"><h5>ID:</h5>{this.state.movies._id}</p>
                    <p className="card-title"><h5>Name:</h5>{this.state.movies.name}</p>
                    <p className="card-title"><h5>Actor:</h5>{this.state.movies.actor}</p>
                    <p className="card-title"><h5>Actress:</h5>{this.state.movies.actress}</p>
                    <p className="card-title"><h5>Director:</h5>{this.state.movies.director}</p>
                    <button className="btn btn-primary" type = "submit" onClick={this.deletemovie}>Delete</button>
                    </div>
                </div>

            </div>
        )
    }
}