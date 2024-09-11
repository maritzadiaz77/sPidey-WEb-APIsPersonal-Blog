//we are getting the values and storing in a variable
const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");

//set the item
// store the blog article
//redirect to the blog page

//this piece of code is for the submit button to go to the bloc (html-it works!
//the document is searching for the id of submitbtn
const buttonEl = document.querySelector("#submitBtn");

//it is listening for the click
buttonEl.addEventListener("click", function () {
  const blog = {
    username: usernameInput.value,
    title: titleInput.value,
    content: contentInput.value,
  };
  const blogPostString = localStorage.getItem("blogPosts");
  let blogPost = JSON.parse(blogPostString);
  if (!blogPost) {
    blogPost = [];
  }
  blogPost.push(blog);
  console.log(blogPost);
  localStorage.setItem("blogPosts", JSON.stringify(blogPost));
  //the window is redirecting us to the blog html
  window.location = "./blog.html";
});
