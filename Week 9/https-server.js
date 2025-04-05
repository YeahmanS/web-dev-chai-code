import fs from "fs"
import http from "http"
import url from "url"

const myServer = http.createServer((req,res)=>{
    let count = 1
    const log = `${Date.now()} : user ${count} made a request \n`
    const user_url = url.parse(req.url)
    console.log(user_url)
    fs.appendFile("./log.txt",log,(err,data)=>{
        count++
        switch (user_url.pathname){
            case '/' : res.end("Welcome to Home Page")
            break
            case '/about' : res.end("Made by Yaman")
            break 
            default :
            res.end("Error 404 not found")
        }
    })
})

// we need port to listen to request 

myServer.listen(8000,()=>{
    console.log("sab kuch sahi chal rha hai server started")
})