import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const [finalSentence, setFinalSentence] = useState('')

  const onButtonClick = () => {
    setFinalSentence(props.revealPoem())
  }

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
            {finalSentence}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick = {onButtonClick} />
      </div>
    </div>
  );
}

FinalPoem.propTypes = {
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
