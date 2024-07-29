import React from 'react'
import './Contact.css'

const Contatct = () => {

  const [result, setResult] = React.useState("");

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

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's chat</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo beatae ratione modi, quam ad, placeat minima ducimus sunt dignissimos ipsam distinctio eaque, consequuntur repudiandae facere. Aperiam inventore eum dolores amet?</p>
            <div className="contact-details">
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
                <p>12, xyz, Pune Maharashtra</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor=''>Your Name:</label>
            <input type='text' placeholder='Enter your name...' name='name'/>

            <label htmlFor=''>Your Email</label>
            <input type='email' placeholder='Enter your email...' name='email'/>

            <label htmlFor=''>Your message..</label>
            <textarea name='message' rows='8' placeholder='enter your message...'></textarea>

            <button className='contact-submit' type='submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contatct
