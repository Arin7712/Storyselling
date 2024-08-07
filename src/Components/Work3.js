import {useEffect} from 'react'
import './Work3.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Work3 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1400, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="card" data-aos='fade-up'>
    <div className="card-text">
        <h1>Real Estate</h1>
        <p>Diveagar is located in Raigad district in Maharashtra's Konkan. Real Estate deals are closed rarely through verbal communication.</p>
        <p>Potential buyers need a visual walk through of the land and it's offerings. This video was created to <span>visually represent the value</span> an investor would get if they invested in this land.</p>
    </div>
    <div className="card-img">
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/rEifOtNJmlw?si=_mvC2ooHrzPA-iI9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>    </div>
</div>
  )
}

export default Work3
