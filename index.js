let hrs = document.getElementById('hours');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let hrsSeparator = document.getElementById('hrsSeparator');
let minSeparator = document.getElementById('minSeparator');
let defconYellow = document.getElementById('defconYellow');
let defconRed = document.getElementById('defconRed');
let displayDay = document.getElementById('day');

setInterval(() => {
    let currentTime = new Date();
    let hrsFormat;

    hrsFormat = currentTime.getHours();

    if(hrsFormat > 12) {
        hrsFormat -= 12;

        if (hrsFormat === 3) {
            hrs.style.color ='yellow';
            min.style.color ='yellow';
            sec.style.color ='yellow';
            hrsSeparator.style.color ='yellow';
            minSeparator.style.color ='yellow';
            displayDay.style.color = 'yellow';
            defconYellow.style.visibility = 'visible';
            
        }

        if (hrsFormat === 4) {
            hrs.style.color = '#AD0000';
            min.style.color = '#AD0000';
            sec.style.color = '#AD0000';
            hrsSeparator.style.color = '#AD0000';
            minSeparator.style.color = '#AD0000';
            displayDay.style.color = '#AD0000';
            defconRed.style.visibility = 'visible';
        }
    }

    if (hrsFormat < 10) {
        hrsFormat = `0${hrsFormat}`;
    }

    let day;
    switch(currentTime.getDay()) {
        case 0:
            day = 'Sunday';
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday'
            break;
        case 4:
            day = 'Thursday'
            break;
        case 5:
            day = 'Friday'
            break;
        case 6:
            day = 'Saturday'
            break;
        default: 
            day = 'I think Dan coded me bad :(';
      
    }

    displayDay.innerHTML = day;
    hrs.innerHTML = hrsFormat;
    min.innerHTML = (currentTime.getMinutes() < 10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10?"0":"") + currentTime.getSeconds();
}, 1000);

