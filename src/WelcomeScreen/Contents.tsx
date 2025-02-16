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
                    <div className="firstClickables">{<AboutMe />}</div>
                    <div className="firstClickables">{<WorkExperience />}</div>
                </div>
                <div className="row">
                    <div className="lastClickables">{<CuisinesAndTechniques />}</div>
                    <div className="lastClickables">{<Contact />}</div>
                </div>
            </div>
        </div>
    );
}

export default Contents;