import React, {Component} from 'react';


export default class Taskform extends Component {

    state = {
        title: '',
        description: ''
    }
    onSubmit = e => {
        // console.log(this.state)
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();
    }

    onChange = e => {
        // console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        // console.log(this.props)
        return(
            <form onSubmit={this.onSubmit}> 
                <input type="text" placeholder="escribe una tarea" name="title" onChange={this.onChange} value={this.state.title} />
                <br/>
                <br/>                
                <textarea placeholder="escribe una descripción" name="description" onChange={this.onChange} value={this.state.description}></textarea>
                <button type="submit">Enviar tarea</button>
            </form>
        )
    }
}
