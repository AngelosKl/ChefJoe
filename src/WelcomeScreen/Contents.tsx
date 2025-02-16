import React from "react";

interface ContentsProps {
    onSectionChange: (view: "about" | "workExp" | "cuisineAndTechniques" | "contact") => void;
}

const Contents: React.FC<ContentsProps> = ({ onSectionChange }) => {
    return (
        <div className="Content">
            <div className="contentTitle">
                <h1>Contents</h1>
                <p>This is more and more about me...</p>
            </div>
            <div className="clickAbles">
                <div className="row">
                    <div className="firstClickables" onClick={() => onSectionChange("about")}>
                        <p>About</p>
                    </div>
                    <div className="firstClickables" onClick={() => onSectionChange("workExp")}>
                        <p>Work Experience</p>
                    </div>
                </div>
                <div className="row">
                    <div className="lastClickables" onClick={() => onSectionChange("cuisineAndTechniques")}>
                        <p>Cuisine and Techniques</p>
                    </div>
                    <div className="lastClickables" onClick={() => onSectionChange("contact")}>
                        <p>Contact</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contents;
