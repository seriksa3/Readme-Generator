const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
      type: 'input',
      name: 'Name',
      message: 'What is your Name?',
    },
    {
      type: 'input',
      name: 'Title',
      message: 'What is your title of your project?',
      validate:(value) => {
        if (value){return true} else{return "You have to input a Title"}
      },
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Give me a quck description of your Project',
        validate:(value) => {
          if (value){return true} else{return "You have to input a description"}
        },
      },
    {
      type: 'checkbox',
      name: 'Languages',
      message: 'Select the languages going to be used for this project?',
      choices: ["HTML","CSS","JavaScript","Python","Java","Ruby","C++","C#","PHP",
      "Swift","Node.js","React","Angular","Vue.js","Bootstrap","Tailwind CSS","jQuery", "Express.js","MongoDB","MySQL"],
      validate:(value) =>{
        if(value.length === 0){return "Please Select a language!"} else{return true}
      },
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'How will you install your project?',
        validate:(value) => {
          if (value){return true} else{return "You have to input a Value"}
        },
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'How will your project be used?',
        validate:(value) => {
          if (value){return true} else{return "You have to input a Value"}
        },
      },
      {
        type: 'list',
        name: 'Licences',
        message: 'Choice the licences used in the project',
        choices:["MIT",
        "Apache 2.0",
        "The Unlicense",
        "GNU GPL v3",
        "BSD 2-Clause",
        "BSD 3-Clause",
        "Academic Free License", 
        "Artistic license",
        "Boost Software License",
        "Eclipse Public License",
        "Eclipse Public License",
        "European Union Public License",
        "Microsoft Public License"],
        validate:(value) => {
          if (value===0){return "You have to input a value"} else{return true}
        },
      },
    {
      type: 'input',
      name: 'Contributors',
      message: 'Enter Contributor(s) username(s): ',
      default:'None'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your Github username',
      default:'None',
    },
    {
      type: 'input',
      name: 'Contact me',
      message: 'Enter your email and/or Phone Number ',
      validate:(value)=>{
        if(value===''){return 'Contact cannot be blank'}else {return true}
      },
    },
];
// const quest_prompt = inquirer.prompt(questions);

// // function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data,(err)  => 
  err
  ?console.error(err)
  :console.log('Your File has been created')
  );
};


// function to initialize program
function init() {
  console.log('This is a Readme Generator. \nFill in the following info.');
  inquirer.prompt(questions).then((answers) => {
    writeToFile('./Professional-Readme/README.md',generateMarkdown({...answers}));
    console.log('Readme has been created',answers);
  });
};

init();
// generateMarkdown();
//console.log(inquirer.prompt(questions));
// function call to initialize program
// init();
//make readme template
//Ask questions
//write questions to readme file
//const generate readme