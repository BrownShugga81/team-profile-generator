class Manager {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getType() {
        return "Manager"
    }
}

module.exports = Manager;