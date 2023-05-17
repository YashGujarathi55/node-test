/* console.log('Hello from Node.js');

import Person from "./person.js";
const person1=new Person('john doe',30)
console.log(person1); */

/* const Logger=require('./logger');
const logger=new Logger();

logger.on('message',data=>console.log("Called listener",data));
logger.log('hello world');
 */

const http=require('http');
const path=require('path');
const fs=require('fs');

/* const server=http.createServer((req,res)=>
{
if(req.url==='/about')
{
fs.readFile(path.join(__dirname,'public','about.html'),{},
(err,data)=>{if(err) throw err
    res.end(data);
})
}
}); */

const server=http.createServer((req,res)=>
{
/* if(req.url==='/api/users')
{
const users=[
    {name:'Bob Smith',age:50},
    {name:'John Doe',age:40}
];
res.end(JSON.stringify(users))
} */

let filepath=path.join(__dirname,'public',req.url==='/'?'index.html':req.url);

console.log(filepath);
res.end();
});




const port=process.env.port||5000;
server.listen(port,()=>console.log(`server running on port ${port}`));
