// Retrieves values stored in local storage to display the "data"
const data = JSON.parse(localStorage.getItem('data')) || [];
const blogs = document.getElementById('blogs');


// finds all information in "data" and displays it in its own box on the page
data.forEach(blog => {
    const blogElement = document.createElement('article');
    blogElement.id = 'blogs';
    blogElement.innerHTML = `
        <h2>${blog.title}</h2>
        <p>${blog.blog}</p>
        <h3>by: ${blog.username}</h3>
    `;
    blogs.appendChild(blogElement);
})



