import {useEffect} from 'react'
import './Service.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = () => {

  useEffect(() => {
    AOS.init({
      duration: 1400, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once
    });
  }, []);

  return (
    <div id='service' className='service' data-aos='fade-up'>
      <div className='service-title'>
        <h1>Our Services</h1>
      </div>
      <div className="cardx-container">
      <div className="cardx">

            <h1>Landing Page Video</h1>
            <hr className='underline'/>
            <div className="cardx-components">
              <div className="cardx-comp">
            <p><img src="circle.png" alt="" width='14px' height='14px' /> Ideation</p>
<p><img src="circle.png" alt="" width='14px' height='14px' /> Narrative Building</p>
<p><img src="circle.png" alt="" width='14px' height='14px' /> Scripting</p>
<p><img src="circle.png" alt="" width='14px' height='14px' /> UX Design</p>
<p><img src="circle.png" alt="" width='14px' height='14px' /> Shooting</p>
<p><img src="circle.png" alt="" width='14px' height='14px' /> Editing</p>
</div>

            </div>
            <div className="cardx-foot">
            <h5>Turn visitors into users with visually stunning explanatory video and highly effective landing pages</h5>
            </div>
        </div>
        <div className="cardx">

<h1>Social Media</h1>
<hr className='underline'/>
<div className="cardx-components">
  <div className="cardx-comp">
  <p><img src="circle.png" alt="" width='14px' height='14px' /> Ideation</p>
<p><img src="circle.png" alt="" width='14px' height='14px' /> Strategy</p>
<p><img src="circle.png" alt="" width='14px' height='14px' /> Scripting</p>
<p><img src="circle.png" alt="" width='14px' height='14px' /> Shooting</p>
<p><img src="circle.png" alt="" width='14px' height='14px' /> Editing</p>
<p><img src="circle.png" alt="" width='14px' height='14px' /> Publishing</p>
</div>
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
