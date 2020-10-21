const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const Team = [];

function managerResponse() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter manager name."
        },
        {
            type: "input",
            name: "id",
            message: "Enter manager id."
        },
        {
            type: "input",
            name: "email",
            message: "Enter manager email."
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter manager telephone number."
        }
    ]).then(answers => {
        let { name, id, email, phoneNumber } = responses;
        let manager = new Manager(name, id, email, phoneNumber);

        teamMembers.push(manager);

        generateTeam();
    })
}

function generateTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "command",
            message: "Add new team members?",
            choices: ["Add Engineer", "Add Intern", "Team Complete"]
        }
    ]).then(answers => {
        memberType = answers.command;

        switch (memberType) {
            case "Add Engineer":
                getEngineer();
                break;

            case "Add Intern":
                getIntern();
                break;

            case "Team Complete":
                createTeam();
                break;
        }
    })
}

function generateEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter engineer's name."
        },
        {
            type: "input",
            name: "id",
            message: "Enter engineer's id."
        },
        {
            type: "input",
            name: "email",
            message: "Enter engineer's email."
        },
        {
            type: "input",
            name: "github",
            message: "Enter engineer's github."
        },
    ]).then(answers => {
        let { name, id, email, github } = answers;
        let engineer = new Engineer(name, id, email, github);

        teamMembers.push(engineer);
        generateTeam();
    })
}

function generateIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter intern's name."
        },
        {
            type: "input",
            name: "id",
            message: "Enter intern's id."
        },
        {
            type: "input",
            name: "email",
            message: "Enter intern's email."
        },
        {
            type: "input",
            name: "school",
            message: "Enter intern's school."
        }
    ]).then(answers => {
        let { name, id, email, school } = answers;
        let intern = new Intern(name, id, email, school);

        teamMembers.push(intern);
        generateTeam();
    })
}