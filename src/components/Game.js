import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  const [sentences, setSentences] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' ');

  const addSentence = (formFields) => {
    const newSentences = [...sentences]
    newSentences.push(`The ${formFields.adj1} ${formFields.noun1} ${formFields.adverb} ${formFields.verb} the ${formFields.adj2} ${formFields.noun2}`)
    setSentences(newSentences)
  }

  const revealPoem = () => {
    setIsSubmitted(true);
    return sentences.map( sentence => {
      return(
        <p>{sentence}</p>
      )
    })

    
  }
  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      {(sentences.length > 0) ? <RecentSubmission submission = {sentences[sentences.length - 1]}/> : ''}

      {isSubmitted ? '' : <PlayerSubmissionForm sendSubmission = {addSentence} fields = {FIELDS} />}

      <FinalPoem revealPoem = {revealPoem} submissions = {sentences}/>

    </div>
  );
}


const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

export default Game;
