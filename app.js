const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

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
            message: "Enter manager office number."
        }
    ]).then(answers => {
        let { name, id, email, officeNumber } = responses;
        let manager = new Manager(name, id, email, officeNumber);

        teamMembers.push(manager);

        generateTeam();
    })
}