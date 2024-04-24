//receive local storage data from form.js upon submission of form on index.html
function getFormData() {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const message = localStorage.getItem("message");
    document.getElementById("name").innerHTML = name;
    document.getElementById("email").innerHTML = email;
    document.getElementById("message").innerHTML = message;
} 
//display local storage data in html


