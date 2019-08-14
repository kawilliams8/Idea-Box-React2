import React, { Component } from 'react';
import Ideas from './Ideas';
import IdeaForm from './IdeaForm';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: [
        // { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
        // { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
        // { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
      ]
    }
    this.addIdea = this.addIdea.bind(this);
    this.removeIdea = this.removeIdea.bind(this);
  }

  addIdea(newIdea) {
    this.setState({ideas: [...this.state.ideas, newIdea]})
  }

  removeIdea(id) {
    let remainingIdeas = this.state.ideas.filter(idea => idea.id !== id)
    this.setState({ideas: remainingIdeas})
  }

  render() {
    return (
      <main className="App">
        <h1> Idea Box!</h1>
        <IdeaForm addIdea={this.addIdea}/>
        <Ideas ideas={this.state.ideas} removeIdea={this.removeIdea}/>
      </main>
    )
  }
}

export default App;
