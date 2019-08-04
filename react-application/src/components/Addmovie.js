import React,{Component} from 'react';
import axios from 'axios';

export default class Addmovie extends React.Component{

    constructor(){
        super();
        this.state={
            name : '',
            _id : '',
            actor : '',
            actress : '',
            director : ''
        }
        this.add = this.add.bind(this);
        this.change = this.change.bind(this);
    }

    change(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      add(){
          let movie={
              name:this.state.name,
              _id:this.state._id,
              actor:this.state.actor,
              actress:this.state.actress,
              director : this.state.director,
              }
          console.log(movie.name);
          axios.post("http://localhost:8000/api/movies",movie).then(res=>{console.log(res.data)})
      }

    
    render(){
        return(
            <div>
                    <h3>Enter Movie Details</h3>
                    <div className="card" style={{width: 18 +'rem', margin:10+'px'}}>
                    <form onSubmit={this.add}>
                    Id :   <input className="card-title" type="text" onChange={this.change} name="_id" value={this.state._id}></input><br />
                    Name : <input className="card-title" type="text" onChange={this.change} name="name" value={this.state.name}></input><br />
                    Actor :<input className="card-title" type="text" onChange={this.change} name="actor" value={this.state.actor}></input><br />
                    Actress :<input className="card-title" type="text" onChange={this.change} name="actress" value={this.state.actress}></input><br />
                    Director :<input className="card-title" type="text" onChange={this.change} name="director" value={this.state.director}></input>
                    <button className="btn btn-primary" type = "submit">Submit</button>
                    </form>
                </div>

            </div>
        )
    }

}