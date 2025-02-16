import React from "react";
import IoBele from "./IoannisBelesis";
import Contents from "./Contents";

interface HomeProps {
    onSectionChange: (view: "about" | "workExp" | "cuisineAndTechniques" | "contact") => void;
}

const Home: React.FC<HomeProps> = ({ onSectionChange }) => {
    return (
        <div>
            <div className="IoBele">
                <IoBele />
            </div>
            <div>
                <Contents onSectionChange={onSectionChange} />
            </div>
        </div>
    );
};

export default Home;
