class Student {
    fullName: string;
    constructor(public firstName: string, public lastName: string) {
        this.fullName = firstName + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(name: Person) {
    return "Hello " + name.firstName + name.lastName;
}

let user = new Student("Nick", "Yang");

document.body.innerHTML = greeter(user); 