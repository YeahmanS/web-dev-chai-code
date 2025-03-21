function updatetime(){
    const Time = document.getElementById("time")
    const now = new Date()

    const second = now.getSeconds().toString().padStart(2, "0")
    const minute = now.getMinutes().toString().padStart(2, "0")
    const hour = (now.getHours()%12||12).toString().padStart(2,"0")

    const ampm = now.getHours() > 11 ? "PM" : "AM"

    Time.innerText = `${hour} ${minute} ${second} ${ampm}`


}

setInterval(updatetime,1000);

updatetime();

