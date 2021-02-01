import React from 'react';

import Link from '../Link/Link';

const footer = () => {
  return (
    <footer className=''>
      <div className='container text-light pt-5'>
        <div className='row'>
       
          <div className='col-sm-6 col-md-6 col-lg-2 mb-5'>
            <div className='footer-title' style={{color:"  #060606"}}>
              <h6>Quick Links</h6>
            </div>
            <div className='footer-content'>
              <ul className='list-group quick-links'>
                <li>
                  <Link target='home' offset={-120}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link target='about'>About</Link>
                </li>
                <li>
                  <Link target='services'>Services</Link>
                </li>
                <li>
                  <Link target='contact'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
    
          <div className='col-sm-6 col-md-6 col-lg-3 mb-5' >
            <div className='footer-title' style={{color:"  #060606"}}>
              <h6>Contact Us</h6>
            </div>
            <div className='footer-content' >
              <p className='text-muted' >
                <small>Address : Yenepoya Institute Of Technology</small>
              </p>
              <p className='text-muted'>
                <small>Phone : +91 9074596408</small>
              </p>
              <p className='text-muted'>
                <small>E-mail : munavvarsinan01@gmail.com</small>
              </p>
              <div className='social-media mt-4' >
                <a href='https://www.facebook.com/profile.php?id=100004986287270' style={{color:"#060606"}}>
                  <i className='fab fa-facebook-f mr-4' />
                </a>
                <a href='https://twitter.com/MunavvarSinanKP' style={{color:"#060606"}}>
                  <i className='fab fa-twitter mr-4' />
                </a>
                <a href='https://www.instagram.com/__.munavvar.__/' style={{color:"#060606"}}>
                  <i className='fab fa-instagram mr-4' />
                </a>
                <a href='https://github.com/MunavvarSinan' style={{color:"#060606"}}>
                  <i className='fab fa-github' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-footer pt-3 pb-3 text-center' style={{marginTop:'10px'}}>
        <small>© All Right Reserved. Design By MUNAVVAR SINAN</small>
      </div>
    </footer>
  );
};

export default footer;
