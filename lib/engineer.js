class Engineer {
    constructor(engineerName, engineerId, engineerEmail, engineerGithub){
        this.engineerName = engineerName;
        this.engineerId = engineerId;
        this.engineerEmail = engineerEmail;
        this.engineerGithub = engineerGithub;

    }

    getType() {
        return "Engineer"
    }
}

module.exports = Engineer;