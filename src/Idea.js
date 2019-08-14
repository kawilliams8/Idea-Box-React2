import React from 'react';
import './Idea.css';

const Idea = (props) => {

  return (
    <section className="Idea">
      <h2>{props.idea.title.toUpperCase()}</h2>
      <h3>{props.idea.description}</h3>
      <button onClick={() => props.removeIdea(props.idea.id)}>Delete Idea</button>
    </section>
  )
}

export default Idea;