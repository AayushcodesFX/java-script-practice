let DATA = "secrect information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data =", DATA);
    }
}

class Admin extends User {
    editData() {
        DATA = "some new value";
    }
}

let student1 = new User("Aayush","abc@gmail.com");
let student2 = new User("Aayush!","abcd@gmail.com");

let teacher1 = new User("Aman", "Dean@gmal.com");

let admin1 = new Admin("Admin", "admin@gmail.com");