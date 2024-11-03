function countdown() {
    var is_autumn;
    var now = new Date();

    var year = now.getYear();
    year = year + 1900;
    const month = now.getMonth();
    const day = now.getDay();
    now = now.getTime();

    var begin = new Date(year, 8, 22, 0, 0, 0);
    //document.getElementById("cntr").innerHTML = year;
    begin = begin.getTime();
    var end = new Date(year, 11, 22, 0, 0, 0);
    end = end.getTime();

    if(month < 8) {
        is_autumn = false;
    }
    else if(month == 8) {
        if( day < 22) {
            is_autumn = false;
        }
        else {
            is_autumn = true;
        }
    }
    else if(month == 9 || month == 10) {
        is_autumn = true;
    }
    else if(month == 11) {
        if (day < 22) {
            is_autumn = true;
        }
        else {
            is_autumn = false;
        }
    }

    if(is_autumn) {
        var gap = Math.abs(end - now);
    }
    else {
        var gap = Math.abs(begin - now);
    }

    var gap_day = Math.floor(gap / (1000 * 60 * 60 * 24));
    var gap_hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var gap_minute = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    var gap_second = Math.floor((gap % (1000 * 60)) / 1000);

    if (gap_day < 10) {
        gap_day = "0" + gap_day;
    }
    if (gap_minute < 10) {
        gap_minute = "0" + gap_minute;
    }
    if (gap_hour < 10) {
        gap_hour = "0" + gap_hour;
    }
    if (gap_second < 10) {
        gap_second = "0" + gap_second;
    }

    if(is_autumn) {
        if (gap_day == 1) {
            var output = "Do końca jesieni zostało: " + gap_day + " dzień " + gap_hour + " h " + gap_minute + " m " + gap_second + " s";
        }
        else {
            var output = "Do końca jesieni zostało: " + gap_day + " dni " + gap_hour + " h " + gap_minute + " m " + gap_second + " s";
        }
    }
    else {
        if (gap_day == 1) {
            var output = "Do rozpoczęcia jesieni zostało: " + gap_day + " dzień " + gap_hour + " h " + gap_minute + " m " + gap_second + " s";
        }
        else {
            var output = "Do rozpoczęcia jesieni zostało: " + gap_day + " dni " + gap_hour + " h " + gap_minute + " m " + gap_second + " s";
        }
    }

    document.getElementById("cntr").innerHTML = output;
    setTimeout("countdown()",500);
}

countdown();