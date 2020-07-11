const mn = document.getElementById('mn');
const sc = document.getElementById('sc');
const ms = document.getElementById('ms');
const dmn = document.getElementById('dmn');
const dsc = document.getElementById('dsc');
const dms = document.getElementById('dmsc');
const stspbtn = document.getElementById('strstp');

var min = 0;
var sec = 0;
var msec = 0;
var dsec = msec;
var dmin = min;
var dmsec = sec;
var interval;

dmn.value = dmin;
dsc.value = dsec;
dms.value = dmsec;
mn.style.transform = `rotateZ(${min}deg)`;
sc.style.transform = `rotateZ(${sec}deg)`;
ms.style.transform = `rotateZ(${msec}deg)`;

function StartStop(){
    if((stspbtn.className).search("fa-play") != -1){
        stspbtn.classList.remove("fa-play");
        stspbtn.classList.add("fa-pause");
        interval = setInterval(move,100);
    }
    else if((stspbtn.className).search("fa-pause") != -1){
        stspbtn.classList.remove("fa-pause");
        stspbtn.classList.add("fa-play");
        clearInterval(interval);
    }
}
function lap(){
    
}
function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    dsec = msec;
    dmin = min;
    dmsec = sec;
    dmn.value = dmin;
    dsc.value = dsec;
    dms.value = dmsec;
    mn.style.transform = `rotateZ(${min}deg)`;
    sc.style.transform = `rotateZ(${sec}deg)`;
    ms.style.transform = `rotateZ(${msec}deg)`;
    if((stspbtn.className).search("fa-pause") != -1){
        stspbtn.classList.remove("fa-pause");
        stspbtn.classList.add("fa-play");
        clearInterval(interval);
    }
    clearInterval(interval);
}
function move(){

    min+=0.01;
    sec+=0.6;
    msec+=36;
    mn.style.transform = `rotateZ(${min}deg)`;
    sc.style.transform = `rotateZ(${sec}deg)`;
    ms.style.transform = `rotateZ(${msec}deg)`;

    dmsec+=10;
    if(dmsec >= 100){
        dmsec = 00;
        dsec++;
        if(dsec >= 60){
            dsec = 00;
            dmin++;
            if(dmin >= 60){
                dmin = 00;
            }
            dmn.value = dmin;
        }
        dsc.value = dsec;
    }
    dms.value = dmsec;
    // console.log(dsec);
    if(min >= 360)min=0;
    if(sec >= 360)sec=0;
    if(msec >= 360)msec=0;



    // console.log(i);
    // if(i>=360){console.log("SecondDone");i=0;}
    


    // i++;
    // if(i>=10){
    //     console.log("SecondDone");
    //     i=0;
    // }
        
//     hr.style.transform = `rotateZ(${i}deg)`;
//     mn.style.transform = `rotateZ(${i}deg)`;
//     sc.style.transform = `rotateZ(${i}deg)`;
//     i += 0.5;
// }
}