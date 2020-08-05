import React, { Component } from 'react';
import './App.css';

import tasks from './samples/tasks.json';
// componentes
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';


class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) =>{
    // console.log(title, description)
    const newTask = {
      title: title,
      description: description,
      id: 45
    }
    console.log(newTask)
  }

  render(){
    
    return <div>

      <TaskForm addTask={this.addTask}/>
      <Tasks tasks={this.state.tasks}/>
    </div>
  }
}

export default App;

/* 
// primer ejercicio - ejemplo de cambiar estado a unos componentes 

// function Helloworld(props) {
//   return (
//     <div id="hello">
//       <h3>{props.subtitle}</h3>      
//       {props.mytext}
//     </div>
//   );
// }

class Helloworld extends React.Component {
  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show })
  }

  render() { 
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.toggleShow}>Cambiar estado</button>
        </div>
      );
    } else {
      return <h1>
        Elementos ocultos
      <button onClick={this.toggleShow}>Cambiar estado</button>
      </h1>
    }
  }
} //class Helloworld

function App() { 
  return (
    <div>
      This is my component:
      <Helloworld mytext="hello Juan David Guzman Hernandez" subtitle="example" />
      <Helloworld mytext="hola mundo" subtitle="otro" />
      <Helloworld mytext="hello esto es react!!" subtitle="más" />
    </div>
  );
}

// const App = () => <div>this is my component: <Helloworld/>  </div> //fincion flecha

// class App extends React.Component{ //usarla desde una clase
//   render(){
//     return <div>This is my component: <Helloworld/> </div>
//   } 
// }
 */
