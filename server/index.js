const express= require('express');
const app = express();
const cors= require('cors');
const port= 5000;
const {numberRouter}= require('./controller/number.controller');
app.use(express.json())
app.use(cors());
app.post((req,res)=>{
    res.json(req.body)
})
app.use(numberRouter)

app.listen(port,()=>{
    console.log(`listening on ${port}`);
})