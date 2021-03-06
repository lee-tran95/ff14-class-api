const express = require('express')
const app = express()
const cors = require('cors');
const PORT = 8000;
const { request } = require('express');
app.use(cors());

const classes = {
    'paladin': {
        'weapon': 'sword and shield',
        'role': 'tank'
    },
    'warrior': {
        'weapon': 'greataxe',
        'role': 'tank'
    },
    'dark knight': {
        'weapon':  'greatsword',
        'role': 'tank'
    },
    'gunbreaker': {
        'weapon': 'gunblade',
        'role': 'tank'
    },
    'white mage': {
        'weapon': 'staff',
        'role': 'healer'
    },
    'sage': {
        'weapon': 'nouliths',
        'role': 'healer'
    },
    'astrologian': {
        'weapon':  'star globe',
        'role': 'healer'
    },
    'scholar': {
        'weapon': 'book',
        'role': 'healer'
    }
}

app.listen(process.env.PORT || PORT,()=>{
    console.log("FF14 Server Started")
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(req,res)=>{
    const className = req.params.name.toLowerCase();
    if(classes[className]){
        res.json(classes[className])
    }else{
        res.json(classes)
    }
})