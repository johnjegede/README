// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  # Entitled Description
  ${data.projectDescription}
  # Installation
  ${data.projectDescription}
  # usage
  ${data.projectDescription}
  # Contributing
  ${data.projectDescription}
  # Tests
  ${data.projectDescription}


`;
}

module.exports = {
  generateMarkdown,
};
