import {useEffect} from 'react'
import './Work2.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Work2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1400, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="cardb" data-aos='fade-up'>
      <div className="cardb-img">
      <iframe title="vimeo-player" src="https://player.vimeo.com/video/991467509?h=376515c570" width="100%" height="100%" frameborder="0"allowfullscreen></iframe>
      </div>
      <div className="cardb-text">
        <h1>Culture Max</h1>
        <p>Culturemax is a game available and free to download on the App Store and the Play Store.</p>
        <p>This game aims to spread awareness about the Marathi Language and Maharashtrian culture through fun card games.</p>
        <p>This video, in a snapshot, explains <span>the purpose</span> of the game and <span>how to play it</span>.</p>
    </div>
      
      
    
</div>
  )
}

export default Work2;
