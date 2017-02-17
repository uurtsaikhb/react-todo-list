import React, { Component } from 'react'

class TodoInput extends Component {

    constructor (props) {
        super (props)
        this.state = {
            inputText: ''
        }
    }

    handleChange (event) {
        this.setState({
            inputText: event.target.value
        })
    }

    render () {
        return (
            <div>
                <input
                    placeholder = "Type in your todo."
                    value = { this.state.inputText }
                    onChange = { this.handleChange.bind(this) }
                    type = "text"/>
                <button>Submit</button>
            </div>
        )
    }
}

export default TodoInput
