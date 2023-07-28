#!/usr/bin/env node

import inquirer from "inquirer";
import * as fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const CURR_DIR = process.cwd();
const __dirname = dirname(fileURLToPath(import.meta.url));

const CHOICES = fs.readdirSync(`${__dirname}/templates`);

const QUESTIONS = [
  {
    name: "project-choice",
    type: "list",
    message: "What project template would you like to use?",
    choices: CHOICES,
  },
  {
    name: "project-name",
    type: "input",
    message: "Project name:",
    default: "metaphorlism_boilderplate",
    validation: function (input) {
      if (/^([A-Za-z\-\\_\d])+$/.test(input)) return true;
      else
        return "Project name may only include letters, numbers, underscores and hashes";
    },
  },
];

const createDirectoryContents = (templatePath, newProjectPath) => {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach((file) => {
    const origFilePath = `${templatePath}/${file}`;

    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, "utf8");

      // Rename
      if (file === ".npmignore") file = ".gitignore";

      const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;
      fs.writeFileSync(writePath, contents, "utf8");
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`);

      // recursive call
      createDirectoryContents(
        `${templatePath}/${file}`,
        `${newProjectPath}/${file}`
      );
    }
  });
};

inquirer.prompt(QUESTIONS).then((answers) => {
  const projectChoice = answers["project-choice"];
  const projectName = answers["project-name"];
  const templatePath = `${__dirname}/templates/${projectChoice}`;

  try {
    fs.mkdirSync(`${CURR_DIR}/${projectName}`);
  } catch (e) {
    console.error("Failed to create new directory.\n", e.message);
    process.exit(-1);
  }

  createDirectoryContents(templatePath, projectName);

  console.log(`cd ${projectName} && npm install`);
  console.log(`Happy Coding.`);
});
