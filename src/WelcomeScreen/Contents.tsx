import AboutMe from "../TheContents/About";
import Contact from "../TheContents/Contact";
import CuisinesAndTechniques from "../TheContents/CuisineAndTechniques";
import WorkExperience from "../TheContents/WorkExp";

const Contents = () => {
    return (
        <div className="Content">
            <div className="contentTitle">
                <div>
                    <h1>Contents</h1>
                    <br></br>
                    <p>This is more and more about me.....</p>
                </div>
            </div>
            <div className="clickAbles">
                <div className="row">
                    <div className="firstClickables"><p>about</p></div>
                    <div className="firstClickables"><p>WorkExp</p></div>
                </div>
                <div className="row">
                    <div className="lastClickables"><p>CuisineAndTechniques</p></div>
                    <div className="lastClickables"><p>contact</p></div>
                </div>
            </div>
        </div>
    );
}

export default Contents;