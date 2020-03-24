import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="Contact">
            <div><img src="https://randomuser.me/api/portraits/women/95.jpg" className='avatar'/></div>
            <div>
                <h4>Kenzi Bell</h4>
                <div className="status">
                    <div className="status-online"></div>
                    <p>Online</p>
                </div>
            
            </div>
        </div>
    );
  }
  
  export default Contact;