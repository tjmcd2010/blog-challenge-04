
//display all local storage entries into blog.html in a loop. capture username, title, and blog and place them on the page in order of entry
function displayBlog() { 
    let username = localStorage.getItem("username");
    let title = localStorage.getItem("title");
    let blog = localStorage.getItem("blog");
    let blogEntry = document.createElement("div");
    blogEntry.innerHTML = username + " wrote " + title + ": " + blog;
    document.body.appendChild(blogEntry);
}



