const input = document.getElementById("input")
const start_button = document.getElementById("start")
const timer_text = document.getElementById("timer-text")

function alertkaro(){
    let innertext = parseInt(input.value)
    console.log(innertext)
    if(isNaN(innertext)){
        input.style.borderColor = "red"
        timer_text.innerText = "Please Enter Integer"
        timer_text.style.color = "red"

    } else {
        timer_text.style.color=""
        input.style.borderColor=""
        timer_text.innerText = ""
    }
}

input.addEventListener("input",alertkaro);