import React from 'react';
import Movie from './movie';
import axios from 'axios';

export default class Main extends React.Component{

    constructor(){
        super();
        this.state={
            movies:[]
        }
        console.log(`Came inside constructor`)
        this.selectedProduct = this.selectedProduct.bind(this);
    }


    selectedProduct({name,id}){
        
        console.log(`${id}  ${name}`);
    }



    componentDidMount(){
        console.log(`Came inside componentDidMount`)

        axios.get('http://localhost:8000/api/movies')
        .then(res=> console.log(res.data.movies) );

        axios.get('http://localhost:8000/api/movies')
        .then(res=> this.setState({
            movies : res.data.movies
        }) );
    }

    componentDidUpdate(){
        console.log(`Came inside componentDidUpdate`)
    }

    render(){
        console.log(`Came inside Render ${this.state.movies}`)

     
        return(
            <div className="container">
                 
                <div className="row">
                {
                    this.state.movies.map((movie,index) => <Movie key={index} 
                                                      name={movie.name} 
                                                      _id ={movie._id}
                                                      selected={this.selectedProduct}/>)
                }
                </div>
               </div>
        );

    }
    
}

