import {useEffect} from 'react'
import './Home.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="main">
    <div id='home' className='home'>
      <div className="home-text" data-aos='fade-up'>
        <h1>A good product needs the right awareness and distribution to be a <span>GREAT</span> product!</h1>
        <p>Deliver your story effectively.</p>
      </div>
      <div className="home-video" data-aos='zoom-in' data-aos-deply='200'>
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/rjt48QL6hV4?si=WGazbXutPAkFGJvs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <AnchorLink href='#form' offset={50} className='anchor-link-btn'><button className='home-button'>Get in touch</button></AnchorLink>
      </div>
      
    </div>
    <div className="align-left">
      <h1 className='card-text-h1'>Our Work</h1>
      </div>
    </div>
  )
}

export default Home
