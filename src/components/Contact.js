import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: props.online
        }
    }
    render() {
        return (
            <div className="Contact">
                <div><img src={this.props.image} alt={this.props.name} className='avatar'/></div>
                <div>
                    <h4>{this.props.name}</h4>
                    <div 
                        onClick={event => {
                            const newStatus = !this.state.online;
                            this.setState({ online: newStatus });
                        }}
                        className="status">
                        <div className={this.state.online ? 'status-online' : 'status-offline'}></div>
                        <p>{this.state.online ? 'Online' : 'Offline'}</p>
                    </div>
                </div>
            </div>
        )
    }
}

Contact.propTypes = {
online: PropTypes.bool.isRequired,
image: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
};  
  
export default Contact;