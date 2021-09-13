console.log('Hello')
const express = require ('express');
const app=express()
const PORT=3000


app.use((req,res, next)=>{
    var date = new Date();
    if(date.getDay()==0||date.getDay()==6||date.getHours()<9||date.getHours()>17)
        {
            res.status(403).end('We Only Work From Monday To Friday from 9 to 17')
        }
        else{ 
            return next();
        }
})

app.use(express.static("Public"))
app.listen(PORT,(err)=>{
    err ? console.log(err)   : console.log('server is Working') 
    // if (err) {
    //     console.log(err)
    // } else {
    //     console.log('server is Working')
    // }
})