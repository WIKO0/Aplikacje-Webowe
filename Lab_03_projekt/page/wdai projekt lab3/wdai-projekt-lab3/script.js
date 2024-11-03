
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
    document.getElementById("scrolling").style.fontSize = "17px";
    document.getElementById("scrolling").style.height = "7em";
    //document.getElementById("scrolling").style.visibility = "hidden";
    document.getElementById("scrolling2").style.top = "0";
  }
  else if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      document.getElementById("scrolling").style.fontSize = "17px";
      document.getElementById("scrolling").style.height = "8em";
      //document.getElementById("scrolling").style.margin-bottom: "0";
      //document.getElementById("scrolling").style.visibility = "hidden";
      document.getElementById("scrolling2").style.top = "0";
  }
  else {
      document.getElementById("scrolling").style.fontSize = "25px";
      document.getElementById("scrolling").style.height = "7em";
      //document.getElementById("scrolling").style.visibility = "visible";
      document.getElementById("scrolling2").style.top = "7em";

  }
}






























        /*
        <script>
            function countdown() {
                if (!document.write)
                    var is_autumn;

                //var is_autumn;
                const now = new Date().getTime();
                const year = now.getYear();
                const begin = new Date(year, 8, 22, 0, 0, 0).getTime();
                const end = new Date(year, 11, 22, 0, 0, 0).getTime();

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
                    is autumn = true;
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
                    cosnt gap = Math.abs(end - now);
                }
                else {
                    const gap = Math.abs(begin - now);
                }

                const gap_day = Math.floor(gap / (1000 * 60 * 60 * 24));
                const gap_hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const gap_minute = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60);
                const gap_second = Math.floor((gap % (1000 * 60)) / 1000);

                if(is_autumn) {
                    var output = "Do końca jesieni zostało: " + gap_day + " dni, " + gap_hour + " godzin, " + gap_minute + " minut, " + gap_second + " sekund.";
                }
                else {
                    var output = "Do rozpoczęcia jesieni zostało: " + gap_day + " dni, " + gap_hour + " godzin, " + gap_minute + " minut, " + gap_second + " sekund.";
                }

                if (document.layers) {
                    document.layers.Data.document.write(output);
                    document.layers.Data.document.close();
                }

                Data.innerHTML=output
                setTimeout("countdown()",500)
            }
        </script>

        */
        //document.getElementById("cntr").innerHTML = "crghfghfghe";

        /*
            //const b_month = 8;
            //const b_day = 22;
            //const e_month = 11;
            //const e_day = 22;
            //const be_hour = 0;
            //const be_minute = 0;
            //const be_second = 0;


            if (!document.write)
                var is_autumn;

            //var is_autumn;
            const now = new Date().getTime();
            const year = now.getYear();
            const begin = new Date(year, 8, 22, 0, 0, 0);
            const end = new Date(year, 11, 22, 0, 0, 0);


            //year = now.getYear();
            //month = now.getMonth();
            //day = now.getDay();
            //hour = now.getHours();
            //minute = now.getMinutes();
            //second = now.getSeconds();

            // 23.09 - 22.12 (z wyłączeniem)
            // -- IS AUTUMN _________________
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
                is autumn = true;
            }
            else if(month == 11) {
                if (day < 22) {
                    is_autumn = true;
                }
                else {
                    is_autumn = false;
                }
            }
            // ------------------------------



            // ------------------------------

            if(is_autumn) {
                cosnt gap = Math.abs(end - now)
            }
            else {
                const gap = Math.abs(begin - now)
            }

            const gap_day = Math.floor(gap / (1000 * 60 * 60 * 24));
            const gap_hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const gap_minute = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60);
            const gap_second = Math.floor((gap % (1000 * 60)) / 1000);

            if(is_autumn) {
                output = "Do końca jesieni zostało: " + gap_day + " dni, " + gap_hour + " godzin, " + gap_minute + " minut, " + gap_second + " sekund.";
            }
            else {
                output = "Do rozpoczęcia jesieni zostało: " + gap_day + " dni, " + gap_hour + " godzin, " + gap_minute + " minut, " + gap_second + " sekund.";
            }

            // --- PRINT ---------

            //document.getElementById("cntr").innerHTML = "crghfghfghe";
            //if (document.layers) {
             //   document.layers.Data.document.write(output)
             //   document.layers.Data.document.close()
            //}

            //Data.innerHTML=output
            //setTimeout("countdown()",500)
        }
        */
        //countdown();


        //document.getElementById("cntr").innerHTML = "crghfghfghe";


/*

function month_days(month, year) {
    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return 31;
    }
    else if (month == 1) {
        if (year % 4 == 0) {
            return 29;
        }
        else {
            return 28;
        }
    }
    else {
        return 30;
    }
}
*/

//days_between
