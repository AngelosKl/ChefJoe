import React, { useState } from "react";

interface ContactProps {
    onSectionChange: (view: "home") => void;
}

const Contact: React.FC<ContactProps> = ({ onSectionChange }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSendEmail = () => {
        const { name, email, message } = formData;
        const subject = `New Contact Message from ${name}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
        const mailtoLink = `mailto:your.email@example.com?subject=${encodeURIComponent(subject)}&body=${body}`;

        window.location.href = mailtoLink;
    };

    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p>Have any questions or want to get in touch? Send me a message below.</p>

            {/* Contact Form */}
            <div className="contact-form">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="JohnDoe@gmail.com"
                    required
                />

                <label>Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    rows={5}
                    required
                />

                <button onClick={handleSendEmail}>Send Message</button>
            </div>

            {/* Contact Details */}
            <div className="contact-details">
                <h2>My Contact Info</h2>
                <p>📧 Email: your.email@example.com</p>
                <p>📞 Phone: +123 456 7890</p>
                <p>📍 Location: Your City, Country</p>
            </div>

            <button className="back-button" onClick={() => onSectionChange("home")}>
                ← Back to Home
            </button>
        </div>
    );
};

export default Contact;
