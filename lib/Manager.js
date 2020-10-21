
const Employee = require("./employee");

class Manager extends Employee {

    constructor(name, id, email, phoneNumber) {
        super(name, id, email, phoneNumber);
        this.phoneNumber = phoneNumber;
    }


    getphoneNumber() {
        return this.phoneNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;