#! /usr/bin/env node
//................. ......OBJECT Oriented Program..................
import chalk from "chalk";
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
let persons = new Person();
const programStart = async (persons) => {
    console.log(chalk.cyan.bold("╔════════════════════════════════════════════════════╗"));
    console.log(chalk.cyan.bold("║                                                      ║"));
    console.log(chalk.cyan.bold("║        ") + chalk.yellow.bold("Welcome to Object Oriented Programming") + chalk.cyan.bold("        ║"));
    console.log(chalk.cyan.bold("║                     ") + chalk.yellow.bold("Project") + chalk.cyan.bold("                          ║"));
    console.log(chalk.cyan.bold("║                                                      ║"));
    console.log(chalk.cyan.bold("╚════════════════════════════════════════════════════╝"));
    do {
        const answer = await inquirer.prompt([
            {
                type: "list",
                name: "select",
                message: "Whom would you like to interact with:",
                choices: ["Staff", "Student", "Exit"]
            }
        ]);
        if (answer.select === "Staff") {
            console.log("You approach the staff room. Please feel free to ask any question.");
        }
        else if (answer.select === "Student") {
            let answer = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student's name you wish to engage with:"
            });
            let student = persons.students.find(val => val == answer.student);
            if (!student) {
                persons.addStudent(answer.student);
                console.log(chalk.green(`Hello I am ${answer.student}. Nice to meet you!`));
                console.log(chalk.green("New student added"));
                console.log(chalk.green("Current student list:"));
                console.log(chalk.green(persons.students));
            }
            else {
                console.log(chalk.green(`Hello I am ${student}. Nice to see you again!`));
                console.log(chalk.green("Existing student list:"));
                console.log(chalk.green(persons.students));
            }
        }
        else if (answer.select === "Exit") {
            console.log("Exiting the program...");
            process.exit();
        }
    } while (true);
};
programStart(persons);
