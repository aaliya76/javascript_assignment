// index.js

// Show form and hide Add New button
function showForm() {
    document.getElementById("addNewBtn").style.display = "none";
    document.getElementById("formSection").style.display = "block";
}

// Hide form and show Add New button
function cancelForm() {
    clearForm();
    document.getElementById("formSection").style.display = "none";
    document.getElementById("addNewBtn").style.display = "block";
}

// Clear form inputs
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("designation").value = "";
    document.getElementById("joiningDate").value = "";
    document.getElementById("age").value = "";
}

// Save data and add it to the table
function saveData() {
    const name = document.getElementById("name").value;
    const designation = document.getElementById("designation").value;
    const joiningDate = document.getElementById("joiningDate").value;
    const age = document.getElementById("age").value;

    if (!name || !designation || !joiningDate || !age) {
        alert("Please fill all details.");
        return;
    }

    const table = document.getElementById("newData");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${designation}</td>
        <td>${joiningDate}</td>
        <td>${age}</td>
        <td><button class="btn btn-danger btn-sm" onclick="deleteRow(this)">Delete</button></td>
    `;

    table.appendChild(row);
    cancelForm();
}

// Delete a row from the table
function deleteRow(button) {
    button.parentElement.parentElement.remove();
}
