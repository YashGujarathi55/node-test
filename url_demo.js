const url=require('url');

const myurl=new URL('http://mywebsite.com/hello.html?id=100&status=active');

//serialized url
console.log(myurl.href);
console.log(myurl.toString());

//host domain
console.log(myurl.host);
console.log(myurl.hostname);

console.log(myurl.searchParams);
myurl.searchParams.append('abc','123');

console.log(myurl.searchParams);

myurl.searchParams.forEach((value,name)=>
    console.log(`${name}:${value}`)

);