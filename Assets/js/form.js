//we are getting the values and storing in a variable
const usernameInput = document.querySelector('#username').value;
const titleInput = document.querySelector('#title').value;
const contentInput = document.querySelector('#content').value; 

//set the item
    // store the blog article
    localStorage.setItem('username',username);//saving to localstorage
    localStorage.setItem('title',title);
    localStorage.setItem('content',content);
 //redirect to the blog page

 




 //this piece of code is for the submit button to go to the bloc (html-it works!)
//the document is searching for the id of submitbtn
const buttonEl = document.querySelector("#submitBtn");

//it is listening for the click
buttonEl.addEventListener("click",function(){
 //the window is redirecting us to the blog html
window.location = "./blog.html";
});