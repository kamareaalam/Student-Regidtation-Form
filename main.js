let mytable = [];

const save = () => {
    let studentname = document.getElementById("mystudentname").value;
    let age = document.getElementById("myage").value;
    let email = document.getElementById("myemail").value;
    let mobileno = document.getElementById("mymobileno").value;
    let studentClass = document.getElementById("myclass").value;
    let section = document.getElementById("mysection").value;

    // Validate input fields
    if (studentname && age && email && mobileno && studentClass && section) {
        let tableRow = {
            studentname,
            age,
            email,
            mobileno,
            studentClass,
            section
        };
        mytable.push(tableRow);
        gettable();
        clearInput(); // Clear inputs after saving
    } else {
        alert("Please fill in all fields.");
    }
};

const gettable = () => {
    let data = "";
    if (mytable.length === 0) {
        data = `<td colspan="8" align="center">No data available</td>`;
    } else {
        mytable.forEach((row, index) => {
            data += `<tr>
                                <td>${index + 1}</td>
                                <td>${row.studentname}</td>
                                <td>${row.age}</td>
                                <td>${row.email}</td>
                                <td>${row.mobileno}</td>
                                <td>${row.studentClass}</td>
                                <td>${row.section}</td>
                                <td><button onclick="deltable(${index})" class="btn btn-danger">Delete</button></td>
                              </tr>`;
        });
    }
    document.getElementById("container").innerHTML = data;
};

const deltable = (index) => {
    mytable.splice(index, 1);
    gettable();
};

const clearInput = () => {
    document.getElementById("mystudentname").value = "";
    document.getElementById("myage").value = "";
    document.getElementById("myemail").value = "";
    document.getElementById("mymobileno").value = "";
    document.getElementById("myclass").value = "";
    document.getElementById("mysection").value = "";
};