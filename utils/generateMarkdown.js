// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.Title}
  ${answers.Description}
  ## Table Of Contents
  1.[Languages](#Languages)
  2.[Installation](#Installation)
  3.[Usage](#Usage)
  4.[Licences](#Licences)
  5.[Contributors](#Contributors)
  6.[github](#github)
  7.[Contact-me](#Contact-me)
  
  
  ##Languages
  ${answers.Languages.join('\n')}
  
  ##Installation
  ${answers.Usage}
  
  ##Licences
  *${answers.Licences}
  
  ##Contributors
  ${answers.Contributors}
  Copyrights (c) 2023 *${answers.Name}*
  `;
};
// generateMarkdown();

module.exports = generateMarkdown;
