const input = document.getElementById("input")
const start_button = document.getElementById("start")
const timer_text = document.getElementById("timer-text")


function alertkaro(){
    let innertext = parseInt(input.value)
    console.log(innertext)
    if(isNaN(innertext)){
        timer_text.innerText = "Please Enter Integer"
        timer_text.style.color = "red"
        start_button.disabled = true;


    } else if (innertext < 0){
        timer_text.style.color="red"
        timer_text.innerText = "Please Enter Positive Integer"
        start_button.disabled = true;
    }
    else {
        timer_text.style.color=""
        timer_text.innerText = ""
        start_button.disabled = false;
    }


    if (intervalid !=null){
        clearInterval(intervalid)
        intervalid=null
        timer_text.innerText = "Time's Up"
        start_button.disabled = false
    }
}

function starttimer(){
    let user_input = parseInt(input.value)

    let intervalid=setInterval(function (){
        if (user_input < 0){
            clearInterval(intervalid)
            intervalid=null
            timer_text.innerText = "Time's Up"
            start_button.disabled = false
        } else { 
            timer_text.innerText=`Time Remaining : ${user_input} sec`;
        }  
        
        user_input=user_input-1 ;
},1000)
}

input.addEventListener("input",alertkaro);

start_button.addEventListener("click",()=>(start_button.disabled = true))
start_button.addEventListener("click",starttimer)
