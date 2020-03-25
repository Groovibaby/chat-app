import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

function Contact(props) {
    return (
        <div className="Contact">
            <div><img src={props.image} className='avatar'/></div>
            <div>
                <h4>{props.name}</h4>
                <div className="status">
                    <div className={props.online ? 'status-online' : 'status-offline'}></div>
                    <p>{props.online ? 'Online' : 'Offline'}</p>
                </div>
            
            </div>
        </div>
    );
  }

Contact.propTypes = {
image: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
};  
  
export default Contact;