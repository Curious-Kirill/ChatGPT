import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'
import './possibility.css';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id="possibility">
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility"/>
      </div>
      <div className='gpt3__possibility-content' > 
       <h4>Request Early Access to Get Started</h4>
       <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
       <p>If you missed the whole ChatGPT buzz, or you're not exactly sure about what it is, let's help you get up to speed. ChatGPT is a conversational artificial Intelligence chatbot that can answer just about any question you throw at it.</p>
       <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
