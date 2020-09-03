import React, {Component} from 'react';
import './Task.css';
import PropTypes from 'prop-types';

class Task extends Component {
    StyleComplete(){
        return{
            fontSize: '20px',
            color: this.props.task.done ? 'white' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render(){
        const {task} = this.props;
        // const redColor = {background:'red'};

    return <div className='gray' style={this.StyleComplete()}>
            {task.title} - 
            {task.description} - 
            {task.done} -
            {task.id}
            <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}/>
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>
                x
            </button>
       </div>
    }
} //class Task 

Task.propTypes = {
    task: PropTypes.object.isRequired
}

const btnDelete ={
    fontSize: '18px',
    background: '#ea2017',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task;