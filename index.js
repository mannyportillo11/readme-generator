// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
            validate: titleInput => {
             if(titleInput) {
               return true;
             } else {
               console.log('Please enter a title!');
               return false;
             }
           }
         },
         {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project (Required)',
            validate: descriptInput => {
             if(descriptInput) {
               return true;
             } else {
               console.log('Please enter a description!');
               return false;
             }
           }
         },
         {
          type: 'input',
          name: 'motivation',
          message: 'Please explain what was the motivation for this project. (Required)',
          validate: motivInput => {
           if(motivInput) {
             return true;
           } else {
             console.log('Please enter your motivation!');
             return false;
           }
         }
       },
         {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
          },
         {
            type: 'input',
            name: 'install',
            message: 'How can we install your project? Please list step by step.'
         },
         {
            type: 'confirm',
            name: 'confirmScreen',
            message: "Would you like to add any screenshots of your project?",
            default: true
         },
         {
             type: 'input',
             name: 'screenshot',
             message: 'Please provide screenshots of your project.',
             when: ({confirmScreen}) => {
                 if (confirmScreen) {
                     return true;
                 } else{
                     return false;
                 }
             }
         },
         {
            type: 'input',
            name: 'link',
            message: 'Please provide a link to your project.',
            validate: linkInput => {
                if(linkInput) {
                  return true;
                } else {
                  console.log('Please enter a link!');
                  return false;
                }
              }
         }
        
    ])
      .then((answers) => {
          console.log(answers)
          writeToFile("README.md", answers)
      })
      .catch((error) => {
          if (error.isTtyError) {
              console.log(error)
              //Prompt couldn't be rendered in the current environment
          } else {
              //something else went wrong
              console.log("Something else went wrong")
          }
      });
      
}

questions();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, markdown(data), (err) => {
        if (err) throw err;
    })
}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
