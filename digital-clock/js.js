const hour = document.getElementById("hours");
const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");
const amorpm = document.getElementById("am-pm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        h = h - 12;
        ampm = "PM";
    }

    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    hour.innerText = h;
    min.innerText = m;
    sec.innerText = s;
    amorpm.innerText = ampm;
    setTimeout(()=>{
        updateClock();
    }, 1000);
}

updateClock();