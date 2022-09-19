import './skills.css'
import React, { useState } from 'react';

function Skills() {

    const [skillTitle, setSkillTitle] = useState('What are hard and soft skills?');
    const [skillInfo, setSkillInfo] = useState('Hard skills can be defined as technical knowledge and are much easier to quantify when compared to soft skills as they are learned through a classroom or trade and can be proven through certifications and qualifications such as a degree offered by a tertiary institute or certificates through a trusted organization like linkedIn. \n Soft skills on the other hand are more subjective and cannot be quantified in the same manner as hard skills instead a qualative approach is taken often referencing situtions throughout an individuals life to highlight certain personality traits and communication skills.');
    
    function updateSkillCard(input) {
        switch(input) {
            case 1:
              // code block
              break;
            case 2:
              // code block
              break;
            default:
              // code block
          }

    }

    return (
        <main>
            <h3>Skills Page</h3>
            <div className='grid-box'>
                <button>Hard Skills</button>
                <button>Soft Skills</button>
                <button>
                        Web Skills
                        JavaScript
                        HTML
                        CSS
                </button>
                <button>Communication</button>
                <button>Python</button>
                <button>Accountability</button>
                <button>C++</button>
                <button>Teamwork</button>
                <button>Java</button>
                <button>Soft Skill</button>
                <button>Amazon Web Services</button>
                <button>Soft Skill</button>
                <button>MySQL</button>
                <button>Soft Skill</button>
                <button>Algorithms and Data Structures</button>
                <button>Soft Skill</button>
                <button>Github Version Control</button>
                <button>Soft Skill</button>
            </div>
            <br></br>
            <div className='card'>
                <span>{skillTitle}</span>
                <br></br>
                <span>{skillInfo}</span>
            </div>
        </main>
    );
}

export default Skills;