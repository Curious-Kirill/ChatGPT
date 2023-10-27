import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="Artificial intelligence products have seen a meteoric rise within the last few years. We've been wowed by AI writing tools, AI text-to-image generators, and even AI self-portraits. Now, ChatGPT, an AI chatbot that is taking the internet by storm, is giving us a glimpse into the potential of AI technology.

" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="AI could really help you to create high-functional chatbots." />
      <Feature title="Knowledgebase" text="Whether you're an experienced programmer or a newbie, you're bound to run into a few bugs in your code from time to time. ChatGPT can help you narrow down the problem within your code, saving you hours looking for a misplaced comma. You can also write entire blocks of functional code snippets from scratch or analyze existing code bases to figure out the best ways to use them. " />
      <Feature title="Education" text="One of ChatGPT's greatest strengths is its 'learned creativity'. Unlike some AI solutions, ChatGPT doesn't just deal with soulless robotic concepts. It is also versed in creative endeavors, including writing music. You can write just about any song in most major music genres." />
    </div>
  </div>
);

export default WhatGPT3;