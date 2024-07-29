import React from 'react'
import './Service.css'

const Service = () => {
  return (
    <div id='service' className='service'>
      <div className='service-title'>
        <h1>Our Services</h1>
      </div>
      <div className="cardx-container">
      <div className="cardx">

            <h1>Landing Page</h1>
            <hr className='underline'/>
            <div className="cardx-components">
            <p><img src="circle.png" alt="" width='16px' height='16px' /> Ideation</p>
            <p><img src="circle.png" alt="" width='16px' height='16px' /> Narrative Building</p>
            <p><img src="circle.png" alt="" width='16px' height='16px' /> Scripting</p>
            <p><img src="circle.png" alt="" width='16px' height='16px' /> UX Design</p>
            <p><img src="circle.png" alt="" width='16px' height='16px' /> Shooting</p>
            <p><img src="circle.png" alt="" width='16px' height='16px' /> Editing</p>
            </div>
            <div className="cardx-foot">
            <h5>Turn visitors into users with visually stunning and highly effective landing pages</h5>
            </div>
        </div>
        <div className="cardx">

<h1>Social Media</h1>
<hr className='underline'/>
<div className="cardx-components">
<p><img src="circle.png" alt="" width='16px' height='16px' /> Scripting</p>
<p><img src="circle.png" alt="" width='16px' height='16px' /> Shooting</p>
<p><img src="circle.png" alt="" width='16px' height='16px' /> Editing</p>
<p><img src="circle.png" alt="" width='16px' height='16px' /> UX Design</p>
<p><img src="circle.png" alt="" width='16px' height='16px' /> Shooting</p>
<p><img src="circle.png" alt="" width='16px' height='16px' /> Editing</p>
</div>
<div className="cardx-foot">
<h5>Build a brand and community through engaging videos</h5>
</div>
</div>
      </div>
      </div>
  )
}

export default Service
