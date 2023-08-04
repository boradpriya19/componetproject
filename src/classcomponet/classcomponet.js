import React, { Component } from 'react'
import Child from './child'

class Userpage extends Component{
    constructor(){
        super();
        this.state = {
         userName :"",
        }
    }

    handleChange(event){
        console.log(`====>> >>>>>>>>>>`,event.value)
        this.setState({...this.state,[event.name]:event.value})
    }



    render(){
        return(
            <>
                <h1>priya</h1>

                name <input type='text' 
                name='userName'
                 value={this.state.userName}
                  onChange={(e)=>this.handleChange(e.target)}>
                  </input>

                <Child data={this.state.userName}/>            
            </>
        )
    }
}

export default Userpage


