const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const employees = [];

const menu = `
=== Employee Management System ===
1. Add Employee
2. List Employees
3. Remove Employee
4. Exit
`;

function showMenu() {
    console.log(menu);
    rl.question('Select an option: ', handleMenu);
}

function handleMenu(option) {
    switch(option.trim()) {
        case '1':
            addEmployee();
            break;
        case '2':
            listEmployees();
            break;
        case '3':
            removeEmployee();
            break;
        case '4':
            console.log('Exiting...');
            rl.close();
            break;
        default:
            console.log('Invalid option! Please choose 1-4.');
            showMenu();
    }
}

function addEmployee() {
    rl.question('Enter employee name: ', (name) => {
        rl.question('Enter employee ID: ', (id) => {
            if(employees.find(emp => emp.id === id)) {
                console.log('Employee ID already exists!');
            } else {
                employees.push({ name, id });
                console.log(`Employee ${name} added successfully!`);
            }
            showMenu();
        });
    });
}

function listEmployees() {
    if(employees.length === 0) {
        console.log('No employees found.');
    } else {
        console.log('\n--- Employee List ---');
        employees.forEach(emp => console.log(`ID: ${emp.id}, Name: ${emp.name}`));
    }
    showMenu();
}

function removeEmployee() {
    rl.question('Enter employee ID to remove: ', (id) => {
        const index = employees.findIndex(emp => emp.id === id);
        if(index === -1) {
            console.log('Employee not found!');
        } else {
            const removed = employees.splice(index, 1)[0];
            console.log(`Employee ${removed.name} removed successfully!`);
        }
        showMenu();
    });
}

showMenu();
