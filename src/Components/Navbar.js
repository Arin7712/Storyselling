import AnchorLink from 'react-anchor-link-smooth-scroll';
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nava">
      <div className="logo">
        <div>Storyselling</div>
      </div>
      <div className="mob-open">
      <i className={`fa-solid fa-bars ${menuOpen ? 'hide' : 'show'}`} onClick={toggleMenu}></i>
      </div>
      
      <div className={`nav-links ${menuOpen ? 'open' : 'closed'}`}>
        <ul>
          <i className="fa-solid fa-xmark nav-mob-close" onClick={toggleMenu}></i>
          <li><AnchorLink className='anchor-link' offset={50} href="/"><p>Home</p></AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href="#work"><p>Our Work</p></AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href="#service"><p>Our Services</p></AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href="#testimonials"><p>Testimonials</p></AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href="#form"><p>Contacta</p></AnchorLink></li>
        </ul>
      </div>
      <div className="social-links">
        <a href='https://www.instagram.com/yashvikhankar?igsh=MTZyaGIyb213aHViZg==' target='_blank'><i class="fa-brands fa-instagram fa-2xl"></i></a>
        <a href="https://www.linkedin.com/in/yash-vikhankar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fa-brands fa-linkedin fa-2xl"></i></a>
        <a href="https://youtube.com/@yashvikhankar?si=hHUargVDpGlHWq5W"><i className="fa-brands fa-youtube fa-2xl"></i></a>
      </div>
    </div>
  );
};

export default Navbar;


