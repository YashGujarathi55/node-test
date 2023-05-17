const fs=require('fs');
const path=require('path');

/* fs.mkdir(path.join(__dirname,'/test'),{},err=>
{
    if(err) throw err
   console.log('Folder Created'); 
});
 */
//create and write to a file
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),"hello world",err=>
// {
// if(err) throw err;
// console.log("file created");
// //append 
// fs.appendFile(path.join(__dirname,'/test','hello.txt'),"i love node js",err=>
// {
// if(err) throw err;
// console.log("file created");
// })
// })

//read file
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>
{
    if(err) throw err;
    console.log(data);
})
