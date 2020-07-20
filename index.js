
//Dependencies 
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");



// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your Project?",
        name: "title"
    },
    {
        type: "input",
        message: "Description?",
        name: "description"
    },
    {
        type: "input",
        message: "Installation Instruction?",
        name: "install"
    },
    {
        type: "input",
        message: "Usage information?",
        name: "usage"
    },
    {
        type: "input",
        message: "Contribution guidelines?",
        name: "contributing"
    },
    {
        type: "input",
        message: "Test instructions?",
        name: "test"
    },
    {
        type: "list",
        message: "License?",
        name: "license",
        choices: ['Commercial software', 'Shareware', 'Freeware', 'Public domain software', 'Open source software']
    },
    {
        type: "input",
        message: "Github Username?",
        name: "github"
    },
];

// function to write README file
function writeToFile(filename, data) {

    //append stringified JSON object to new .json file
    fs.appendFileSync(filename + ".md", data, err => {

        //error if unable to complete
        if (err) {
            return console.log(err);
        }

        //message if successful
        console.log("Success!");

    });

}

// function to initialize program
function init() {
    inquirer
    
        //initilise questions
        .prompt(questions)

        //access promise 
        .then(function (response) {

            //Save the response data as a constant
            const data = response;

            //save the content and convert to markdown
            //const mark = generateMarkdown(data);
     
            //write data to file
            writeToFile("README", generateMarkdown(data)); 
         
        });

}

// function call to initialize program
init();
