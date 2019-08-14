import React, {Component} from 'react';
import './IdeaForm.css';

class IdeaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  submitIdea = (event) => {
    event.preventDefault();
    const newIdea = {
      id: Date.now(),
      ...this.state,
    }
    this.props.addIdea(newIdea)
    this.setState({
      title: "",
      description: ""
    })
  }

  render() {
    return (
      <form className="IdeaForm">
        <input 
          type="text" 
          placeholder="Title"
          name="title"
          value={this.state.title}
          onChange={event => this.handleChange(event)}/>
          <br />
        <input 
          type="text" 
          placeholder="Description" 
          name="description"
          value={this.state.description}
          onChange={event => this.handleChange(event)}/>
          <br />
        <button onClick={event => this.submitIdea(event)}>Add Idea</button>
      </form>
    )
  }
}

export default IdeaForm;