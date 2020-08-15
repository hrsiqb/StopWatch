const mn = document.getElementById('mn');
const sc = document.getElementById('sc');
const ms = document.getElementById('ms');
const dmn = document.getElementById('dmn');
const dsc = document.getElementById('dsc');
const dms = document.getElementById('dmsc');
const stspbtn = document.getElementById('strstp');
const hist = document.getElementById('hist');
const lapVal = document.getElementById('LapVal');

var firstRun = 1;


var min = '0' + 0;
var sec = '0' + 0;
var msec = '0' + 0;
var dsec = msec;
var dmin = min;
var dmsec = sec;
var interval;
var lapN = 0;

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
    if(!(dmin === 0 && dsec === 0 && dmsec === 0)){
        lapN++;
        var h4 = document.createElement("h4");
        var node = document.createTextNode("LAP-" + lapN + ': ' + dmin + ':' + dsec + ':' + dmsec);
        h4.appendChild(node);
        lapVal.appendChild(h4);
    }
}
function reset(){
    clearInterval(interval);
    lapVal.innerHTML = "";
    if(!(dmin === 0 && dsec === 0 && dmsec === 0)){
        if(firstRun){
            firstRun=0;
            var h4 = document.createElement("h4");
            var node = document.createTextNode(dmin + ':' + dsec + ':' + dmsec);
            h4.appendChild(node);
            hist.appendChild(h4);
        }
        else{
            hist.children[1].innerHTML = (dmin + ':' + dsec + ':' + dmsec);
        }
        
        min = 0;
        sec = 0;
        msec = 0;
        dsec = msec;
        dmin = min;
        dmsec = sec;
        dmn.value = '0' + dmin;
        dsc.value = '0' + dsec;
        dms.value = '0' + dmsec;
        mn.style.transform = `rotateZ(${min}deg)`;
        sc.style.transform = `rotateZ(${sec}deg)`;
        ms.style.transform = `rotateZ(${msec}deg)`;
        if((stspbtn.className).search("fa-pause") != -1){
            stspbtn.classList.remove("fa-pause");
            stspbtn.classList.add("fa-play");
        }
    }
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
            if(dmin < 10) dmn.value = '0' + dmin
            else dmn.value = dmin;
        } 
        if(dsec < 10) dsc.value = '0' + dsec
        else dsc.value = dsec;
    }
    if(dmsec < 10) dms.value = '0' + dmsec
    else dms.value = dmsec;
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
