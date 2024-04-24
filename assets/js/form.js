function auth(event) {
    event.preventDefault();
   
    let username = document.getElementById("username").value;
    let title = document.getElementById("title").value;
    let blog = document.getElementById("blog").value;
   
   // redirect the page to blog.html if all of the elements are entered
    if (username && title && blog) {
        window.location.href = "blog.html";
    } 
    else {
        alert("Please enter all the fields");
    } 
}
// collect the data from the form in local storage and display it on blog.html
function collectData() { 
    let username = document.getElementById("username").value;
    let title = document.getElementById("title").value;
    let blog = document.getElementById("blog").value;

    localStorage.setItem("username", username);
    localStorage.setItem("title", title);
    localStorage.setItem("blog", blog);
} 
//place data in local storage

function getFormData() {
    const username = localStorage.setItem("username");
    const title = localStorage.setItem("title");
    const blog = localStorage.setItem("blog");
    document.getElementById("username").innerHTML = username;
    document.getElementById("title").innerHTML = title;
    document.getElementById("blog").innerHTML = blog;
} 


