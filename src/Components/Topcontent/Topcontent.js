import React from 'react';
import { Link } from 'react-scroll';
import './Topcontent.css';

const Topcontent = () => {
  const handleDownload = () => {
    const cvUrl = 'https://drive.google.com/file/d/1T50RccMjcIoWrdu2_bqpWmmS5ghnoj6_/view?usp=drive_link';

    // Create link element
    const link = document.createElement('a');

    // Set the download link
    link.href = cvUrl;
    link.setAttribute('download', 'Mr.R.Santhana_Kannan_CV.pdf'); // Set desired filename

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link element from the document
    document.body.removeChild(link);
  };
  
  

  return (
    <div className='topcontent'>
      <div className='topcontent_container'>
        <h1>Mr.R.Santhana Kannan</h1>
        <p>A professional frontend developer</p>

        <button className='topcontent_downloadbutton' onClick={handleDownload}>
          Download CV
        </button>

        <Link to="projects" smooth={true} duration={500}>
          <button className='topcontent_workbutton' >My Work</button>
        </Link>
      </div>
    </div>
  );
};

export default Topcontent;

