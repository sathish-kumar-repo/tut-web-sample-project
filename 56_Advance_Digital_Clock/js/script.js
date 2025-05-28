const h=document.querySelectorAll('.h');
const m=document.querySelectorAll('.m');
const s=document.querySelectorAll('.s');
const span=document.querySelectorAll('.meridian span');
const days_span=document.querySelectorAll('.days span');
const month_span=document.querySelectorAll('.month span');
const date=document.querySelector('.date');

function runClock(){
    var time=new Date();

    //Date
    var da=time.getDate();
    da=da<10?'0'+da:da;
    var mo=time.getMonth()+1;
    mo=mo<10?'0'+mo:mo;
    var ye=time.getFullYear();
    date.innerHTML=`${da}-${mo}-${ye}`;

    //Day
    days_span[time.getDay()].classList.add('day-active');

     //Month
    month_span[time.getMonth()].classList.add('day-active');

    //Time
    var hrs=time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();

    if(hrs>12){
        hrs=hrs-12;
        span[1].classList.add('active');
    }else{
        if(hrs==0){
          hrs=12; 
        }
        span[0].classList.add('active');
    }

    // this code have small mistakes
    // if(hrs>=12){
    //     hrs=hrs-12==0?12:hrs-12;
    //     span[1].classList.add('active');
    // }else{
    //     span[0].classList.add('active');
    // }

    hrs=hrs<10?'0'+hrs:hrs;
    min=min<10?'0'+min:min;
    sec=sec<10?'0'+sec:sec;

    hrs=hrs.toString(); //04
    min=min.toString();
    sec=sec.toString();

    h[0].innerHTML=hrs[0];//0
    h[1].innerHTML=hrs[1];//4

    m[0].innerHTML=min[0];
    m[1].innerHTML=min[1];

    s[0].innerHTML=sec[0];
    s[1].innerHTML=sec[1];
    
}

runClock();
setInterval(runClock,1000);


// ***********************************

/*

console.log(time.getDay) output is based on number based on given below
0	Sunday
1	Monday
2	Tuesday
3	Wednesday
4	Thursday
5	Friday
6	Saturday

same also (time.getMonth())
0	January
1	February
2	March
3	April
4	May
5	June
6	July
7	August
8	September
9	October
10	November
11	December


*/
