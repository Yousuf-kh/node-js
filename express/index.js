import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());


const users = [
    {
        id: 1,
        name: "Alice",
        age: 10
    },
     {
        id: 2,
        name: "Bob",
        age: 13
    },
     {
        id: 3,
        name: "Daisy",
        age: 14
    },
]

app.get("/", (req, res) =>{
    res.send("Hello from Express.js");
})

app.get('/users', (req, res) => {
    res.send(users);
});

app.put("/users/:id", (req, res) => {
    try{
const id = parseInt(req.params.id);
    } catch (error){

    }
})


app.listen(4200, ()=>{
    console.log("Server is running on http://localhost:4200");  
})