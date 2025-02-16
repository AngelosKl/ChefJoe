import React from "react";

interface WorkExperienceProps {
    onSectionChange: (view: "home") => void;
}

interface Workplace {
    name: string;
    jobTitle: string;
    duration: string;
    responsibilities: string[];
    signatureDishes: { dish: string; photo: string; info: string }[];
    reviews: { reviewer: string; comment: string; rating: number }[];
}

const workplaces: Workplace[] = [
    {
        name: "Nordic Flavors Restaurant",
        jobTitle: "Head Chef",
        duration: "2018 - 2022",
        responsibilities: [
            "Developed seasonal Norwegian-inspired menus",
            "Supervised a team of 10 kitchen staff",
            "Maintained high standards of food quality and safety",
            "Trained staff in traditional and modern Norwegian techniques"
        ],
        signatureDishes: [
            { dish: "Rakfisk Tartare", photo: "/images/rakfisk.jpg", info: "Aged trout with pickled onions and mustard sauce." },
            { dish: "Reindeer Stew", photo: "/images/reindeer-stew.jpg", info: "Traditional Norwegian dish with lingonberry sauce." }
        ],
        reviews: [
            { reviewer: "Michelin Guide", comment: "A perfect blend of tradition and innovation.", rating: 5 },
            { reviewer: "Local Food Critic", comment: "Best seafood flavors in Oslo!", rating: 4.8 }
        ]
    },
    {
        name: "Aegean Tastes",
        jobTitle: "Sous Chef",
        duration: "2015 - 2018",
        responsibilities: [
            "Crafted authentic Greek dishes with a modern twist",
            "Worked closely with local fishermen for fresh seafood",
            "Managed kitchen operations during peak hours",
            "Ensured adherence to traditional Greek culinary techniques"
        ],
        signatureDishes: [
            { dish: "Moussaka", photo: "/images/moussaka.jpg", info: "Layers of eggplant, minced meat, and creamy béchamel sauce." },
            { dish: "Grilled Octopus", photo: "/images/octopus.jpg", info: "Charred to perfection, served with fava puree." }
        ],
        reviews: [
            { reviewer: "Greek Food Journal", comment: "Authentic flavors straight from the islands.", rating: 4.9 },
            { reviewer: "TripAdvisor User", comment: "The best moussaka I’ve ever had!", rating: 5 }
        ]
    }
];

const WorkExperience: React.FC<WorkExperienceProps> = ({ onSectionChange }) => {
    return (
        <div className="work-experience-container">
            <h1>Work Experience</h1>
            {workplaces.map((workplace, index) => (
                <div key={index} className="workplace-section">
                    <h2>{workplace.name}</h2>
                    <h3>{workplace.jobTitle} ({workplace.duration})</h3>
                    <ul>
                        {workplace.responsibilities.map((responsibility, i) => (
                            <li key={i}>{responsibility}</li>
                        ))}
                    </ul>

                    <h3>Signature Dishes</h3>
                    <div className="dish-gallery">
                        {workplace.signatureDishes.map((dish, i) => (
                            <div key={i} className="dish-card">
                                <img src={dish.photo} alt={dish.dish} className="dish-photo" />
                                <p><strong>{dish.dish}</strong> - {dish.info}</p>
                            </div>
                        ))}
                    </div>

                    <h3>Reviews</h3>
                    <div className="reviews-section">
                        {workplace.reviews.map((review, i) => (
                            <div key={i} className="review-card">
                                <p><strong>{review.reviewer}:</strong> {review.comment}</p>
                                <p>⭐ {review.rating} / 5</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <button className="back-button" onClick={() => onSectionChange("home")}>
                ← Back to Home
            </button>
        </div>
    );
};

export default WorkExperience;
