import React from "react";

interface AboutMeProps {
    onSectionChange: (view: "home") => void;
}

const AboutMe: React.FC<AboutMeProps> = ({ onSectionChange }) => {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>About Me</h1>
                <p>Passionate about culinary arts and innovation.</p>
            </div>

            <div className="about-content">
                <h2>My Journey</h2>
                <p>
                    Welcome! I am a dedicated professional with a love for creating extraordinary culinary experiences.
                    With years of experience in the industry, I specialize in various cuisines and techniques that bring
                    unique flavors to life.
                </p>
            </div>

            <div className="certifications">
                <h2>Certifications</h2>
                <ul>
                    <li>🎖️ Professional Chef Certification</li>
                    <li>🎖️ Advanced Culinary Techniques</li>
                    <li>🎖️ Food Safety & Sanitation</li>
                    <li>🎖️ International Cuisine Mastery</li>
                </ul>
            </div>

            <button className="back-button" onClick={() => onSectionChange("home")}>
                ← Back to Home
            </button>
        </div>
    );
};

export default AboutMe;
