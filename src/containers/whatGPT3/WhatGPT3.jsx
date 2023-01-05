import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whpt3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem voluptas dolore veniam dolores, nobis deleniti minus, ex temporibus ipsum vero aperiam ducimus beatae quaerat?" />
      </div>
      <div className="gpt3__watgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>

      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea corporis voluptas. Ea." />
        <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consectetur molestias numquam magni tempore? Animi, asperiores rem." />
        <Feature title="Education" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea unde dolor magnam deserunt eaque? Architecto saepe deleniti eos iste, natus autem!" />
      </div>
    </div>
  )
}

export default WhatGPT3





