import './skills.css'
import React, { useState } from 'react';



function Skills() {

    const [skillTitle, setSkillTitle] = useState('What are hard and soft skills?');
    const [skillInfo, setSkillInfo] = useState('Hard skills can be defined as technical knowledge and are much easier to quantify when compared to soft skills as they are learned through a classroom or trade and can be proven through certifications and qualifications such as a degree offered by a tertiary institute or certificates through a trusted organization like linkedIn. \n Soft skills on the other hand are more subjective and cannot be quantified in the same manner as hard skills instead a qualative approach is taken often referencing situtions throughout an individuals life to highlight certain personality traits and communication skills.');


    function updateSkillCard(event) {
        let value = event.target.innerHTML
        switch(value) {
            case 'Hard Skills':
              setSkillTitle(value);
              break;
            case 2:
              // code block
              break;
            default:
              // code block
          }
    }

    return(
        <div className='flex-container-skills'>
            <h1>My Skills</h1>
            <table>
            <tr>
                <th onClick={event => updateSkillCard(event)}>Hard Skills</th>
                <th>Soft Skills</th>
            </tr>
            <tr>
                <td onClick={updateSkillCard}>HTML | CSS | JavaScript</td>
                <td>Communication</td>
            </tr>
            <tr>
                <td>Python</td>
                <td>Accountability</td>
            </tr>
            <tr>
                <td>C++</td>
                <td>Teamwork</td>
            </tr>
            <tr>
                <td>Java</td>
                <td>Soft Skills</td>
            </tr>
            <tr>
                <td>Amazon Web Services</td>
                <td>Soft Skills</td>
            </tr>
            <tr>
                <td>MySql</td>
                <td>Soft Skills</td>
            </tr>
            <tr>
                <td>Algorithms and Data Structures</td>
                <td>Soft Skills</td>
            </tr>
            <tr>
                <td>Github Version Control</td>
                <td>Soft Skills</td>
            </tr>
            </table>


            <div>
                <p>{skillTitle}</p>
                <br></br>
                <p>{skillInfo}</p>
            </div>
        </div>
    );
}

export default Skills;