const express = require("express")
const path = require("path")
const morgan = require('morgan')

const app = express();
const publicFolderPath = path.join(__dirname, "public")

const router = express.Router();

app.use(express.json())
app.use(express.static(publicFolderPath))
app.use(morgan('tiny'))


app.set("port", 5000)

const users = []

app.post('/api/user',(req,res)=>{
    const userData = req.body;

  const usersNow = users.map(user => user.username)
console.log(usersNow)
   if(!usersNow.includes(userData.username)){
       
       
       userData.id = randomId();
       users.push(userData) 
       console.log(userData)
       console.log(users)
       res.status(201).send(userData)
   }else{
       res.status(409)
       .send({err:"username taken"})
   }
})

app.listen(app.get("port"), () => {
    console.log(`app listening on port 5000`)
});

const randomId = () => Math.floor(Math.random()*10000)*1