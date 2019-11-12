import React from 'react'
import { FiChevronDown } from 'react-icons/fi'

const OurFlavour = () => {

  return (
    <div className="our-flavour-component" >
      <h1>KEEP THE CONSISTENCY IN THE FLAVOUR AND GUARANTEE YOUR SUPPLY</h1>
      <div className="our-flavour-component-cards">
        <div className="our-flavour-component-card">
          <p>VERTICAL INTEGRATION, OWN CROPS, AND TRACEABILITY</p>
          <FiChevronDown />
        </div>
        <div className="our-flavour-component-card">
          <p>VERTICAL INTEGRATION, OWN CROPS, AND TRACEABILITY</p>
          <FiChevronDown />
        </div>
        <div className="our-flavour-component-card">
          <p>QUALITY PROCESS</p>
          <FiChevronDown />
        </div>
      </div>
    </div >
  )
}

export default OurFlavour;