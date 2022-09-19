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
            <div className="column left">
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
            <div className="column middle">
                    <h1 className="imgHeader">Education Road Map </h1>
                    <img className="roadmap" src={Roadmap} alt="roadmap"></img>
            </div>
            <div className="column right">
                <div className="education-header">
                    <h1>Noteable Grades</h1>
                    <h2>Bachelor of Computer Science</h2>
                </div>
                <h3>CSIT110 Fundamental Programming with Python</h3>
                <p>High Distinction 87</p>
                <h3>ISIT219 Knowledge and Information Engineering</h3>
                <p>High Distinction 85</p>
                <h3>CSIT321 Project</h3>
                <p>Distinction 82</p>
                <h3>Software Engineering Practices and Principles</h3>
                <p>Distinction 75</p>
                <h3>ISIT315 Semantic</h3>
                <p>Credit 72</p>
                <h3>CSIT115 Data Management and Security</h3>
                <p>Credit 70</p>
            </div>



            <div className='contact-wrapper'>
            <div>
                <h1 className='contact-header'>Contact</h1>
                <div className='svg-wrapper'>
                <a href='https://github.com/Gorschy?tab=repositories' target="_blank">
                <svg
                    className='svg-profile'  
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 625 625">
                    <path 
                    path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    fill="currentColor"
                    />
                </svg>
                </a>

                <a href='https://www.linkedin.com/in/nathan-gorsch-34407420b/' target="_blank">
                <svg
                    className='svg-profile'  
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 625 625">
                    <path 
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                    fill="currentColor"
                    />
                </svg>
                </a>
                

                <svg
                    className='svg-profile'  
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 625 625">
                    <path 
                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                    fill="currentColor"
                    />
                </svg> 



                <svg
                    className='svg-profile' 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 625 625">
                    <path 
                    d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                    fill="currentColor"
                    />
                </svg>
                </div>  
            </div>
            </div>

        </div>



      
    </main>
  );
}

export default Education;
