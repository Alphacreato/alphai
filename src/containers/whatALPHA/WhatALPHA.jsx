import React from 'react'
import Feature  from '../../components/feature/Feature'
import './whatALPHA.css';

const WhatALPHA = () => {
  return (
    <div className="alpha_whatalpha section-margin" id="alpha">
      <div className='alpha_whatalpha-feature'>
        <Feature title= "What is Alpha" text="he field of AI that enables machines to interpret and make decisions based on visual inputs from the world, such as images and videos. Applications include facial recognition, autonomous vehicles, and medical image analysis."/>
      </div>
      <div className="alpha_whatalpha-heading">
         <h1 className="gradient_text">The potential is limitless beyond what you can envision.</h1>
         <p>Delve into the Library.</p>
      </div>

      <div className="alpha_whatalpha-container">
         <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
         <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
         <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      </div>
    </div>
  )
}

export default WhatALPHA