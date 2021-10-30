class Intern {
    constructor(internName, internId, internEmail, internGithub){
        this.internName = internName;
        this.internId = internId;
        this.internEmail = internEmail;
        this.internGithub = internGithub;

    }

    getType() {
        return "Intern"
    }
}

module.exports = Intern;