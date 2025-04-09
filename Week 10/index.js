import express from "express"
import fs from "fs"
// import data from './MOCK_DATA.json'// apparently this won't work with node 
import data from './MOCK_DATA.json' with { type: 'json' };

const app = express(); 
const PORT = 8000;

app.use(express.urlencoded())

//server side rendering
app.get("/users", (req,res)=>{
    res.send(`
        <html>
        <head></head>
        <body>
    <ul>
    ${data.map((users)=> `<li>${users.first_name}</li>`).join("")}
    </ul>
        </body>
        </html>
    `)
})

//REST API routes
app.get("/api/users",(req,res)=>{
    res.json(data)
})

app.get("/api/users/:id",(req,res)=>{
    const id =  Number(req.params.id)
    res.send(data.find((user)=>(user.id===id)))
})

app.post("/api/users",(req,res)=>{
    const user = req.body
    data.push({...user,"id":data.length+1})
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(data),(err)=>{})
    res.send({message:"created user succesfully",id:data.length})
})

app.patch("/api/users/:id",(req,res)=>{
    const user_id = Number(req.params.id)
    const user_index = data.findIndex((user)=>(user.id===user_id))
    const new_data = req.body
    data[user_index] = {...data[user_index],...new_data}
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(data),(err)=>{})
    
    res.send({message:"succesfully updated data"})
})



app.listen(PORT,()=>{console.log(`Listening on PORT ${PORT}`)})