const events=require('events');

//create emitter class
class MyEmitter extends events
{

}

//init object
const myemitter= new MyEmitter();

//event listener
myemitter.on('event',()=>console.log('event emitter'));

myemitter.emit('event');


