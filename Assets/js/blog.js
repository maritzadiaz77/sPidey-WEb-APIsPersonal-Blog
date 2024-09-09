//get blog article out of localstorage
const username = localStorage.getItem("username");
const title = localStorage.getItem("title");
const content = localStorage.getItem("content");
//after this code, we need to update the UI..
    //display them
    //add event listener to button

    displayContent();

    function displayContent() {
        const storedUsername = localStorage.getItem("username");
        const storedTitle = localStorage.getItem("title");
        const storedContent = localStorage.getItem("content");
        usernameInput.textContent = storedUsername;
        titleInput.textContent = storedTitle;
        contentInput.textContent = storedContent;
    }



   //the document is searching for the id of backbtn
   const buttonEl = document.querySelector("#backBtn");
   //it is listening for the click
   buttonEl.addEventListener("click",function(){
    //the window is redirecting us to the index html
   window.location = "./index.html";
   });