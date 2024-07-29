import React from 'react'
import './Work.css'

const Work = () => {
  return (
    <div id='work' className="carda">
        <div className="carda-text">
            <h1>Intrinsicvalue.ai</h1>
            <p><span>InstrinsicValue.ai</span> is a FinTech product that Value Investors to instantly determine the Intrinsic Value of any stock with a single click.<br/> The application has tools to help investors <span>select stocks</span> and make <span>informed descisions, </span>by providing solid facts rather than opinions and recommendations. This video explains the product in simple, plain words than any user can understand.</p>
            <p>Through this video, intrinsicvalue.ai gained <span>1000+ authentic users</span></p>
        </div>
        <div className="carda-img">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/3OwJ1PvEvnU?si=fywkbb7PHEGd4GM5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
</div>
  )
}

export default Work
