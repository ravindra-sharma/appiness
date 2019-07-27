const express = require('express');
const app = express();
const bp = require('body-parser');
const cors = require('cors');
app.use(bp.json());
app.use(cors());
app.use(express.static('public'))
const db = require('./dbcon');

app.get('/',async(req,res)=>{
    res.sendfile('index.html');
})

app.get('/roles',async(req,res)=>{
    console.log('in request')
    const result = await db.findAll({},'roles');
    res.send(result)
});

app.get('/users',async(req,res)=>{
    const result = await db.findAll({},'users');
    res.send(result);
})

app.delete('/users',async(req,res)=>{
    const result = await db.deleteAll({},'users');
    console.log(result);
    res.send(result);
})

app.post('/users',async(req,res)=>{
    const obj = req.body;
    const adminUser = await db.find({role:'1'},'users');
    if(adminUser){
        const result = await db.insert(obj,'users');
        res.send(result.ops);
    }
    else{
        obj.role = '1';
        const result = await db.insert(obj,'users');
        res.send(result.ops);
    }
    
});

app.listen(8000,()=>{
    console.log('app is listening on 8000');
})