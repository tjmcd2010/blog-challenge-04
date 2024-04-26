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
         
            window.location.href = "blog.html";
        }else{
    window.alert("Please fill all the fields");
};


  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  data.push({ name, email, password });
  localStorage.setItem("data", JSON.stringify(data));

  alert("Registration successful");
});


