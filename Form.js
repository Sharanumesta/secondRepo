import React from "react";

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:""
        }
    }
    handleUsername=(e)=>{
        e.preventDefault()
        this.setState({
            username:e.target.value
        })
    }
    handlePassword=(e)=>{
        e.preventDefault()
        this.setState({
            password:e.target.value
        })
    }
    handleSubmit=(e)=>{
        alert(`${this.state.username} ${this.state.password}`)
        e.preventDefault()
    }
    render(){
    return(
        <>
        <Form onSubmit={this.handleSubmit}>
        <label>
            <input type="text" value={this.state.username} onChange={this.handleUsername}/>username</label>
            <label>
            <input type="text" value={this.state.password}  onChange={this.handlePassword} />password</label>
            <button >Submit</button>
        </Form>
        </>
    )
}
}

export default Form