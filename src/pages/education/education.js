import Roadmap from "./assets/roadmap-removebg-preview.png";
import "./education.css";

/*        
<div className="blob">
    <svg
    viewBox="0 0 800 500"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    className="blobSvg"
    >
    <g transform="translate(140.72708892822266, 13.718685150146484)">
        <path
        className="blob"
        fill="#a29bfe"
        >
        <animate attributeName="d"
        dur="10000ms"
        repeatCount="indefinite"
        values="M472,323.5Q452,397,382,419.5Q312,442,250,441Q188,440,121,416Q54,392,73,321Q92,250,92.5,193Q93,136,139.5,94.5Q186,53,249,55.5Q312,58,353,101.5Q394,145,443,197.5Q492,250,472,323.5Z;
                M432,309.5Q413,369,357.5,389Q302,409,248,416Q194,423,156.5,384Q119,345,88,297.5Q57,250,85.5,200.5Q114,151,145,86Q176,21,249,25Q322,29,385,67.5Q448,106,449.5,178Q451,250,432,309.5Z;
                M424,313Q424,376,363,393.5Q302,411,247.5,418Q193,425,127.5,405.5Q62,386,77.5,318Q93,250,94.5,194Q96,138,142.5,100.5Q189,63,246,75Q303,87,363,105.5Q423,124,423.5,187Q424,250,424,313Z;
                M446,312Q421,374,369,415Q317,456,247,465.5Q177,475,151,408Q125,341,108.5,295.5Q92,250,71,177.5Q50,105,117.5,77Q185,49,253,40.5Q321,32,364.5,83.5Q408,135,439.5,192.5Q471,250,446,312Z;
                M472,323.5Q452,397,382,419.5Q312,442,250,441Q188,440,121,416Q54,392,73,321Q92,250,92.5,193Q93,136,139.5,94.5Q186,53,249,55.5Q312,58,353,101.5Q394,145,443,197.5Q492,250,472,323.5Z
        "
        >

        </animate>

        </path>
    </g>
    </svg>
</div>
*/

function Education() {
  return (
    <main>
        <div className="row">
            <div className="column">
                <h1 className="education-header">Academic Education</h1>

                
                <h3 className="alignLeft">Bachelor of Computer Science</h3>
                <p className="alignRight">Graduated 14/12/2021</p>
                <div className="clear"></div>
                <p>University of Wollongong</p>
                <p>Major: Software Engineering</p>


                <h3 className="alignLeft">University Entrance Certificate</h3>
                <p className="alignRight">Completed 2017</p>
                <div className="clear"></div>
                <p>University of Wollongong</p>
                <p>Major: STR2 (Stream 2) Information Technology</p>

                <h3 className="alignLeft">Higher School Certificate</h3>
                <p className="alignRight">Completed 2015</p>
                <div className="clear"></div>
                <p>Eden Marine Highschool</p>

                <h3 className="alignLeft">Summer Master Class</h3>
                <p className="alignRight">Completed 2015</p>
                <div className="clear"></div>
                <p>University of Wollongong</p>

            </div>
            <div className="column">
                <div className="imgContainer">
                    <img src={Roadmap} alt="roadmap"></img>
                    <h1 className="imgHeader">Education Road Map </h1>
                </div>
            </div>
            <div className="column">
                <h1>Noteable Grades</h1>
                <h2>Bachelor of Computer Science</h2>
                <h3>CSIT110 Fundamental Programming with Python</h3>
                <p>HD 87</p>
                <h3>ISIT219 Knowledge and Information Engineering</h3>
                <p>HD 85</p>
                <h3>CSIT321 Project</h3>
                <p>D 82</p>
                <h3>Software Engineering Practices and Principles</h3>
                <p>D 75</p>
                <h3>ISIT315 Semantic</h3>
                <p>C 72</p>
                <h3>CSIT115 Data Management and Security</h3>
                <p>C 70</p>
            </div>
        </div>



      
    </main>
  );
}

export default Education;
