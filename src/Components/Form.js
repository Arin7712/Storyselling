import {useEffect} from 'react'
import React from 'react'
import './Form.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Form = () => {

    const [result, setResult] = React.useState("");
    useEffect(() => {
        AOS.init({
          duration: 1400, // Animation duration in milliseconds
          once: true,     // Whether animation should happen only once
        });
      }, []);

      const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "6649b6e1-fe0d-46e8-b841-c4082f4ae3ae");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          alert('Sent Successfully!')
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

      const textarea = document.getElementById('auto-resizing-textarea');

textarea.addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});

  return (
    <div id='form' className="new-contact">
        <div className="contact-left" data-aos='fade-up'>
        <div className="contact-details">
            <div className="yash">
                <img src="yash.png" alt="" width={'50px'} height={'50px'}/>
                <div className="yash-text">
                <h5>Yash Vikhankar</h5>
                <p>Founder, Storytelling</p>
                </div>
            </div>
                <div className="contact-detail">
                <i class="fa-solid fa-envelope"></i>
                <p> yash2410@gmail.com</p>
                </div>
                <div className="contact-detail">
                <i class="fa-solid fa-phone"></i>
                <p>+91 95522 25395
                </p>
                </div>
                <div className="contact-detail">
                <i class="fa-solid fa-house"></i>
                <p>Pune Maharashtra</p>
                </div>
            </div>
            </div>
    <div className="matrix" data-aos='zoom-in'>
    <section className='container'>
        <form onSubmit={onSubmit} action="#" className='form'>
            <div className="input-box">
                <label htmlFor="">Name*</label>
                <input required type="text" placeholder='Enter your name'/>
            </div>
            <div className="input-box">
                <label htmlFor="">Email*</label>
                <input required type="text" placeholder='Name@example.com'/>
            </div>

            <div className="column">
            <div className="input-box">
                <label htmlFor="">Country code*</label>
                <input id='country-code' type="text" placeholder='+00'/>
            </div>
            <div className="input-box">
                <label htmlFor="">Phone number*</label>
                <input id='phone-number' type="text" placeholder='Your Number'/>
            </div>
            </div>
            
            <div className="column">
            <div className="input-box">
                <label htmlFor="text">Organization*</label>
                <input required type="text" placeholder='Your organization'/>
            </div>

            <div className="input-box">
                <label htmlFor="text">Role*</label>
                <input required type="text" placeholder='Role'/>
            </div>
            </div>

            <div className="gender-box">
              <h3>What service you interested in?</h3>
              <div className="gender-option">
                <div className="gender">
                  <input type="checkbox" id='check-male' name='gender' />
                  <label htmlFor="check-male">Landing Page Video</label>
                </div>
                <div className="gender">
                  <input type="checkbox" id='check-female' name='gender' />
                  <label htmlFor="check-female">Social Media</label>
                </div>
                <div className="gender">
                  <input type="checkbox" id='check-other' name='gender' />
                  <label htmlFor="check-other">Other</label>
                </div>
              </div>
            </div>

            <div className="input-box">
                <label htmlFor="text">Tell us more*</label>
                <textarea id="auto-resizing-textarea"></textarea>
            </div>

            <button>Submit</button>
        </form>
    </section>
    </div>
    </div>
  )
}

export default Form
