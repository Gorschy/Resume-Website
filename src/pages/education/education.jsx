import './education.css'


function Education() {
    return(
        <div className='flex-container-education'>
            <h1>My Education</h1>
            <h1>Academic Education</h1>
            <div className='flex-container-row'>
                <div className='flex-container-item'>
                    <h3>Bachelor of Computer Science</h3>
                    <p>Graduated 14/12/2021</p>
                    <p>University of Wollongong</p>
                    <p>Major: Software Engineering</p>
                </div>
                <div className='flex-container-item'>
                    <h3>University Entrance Certificate</h3>
                    <p>Completed 2017</p>
                    <p>University of Wollongong</p>
                    <p>Major: STR2 (Stream 2) Information Technology</p>
                </div>
                <div className='flex-container-item'>
                    <h3>Higher School Certificate</h3>
                    <p>Completed 2015</p>
                    <p>Eden Marine Highschool</p>
                </div>
                <div className='flex-container-item'>
                    <h3>Summer Master Class</h3>
                    <p>Completed 2015</p>
                    <p>University of Wollongong</p>
                </div>
            </div>

            <h1>Noteable Grades</h1>
            <h2>Bachelor of Computer Science</h2>

            <div className="container">
                <div className="left">
                    <h3>CSIT110 Fundamental Programming with Python</h3>
                    <p>High Distinction 87</p>
                    <h3>ISIT219 Knowledge and Information Engineering</h3>
                    <p>High Distinction 85</p>
                    <h3>CSIT321 Project</h3>
                    <p>Distinction 82</p>
                </div>
                <div className="right">
                    <h3>Software Engineering Practices and Principles</h3>
                    <p>Distinction 75</p>
                    <h3>ISIT315 Semantic</h3>
                    <p>Credit 72</p>
                    <h3>CSIT115 Data Management and Security</h3>
                    <p>Credit 70</p>
                </div>
            </div>

            <h1>Learning Resources</h1>
            <h3>Youtube Channels</h3>
            <h3>LinkedIn Certificates</h3>
            <h3>Leet Code</h3>
            <h3>Textbooks</h3>

        </div>
    );
}

export default Education;