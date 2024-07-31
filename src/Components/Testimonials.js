import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div id='testimonials' className='testimonials'>
        <h1>Testimonials</h1>
        <div className="test-container">
        <div className="test-card">
            <img src="test1.png" alt="" />
            <p>Yash is clear and concise with his task at hand. His clarifies miscommunication and provides clear and timely updates along the way, which inspires the team and builds trust. He fundamentally understands the goal and ensures the most effecient workflow to achieve it."</p>
            <button>Stephaine Sherrif - Cheif of Staff at Nas.io</button>
        </div>
        <div className="test-card1">
            <img src="test2.png" alt="" />
            <p>"Yash goes above and beyond to give high quality output and goes whatever it gets to get there. Aything you throw at hi he does his best to get it done."</p>
            <button>Nuseir Yassin -  CEO at Nas Company</button>
        </div>
        <div className="test-card2">
            <img src="test3.png" alt="" />
            <p>"Yash is one of the most creative people I have worked. He brings a new level of energy to the team. He also shows incredible initative."</p>
            <button>Kelvin Pui - Head of Finance at Nas Company</button>
        </div>
        </div>
    </div>
  )
}

export default Testimonials
