import fs from "fs"

// asynchronous writing file 
// fs.writeFile("./text.txt","hey there",(err)=>{})

// fs.unlink("./text.txt",(err)=>{}) //to delete file

fs.writeFileSync("./hello.txt","hey there")
