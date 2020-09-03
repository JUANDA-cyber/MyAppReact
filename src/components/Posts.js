// rcc - crea componente
import React, { Component } from 'react'

export default class Posts extends Component {
    
    state = {
        posts: []
    }
    
    // una vez se haya cargado el componente
    async componentDidMount(){
        // peticion a otro servidor
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        // conviente lo que el formato a un json
        const data = await res.json();
        console.log(data);
        this.setState({posts: data})
    }
    
    render() {
        return (
            <div>
                <h1>Posts</h1>  
                {
                    this.state.posts.map(post => {
                        return <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    })
                }
               
                
            </div>
        )
    }
}
