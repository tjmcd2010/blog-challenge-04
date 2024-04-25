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
//WHEN I submit the form, THEN the page is redirected to blog.html
document.getElementById("form").addEventListener("submit", auth);


