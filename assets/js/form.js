

const submit = document.getElementById("submit");

let data = JSON.parse(localStorage.getItem("data")) === null ? [] : JSON.parse(localStorage.getItem("data"));

submit.addEventListener("click", function (event) {
    event.preventDefault();
    const userInput = {
        username: "",
        title: "",
        blog: "",
        };

        userInput.username = document.getElementById("username").value;
        userInput.title = document.getElementById("title").value;
        userInput.blog = document.getElementById("blog").value;

        if(userInput.username.trim().length != 0 && userInput.title.trim().length != 0 && userInput.blog.trim().length != 0){
            data.push(userInput);
            localStorage.setItem("data", JSON.stringify(data));
         
            window.location.href = "blog.html" 
            //clears username, title and blog from submission form fields 
            document.getElementById("username").value = "";
            document.getElementById("title").value = "";
            document.getElementById("blog").value = "";
        }else{
    window.alert("Please fill all the fields");
};}
)


