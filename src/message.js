import React, { useState } from 'react';

const Message = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submittedMessage, setSubmittedMessage] = useState('');
    const [submittedData, setSubmittedData] = useState('');

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData({
            name: name,
            email: email,
            message: message,
            });
        setSubmittedMessage(`Thank you, ${name}!We have received your message: "${message}"`);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='contact-page-container'>
            <div className='contact-form-container'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type="text" value={name} onChange={handleNameChange} required />
                    </div>
                    <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} required />
                    </div>
                    <div>
                        <label>Message:</label>
                        <textarea value={message} onChange={handleMessageChange} required />
                    </div>
                    <input type="submit" value="Submit" />
                </form>


                {/*Display the submitted message*/}
                {submittedMessage && (
                    <div className="submitted-message">
                        <h3>Submitted Message:</h3>
                        <p>{submittedMessage}</p>
                        <p><strong>Name:</strong> {submittedData.name}</p>
                        <p><strong>Email:</strong> {submittedData.email}</p>
                        <p><strong>Message:</strong> {submittedData.message}</p>
                        <button class="styled-button" onClick={() => setSubmittedMessage('')}>Submit Another Message</button>

                    </div>
                )}
        </div>

        <div className="map-container">
            {/*Embedded map using iframe*/}
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.4155516542905!2d8.568172461892175!3d11.996181684825755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae817cc2709ecb%3A0xd88b17fa4595980a!2sMusa%20Tudun%20Wada%20Link%2C%20Giginyu%2C%20Kano%20700213%2C%20Kano!5e0!3m2!1sen!2sng!4v1740077172033!5m2!1sen!2sng" 
            style={{ width: '100%', height: '400px', border: 0 }}
            allowFullscreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Map of our location">
                </iframe>
        </div>
    </div>
    );
};

export default Message;
