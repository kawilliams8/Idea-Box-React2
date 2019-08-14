import React from 'react';
import Idea from './Idea';

const Ideas = (props) => {

  return (
    props.ideas.map(idea => {
      return <Idea 
      key={idea.id} 
      idea={idea} removeIdea={props.removeIdea}/>
    })
  )
}

export default Ideas;