//your JS code here. If required.
// Get the table and tbody elements
const table = document.getElementById("myTable");
const tbody = table.getElementsByTagName("tbody")[0];

// Add a row to the table with loading text
const loadingRow = tbody.insertRow();
const loadingCell = loadingRow.insertCell();
loadingCell.colSpan = 2;
loadingCell.innerHTML = "Loading...";

// Create an array of 3 promises
const promises = [
  new Promise(resolve => setTimeout(() => resolve("Promise 1"), Math.floor(Math.random() * 3000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve("Promise 2"), Math.floor(Math.random() * 3000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve("Promise 3"), Math.floor(Math.random() * 3000) + 1000))
];

// Wait for all promises to resolve using Promise.all
Promise.all(promises)
  .then(results => {
    // Remove the loading row from the table
    tbody.deleteRow(0);

    // Add rows for each promise and the total time
    let totalTime = 0;
    results.forEach((result, index) => {
      const row = tbody.insertRow();
      const promiseCell = row.insertCell();
      const timeCell = row.insertCell();
      promiseCell.innerHTML = `Promise ${index+1}`;
      const timeTaken = Math.round(performance.now() - totalTime) / 1000;
      timeCell.innerHTML = timeTaken.toFixed(3);
      totalTime += timeTaken;
    });

    // Add a row for the total time taken
    const row = tbody.insertRow();
    const promiseCell = row.insertCell();
    const timeCell = row.insertCell();
    promiseCell.innerHTML = "Total";
    timeCell.innerHTML = totalTime.toFixed(3);
  });
