import {useEffect} from 'react'
import './Work.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: 1400, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once
    });
  }, []);
  return (
    <div id='work' className="carda" data-aos='fade-up' >
        <div className="carda-text">
            <h1>Intrinsicvalue.ai</h1>
            <p>InstrinsicValue.ai is a <span>FinTech product</span> that enables Value Investors to instantly determine the Intrinsic Value of any stock with a single click.<br/> The application has tools to help investors select stocks and make informed decisions, by providing solid facts rather than opinions and recommendations. This video explains the product in simple, plain words that any user can understand.</p>
            <p>Through this video, intrinsicvalue.ai gained <span>1000+ authentic users</span>.</p>
        </div>
        <div className="carda-img">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/3OwJ1PvEvnU?si=fywkbb7PHEGd4GM5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
</div>
  )
}

export default Work
