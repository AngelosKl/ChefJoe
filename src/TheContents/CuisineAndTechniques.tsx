import React from "react";

interface CuisinesAndTechniquesProps {
    onSectionChange: (view: "home") => void;
}

const CuisinesAndTechniques: React.FC<CuisinesAndTechniquesProps> = ({ onSectionChange }) => {
    return (
        <div className="cuisine-container">
            <div className="cuisine-header">
                <h1>Norwegian & Greek Cuisine Mastery</h1>
                <p>Delve into the traditions, flavors, and techniques that define two of the most celebrated culinary cultures.</p>
            </div>

            <div className="cuisine-content">
                <h2>Norwegian Cuisine</h2>
                <p>
                    Norwegian cuisine is rich in seafood, dairy, and hearty meats. The cold climate has led to unique preservation
                    techniques, such as pickling, smoking, and drying, that are still used today. From the world-famous salmon to the
                    delicious “rakfisk” (fermented fish), Norwegian dishes are bold, rustic, and deeply tied to its natural landscapes.
                </p>

                <h3>Traditional Dishes</h3>
                <ul>
                    <li><strong>Gravlaks</strong> - Salmon cured with sugar, salt, and dill, served with mustard sauce and bread.</li>
                    <li><strong>Rømmegrøt</strong> - A rich, creamy porridge made from sour cream, flour, and butter.</li>
                    <li><strong>Raspeballer</strong> - Potato dumplings, often served with lamb or pork.</li>
                </ul>

                <h3>Techniques</h3>
                <p>
                    Some key Norwegian cooking techniques include:
                    <ul>
                        <li><strong>Smoking & Drying:</strong> Used for fish and meats, giving them deep, savory flavors.</li>
                        <li><strong>Curing:</strong> Especially for salmon, where fish is often salted or sugar-cured.</li>
                        <li><strong>Fermentation:</strong> Common for both fish (rakfisk) and vegetables.</li>
                    </ul>
                </p>
            </div>

            <div className="cuisine-content">
                <h2>Greek Cuisine</h2>
                <p>
                    Greek cuisine is known for its vibrant use of olive oil, fresh vegetables, and aromatic herbs. It's built on
                    thousands of years of tradition, with influences from Mediterranean, Middle Eastern, and Balkan cultures. Greek
                    food celebrates fresh, seasonal ingredients, simple preparation, and bold flavors.
                </p>

                <h3>Traditional Dishes</h3>
                <ul>
                    <li><strong>Spanakopita</strong> - Flaky pastry filled with spinach, feta cheese, and herbs.</li>
                    <li><strong>Moussaka</strong> - A rich, layered casserole made with eggplant, ground meat, and béchamel sauce.</li>
                    <li><strong>Souvlaki</strong> - Grilled skewers of marinated meat, usually served with pita and tzatziki sauce.</li>
                </ul>

                <h3>Techniques</h3>
                <p>
                    The Greeks are masters of these cooking techniques:
                    <ul>
                        <li><strong>Grilling:</strong> From souvlaki to fish, grilling is a central technique in Greek kitchens.</li>
                        <li><strong>Slow Cooking:</strong> Stews and casseroles like moussaka require slow cooking to meld flavors.</li>
                        <li><strong>Marinating:</strong> Ingredients like lamb and chicken are marinated in olive oil, herbs, and lemon before grilling.</li>
                    </ul>
                </p>
            </div>

            <button className="back-button" onClick={() => onSectionChange("home")}>
                ← Back to Home
            </button>
        </div>
    );
};

export default CuisinesAndTechniques;
