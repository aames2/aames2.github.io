let persons = [];
let salaries = [];

function addSalary() {
    let name = document.getElementById("name").value;
    let salary = document.getElementById("salary").value;

    if (name === "" || salary === "" || isNaN(salary)) {
        alert("Both fields must be filled and salary must be a number with no punctuation (, . ( ) etc).");
        return;
    }

    persons.push(name);
    salaries.push(Number(salary));

    document.getElementById("name").value = '';
    document.getElementById("salary").value = '';
    document.getElementById("name").focus();
}

function displayResults() {
    let sum = salaries.reduce((acc, val) => acc + val, 0);
    let avg = sum / salaries.length;
    let max = Math.max(...salaries);

    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <h2>Results</h2>
        <p>Average Salary: ${avg.toFixed(2)}</p>
        <p>Highest Salary: ${max}</p>
    `;
}

function displaySalary() {
    let tableBody = document.getElementById("results_table").querySelector("tbody");
    tableBody.innerHTML = '';

    for (let i = 0; i < persons.length; i++) {
        let row = tableBody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        cell1.textContent = persons[i];
        cell2.textContent = salaries[i];
    }
}

document.getElementById("name").focus();
