import UnderConstruction from './assets/underConstruction.png';
import React, { useState, useEffect } from 'react';

function Projects() {

    var finalDate = new Date("Sept 13, 2022 16:00:00").getTime();

    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    function countDown(){
        var currentDate = new Date().getTime();
        var timeRemaining = finalDate - currentDate;
        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);

    }

    useEffect(() => {
        setTimeout(() => {
            countDown();
        }, 1000)
    });

    return (
        <main>
            <h3>My Projects</h3>
            <img src={UnderConstruction}></img>
            <span>{days}</span>
            <span>{hours}</span>
            <span>{minutes}</span>
            <span>{seconds}</span>
        </main>
    );
}

export default Projects;