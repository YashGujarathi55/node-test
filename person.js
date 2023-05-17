class Person{
    constructor(name,age)
    {
        this.age=age;
        this.name=name;
    }
    greetings()
    {
        console.log('my name is ${this.name} and age is ${this.age}');
    }
}


export default Person