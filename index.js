//Grabbing changeable fields
let displayDay = document.getElementById('day');
let hrs = document.getElementById('hours');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

let defconYellow = document.getElementById('defconYellow');
let defconRed = document.getElementById('defconRed');

//Holds elements that will change on condition
let colorChangeArr = [hrs, min, sec, displayDay]

//formats date to be readable
const formatDate = () => {

    let currentTime = new Date();
    let dayOfWeek;
    let unformattedHr = currentTime.getHours();
    let formatMin = currentTime.getMinutes();
    let formatSec = currentTime.getSeconds();
    let formattedDateArr = [];

    //formats day of the week
    switch(currentTime.getDay()) {
        case 0:
            dayOfWeek = 'Sunday';
            formattedDateArr.push(dayOfWeek);
            break;
        case 1:
            dayOfWeek = 'Monday';
            formattedDateArr.push(dayOfWeek);
            break;
        case 2:
            dayOfWeek = 'Tuesday';
            formattedDateArr.push(dayOfWeek);
            break;
        case 3:
            dayOfWeek = 'Wednesday'
            formattedDateArr.push(dayOfWeek);
            break;
        case 4:
            dayOfWeek = 'Thursday'
            formattedDateArr.push(dayOfWeek);
            break;
        case 5:
            dayOfWeek = 'Friday'
            formattedDateArr.push(dayOfWeek);
            break;
        case 6:
            dayOfWeek = 'Saturday'
            formattedDateArr.push(dayOfWeek);
            break;
        default: 
            dayOfWeek = 'OOPSIES :(';
            formattedDateArr.push(dayOfWeek);
    }
    
    //format hours for 12 hour clock
    let formatHrs = unformattedHr;
    if(formatHrs > 12) {
        formatHrs -= 12;
        if (formatHrs < 10) {
            formatHrs = `0${formatHrs}`;
        }
    }
    formattedDateArr.push(formatHrs);    

    //formats minutes to have a 0 in front for single digit minutes
    if(formatMin < 10) {
        formatMin = `0${formatMin}`;
        formattedDateArr.push(formatMin);
    } else {
        formattedDateArr.push(formatMin);
    }

    //formats seconds to have a 0 in front for single digit seconds
    if(formatSec < 10) {
        formatSec = `0${formatSec}`;
        formattedDateArr.push(formatSec);
    } else {
        formattedDateArr.push(formatSec);
    }

    colorChangeCheck(unformattedHr);
    displayDate(formattedDateArr[0], formattedDateArr[1], formattedDateArr[2], formattedDateArr[3]);
}

//changes color of text on screen based on how close to cutoff we are
const colorChangeCheck = (hours) => {
    for (i = 0; i < colorChangeArr.length; i++) {
        hours = parseInt(hours);

        switch (hours) {
            case 15:
                colorChangeArr[i].style.color = 'yellow';
                defconYellow.style.display = "block";
                break;
            case 16:
                colorChangeArr[i].style.color = '#AD0000';
                defconRed.style.display = "block";
                break;
            default:
                colorChangeArr[i].style.color = '#FFFFFF';
        }
    }
}

//Displays the date on screen
const displayDate = (day, hour, minute, second) => {
    displayDay.innerHTML = day;
    hrs.innerHTML = `${hour}:`;
    min.innerHTML = `${minute}:`
    sec.innerHTML = second
}

formatDate();

setInterval(() => {
    formatDate();
}, 1000);

