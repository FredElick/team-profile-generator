const Employee = require('./Employee.js')

class Manager extends Employee{
    constructor (name, id, email, number){
        super(name, id, email);
        this.officeNumber = number;
    }
getRole(){
    return 'Manager'
}
}

module.exports=Manager;