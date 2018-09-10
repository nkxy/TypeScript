interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

function greeter(name: Person) {
    return "Hello " + name.firstName + name.lastName;
}

let user = {firstName: "Nick", lastName: "Yang", age: 18};

document.body.innerHTML = greeter(user); 