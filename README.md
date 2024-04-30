# 04 Web APIs: Personal Blog

## Your Task

In this challenge, you'll create a two-page website where users will input and view blog posts. It includes building a content form, dynamically rendering blog posts, and implementing a light/dark mode toggle. As you code, you'll gain practical JavaScript experience, explore the Document Object Model's power, and set the stage for more advanced tasks.

## User Story

```md
AS A marketing student,
I WANT a personal blog
SO THAT I can showcase my thoughts and experiences.
```

## Acceptance Criteria

```md
GIVEN a personal blog
WHEN I load the app,
THEN I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content. ✅
WHEN I submit the form,
THEN blog post data is stored to localStorage.✅
WHEN the form submits,
THEN I am redirected to the posts page. ✅
WHEN I enter try to submit a form without a username, title, or content,
THEN I am presented with a message that prompts me to complete the form.✅
WHEN I view the posts page,
THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button. ✅
WHEN I click the light mode/dark mode toggle,
THEN the page content's styles update to reflect the selection. ✅
WHEN I click the "Back" button,
THEN I am redirected back to the landing page where I can input more blog entries. ✅
WHEN I view the main content,
THEN I am presented with a list of blog posts that are pulled from localStorage. ✅
WHEN I view localStorage,
THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.✅
WHEN I take a closer look at a single blog entry in the list,
THEN I can see the title, the content, and the author of the post. ✅
WHEN I view the footer,
THEN I am presented with a link to the developer's portfolio.✅ 
```

## Steps taken

1. I created 3 css files (blog, form and styles), as well as 3 js files (blog, form, logic) as well as an index.html and blog.html.
2. Emulating what we learned from a previous lesson, I created a slider toggle for dark and light mode and built it the style in the styles css file and the logic in the logic.js file. 
3. I used the form.js and form.css files to style and create logic for index.html only.
4. I used the blog.js and blog.css files to style and create locic for blog.html only. 
5. I ensured that both blog.html and index.html had light and dark mode available and a link to my portfolio in the footer.
6. I ensured that all 3 fields (username, title and blog) needed to be complete before a blog could be submitted. 
7. I created a redirect that when the the three fields were sucessfully input and submitted, it would tak you to blog.html, where you newly created blog would be dispalyed with any others that had been submitted and remained in local storage. 
8. I created a back button that took you back to index.html to submit another blog. 
9. See demonstration, screenshots and url below.

## Demonstrations and screenshot



## Link to the live url: https://tjmcd2010.github.io/blog-challenge-04/