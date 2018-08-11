import React from 'react';
import Newsletter from './Newsletter';

function Footer(props) {
  return (
    <div className="footer">
      <Newsletter />
      <footer className="content">
        <p>Footer</p>
      </footer>
    </div>
  )
}

export default Footer;