import React, {Component} from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

class App extends Component {

    render() {
        // render function cannot have sibling elements.
        // we have to wrap in the div element
        return (
            <div>
                <h2>Todo List</h2>
                <TodoInput />
                <TodoList />
            </div>
        )
    }
}

export default App
