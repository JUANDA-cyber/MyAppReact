import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import tasks from './samples/tasks.json';

// componentes
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';

class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) =>{
    // console.log(title, description)
    const newTask = {
      title: title,
      description: description,
      // agrega el id por el valor de la longitud de el arreglo
      id: this.state.tasks.length
    }
    this.setState({
      // voy a tomar todo lo que tenian las tareas y agregare uno nuevo
      tasks: [...this.state.tasks, newTask]
    })
    // console.log(newTask)
  }

  // eliminar tarea
  deleteTask = (id) =>{
    // filter devuelve un nuevo arreglo ignorando algunos datos
    // por cada tarea, examine si el id de la tarea es diferente del id que me estan pasando
    // si el id esta en las tareas que tengo, lo va a filtar
    const newTask = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: newTask})
  }

  // cambiar estado "done"
  checkDone = id =>{
    // devuelve el array con los datos actualizados 
      const newTasks = this.state.tasks.map(task => {
        if(task.id == id){
          task.done = !task.done
        }
        return task;
      });
      this.setState({tasks: newTasks})
  }

  render(){    
    return <div>
      <Router>
        {/* como un href de html */}
        <Link to="/">Home</Link>
        <br/>
        <Link to="/posts">Posts</Link>
        <Route exact path="/" render={() => {
          return <div>
            <TaskForm addTask={this.addTask}/>
            <Tasks 
              tasks={this.state.tasks} 
              deleteTask={this.deleteTask} 
              checkDone={this.checkDone}         
            />
          </div>
        }} >
        </Route>
        <Route path="/posts" component={Posts}/>

      </Router>
      
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
