import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      
      <div className="gpt3__blog-container_groupA">
      <a href="https://www.independent.co.uk/tech/competition-and-markets-authority-chatgpt-b2413561.html">  
        <Article imgUrl={blog01} date="Sep 18, 2023" text="UK competition regulator proposes guiding principles to make AI market safe." />
        </a>
      </div>
  
      <div className="gpt3__blog-container_groupB">
        <a href='https://www.independent.co.uk/tech/amazon-alexa-ai-artificial-intelligence-chatgpt-llm-b2415759.html'><Article imgUrl={blog02} date="Sep 21, 2023" text="Amazon Alexa gets new AI powers, with the same kind of brain as ChatGPT" /></a>
        <a href='https://economictimes.indiatimes.com/tech/technology/major-ai-models-not-very-transparent-report/articleshow/104555580.cms'>  <Article imgUrl={blog03} date="Oct 19, 2023" text="Major AI models not very transparent, says report" /></a>
        <a href="https://www.theguardian.com/technology/2023/oct/26/ai-artificial-intelligence-investment-boom"><Article imgUrl={blog04} date="Sep 26, 2023" text="Humanity at risk from AI 'race to the bottom', says tech expert" /></a>
        <a href="https://www.9news.com.au/technology/ai-industry-and-researchers-sign-artificial-intelligence-statement-warning-of-extinction-risk/da3f9f76-132b-459f-a9b3-3470d9ead063"><Article imgUrl={blog05} date="May 31, 2023" text="AI industry and researchers sign statement warning of 'extinction' risk" /></a>
      </div>
    </div>
  </div>
);

export default Blog;