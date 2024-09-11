//get blog article out of localstorage
const blogPostArray = localStorage.getItem("blogPosts");
let blogPost = JSON.parse(blogPostArray);
const blogPostEl = document.querySelector("#Blog-post");

//creating a loop so that it loops through the otehrs as well
for (let blog of blogPost){
    const storedUsername = blog.username;
    const storedTitle = blog.title;
    const storedContent = blog.content;
    const card = document.createElement("div");
    //DO THE SAME THING FOR THE OTHER 2-TITLE AND CONTENT
    const usernameEl = document.createElement("h1");
    usernameEl.textContent = storedUsername;
    card.appendChild(usernameEl);
    blogPostEl.appendChild(card);

    const titleEl = document.createElement("h1");
    titleEl.textContent = storedTitle;
    card.appendChild(titleEl);
    blogPostEl.appendChild(card);

    const contentEl = document.createElement("h1");
    contentEl.textContent = storedContent;
    card.appendChild(contentEl);
    blogPostEl.appendChild(card);

}

    //add event listener to buttoN
   //the document is searching for the id of backbtn
   const buttonEl = document.querySelector("#backBtn");
   //it is listening for the click
   buttonEl.addEventListener("click",function(){
    //the window is redirecting us to the index html
   window.location = "./index.html";
   });