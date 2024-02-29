const { stdin, stdout } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

let todo = [];

console.log("          My Todo          ");
console.log("---------------------------");
console.log("Enter 1. Create a Todo");
console.log("Enter 2. To Update a Todo");
console.log("Enter 3. To delete a Todo");
console.log("Enter 4. To print all Todo");
console.log("Enter 5. To Exit");

rl.on('line', (choice) => {
    switch (parseInt(choice)) {
        case 1:
            rl.question("Enter the task: ", (task) => {
                todo.push(task);
                rl.prompt();
            });
            break;
        case 2:
            rl.question("Enter the Index to update: ", (index) => {
                rl.question("Enter the updated task: ", (task) => {
                    todo[index] = task;
                    rl.prompt();
                });
            });
            break;
        case 3:
            rl.question("Enter the Index to Delete: ", (index) => {
                todo.splice(index, 1);
                rl.prompt();
            });
            break;
        case 4:
            console.log("All Todo:");
            todo.forEach((todo, index) => {
                console.log(`${index}: ${todo}`);
            });
            rl.prompt();
            break;
        case 5:
            console.log("Exiting...");
            rl.close();
            break;
        default:
            console.log("Invalid choice. Please enter a valid option.");
            rl.prompt();
            break;
    }
});

rl.prompt();
