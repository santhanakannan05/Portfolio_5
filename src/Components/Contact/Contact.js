import React from 'react';
import { Element } from 'react-scroll';
import { IconButton } from '@material-ui/core';
import { Facebook, Instagram, LinkedIn } from '@material-ui/icons';
import './Contact.css'




const Contact = () => {
  return (
    <Element className='contact' id='contact'>
      <h1>Contact</h1>
      <div className='contact_container'>
        <p>
          Email : <span>rsanthanakannan@gmail.com</span>
        </p>
        <p>
          Github Username : <span>santhanakannan05</span>
        </p>
        <div className='contact_icons'>
          <a href="https://www.linkedin.com/in/your-profile-url" target="_blank" rel="noopener noreferrer">
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          <a href="https://www.facebook.com/your-profile-url" target="_blank" rel="noopener noreferrer">
            <IconButton>
              <Facebook />
            </IconButton>
          </a>
          <a href="https://www.instagram.com/your-profile-url" target="_blank" rel="noopener noreferrer">
            <IconButton>
              <Instagram />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
}

export default Contact;
