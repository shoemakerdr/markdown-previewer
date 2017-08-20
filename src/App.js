import React, { Component } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown'

const initialState = {
    input: '## Preview Window\n**This** is where your *markdown* text will be:\n\n * rendered \n* as \n* html'
        }

class App extends Component {
    constructor () {
        super()
        this.setInput = this.setInput.bind(this)
        this.state = initialState
    }

    setInput (event) {
        const value = event.target.value === '' ? initialState.input : event.target.value
        this.setState({
            input: value 
        })
    }

    render() {
        return (
            <div className="App">
                <div className='App-header'>
                    <h1>Markdown Previewer</h1>
                </div>
                <div className='inputOutput'>
                    <textarea className='input' placeholder='Type markdown here to be rendered as HTML' type='text' onInput={this.setInput}></textarea>
                    <ReactMarkdown className='ReactMarkdown' source={this.state.input} />
                </div>
            </div>
        );
    }
}

export default App;
