function auth(event) {
    event.preventDefault();
   
    let username = document.getElementById("username").value;
    let title = document.getElementById("title").value;
    let blog = document.getElementById("blog").value;
   
    if (username !== null && title !== null && blog !== null) {
         window.location.replace("blog.html");
    } else {
        alert("Invalid information");
        return;
    }
   }
