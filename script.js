let sec = '00';
sec = parseInt(sec);
let min = '00';
min = parseInt(min);
let hour = '00';
hour = parseInt(hour);




// document.getElementById('start').addEventListener('click',function(){
//     let intervalID = setInterval(console.log(sec++),1000);
//     console.log(min);
//     console.log(hour);
//     // sec = sec + 1;
    
// });

let intervalId;
let timeFlipper = false;
function startTimer(){
    if (timeFlipper==false){
      intervalId = setInterval(goTimer,1000)
      timeFlipper = true;
      console.log('timer started.....')
    }
};

function goTimer(){
    sec = sec + 1
    console.log(`sec:${sec}`);

    if(sec == 10){
        min = min + 1;
        sec = 0;
        console.log(`min:${min}`);
    }
    if(min == 10){
        hour = hour + 1;
        min = 0
        console.log(`hour:${hour}`);
    }
    document.getElementById('time-display').innerHTML = `${hour}:${min}:${sec}`; 
}

function endTimer(){
    if (timeFlipper == true){
        clearInterval(intervalId);
        timeFlipper = false;
        console.log('timer stopped.....')
    }
    // document.getElementById('time-display').innerHTML = `${hour}:${min}:${sec}`; 
}


function resetTimer(){
    window.location.reload();
}

document.getElementById('start').addEventListener('click',startTimer);
document.getElementById('stop').addEventListener('click',endTimer);   
document.getElementById('reset').addEventListener('click',resetTimer);               
document.getElementById('time-display').innerHTML = `${hour}:${min}:${sec}`; 

// debugging





