import React, { Component } from "react";

class Child extends Component{
    // constructor(props){
    //     super(props)
    // }


    render(){
        return(
            <>
            usernamepriya:-<h1>{this.props.data}</h1>
            </>
        )
    }
    
}



export default Child