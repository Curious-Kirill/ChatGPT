import React from 'react'
import "./features.css"
import { Feature } from '../../components/index.'

const featuresData = [
  {
    title: 'Provides Assistance to Educators ',
    text: "Using ChatGPT in higher education can assist professors in multiple ways."
},
{
  title: 'Improves Accessibility to Education',
  text: "ChatGPT can speak out the responses for students with sight impairments. It can also summarize the topics or concepts from a course for students with learning disabilities. In addition, it enables students who have trouble typing or using a keyboard to speak out their queries. "
},
{
  title: 'Helps with Exam Preparation',
  text: "When exams are around the corner, ChatGPT can help students prepare. It can recapitulate their class notes with emphasis on key terms. It can help them form an ideal answer to an important question. "
},
{
  title: 'Biased Responses',
  text: "AI chatbots are trained on a massive dataset. If the dataset contains biases, chances are that some of the responses produced by Chat GPT will be biased. These biases are harmful and can amplify discrimination against certain groups of people and create an unhealthy environment. "
},
]
const Features = () => {
  return (
    <div className='gpt3__features section__padding' id="features">
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.

        </h1>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className='gpt3__features-container'>
        {featuresData.map((item,index)=>(
          <Feature title={item.title} text={item.text} key={item.title+ index}/>
        ))}
      </div>

      
      
    </div>
  )
}

export default Features
