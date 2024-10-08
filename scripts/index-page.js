 import BandSiteApi from "./band-site-api.js";

//declare DOM Element Selector variables 

    const commentContainer = document.querySelector(".comment");
    const commentUserImage = document.querySelector(".comment__image");
    const commentUserData = document.querySelector(".comment__info");
    const commentUserName = document.querySelector(".info-group__user");
    const commentUserText = document.querySelector(".info-group__text"); 
    const nameInputElement = document.querySelector("#name-input");
    const commentInputElement = document.querySelector("#comment-input");
    const commentSection = document.querySelector(".comment-section");
    const commentDate = document.querySelector(".comment__date");
    const formElement = document.querySelector("form");

// new instance 

const BioInstance = new BandSiteApi();



//relative time function

function relativeDate(date) {

    const diff = Math.round ((new Date() - new Date(date))/ 1000);
    const minute = 60; 
    const hour = minute * 60;
    const day = hour * 24; 
    const week = day * 7; 
    const month = day * 30;
    const year = month * 12;


  if (diff < 30) {
    return "just now";
  } else if (diff < minute) {
    return diff + " seconds ago";
  } else if (diff < 2 * minute) {
    return "a minute ago";
  } else if (diff < hour) {
    return Math.floor(diff / minute) + " minutes ago";
  } else if (Math.floor(diff / hour) == 1) {
    return "1 hour ago";
  } else if (diff < day) {
    return Math.floor(diff / hour) + " hours ago";
  } else if (diff < day * 2) {
    return "yesterday";
  } else if (diff < week) {
    return week + " days ago";
  } else if (diff < month) {
    return Math.floor(diff / week) + " weeks ago";
  } else if (diff < year) {
    return Math.floor(diff / month) + " months ago";
  } else {
    return Math.floor(diff / year) + " years ago";
  }


};




// async function to display comments 

async function displayComments () {
    let commentArray = await BioInstance.getComments();

    for (let i = 0; i < commentArray.length; i ++){
        let oldCommentContainer  = document.createElement('div');
        oldCommentContainer.classList.add("comment");
        commentSection.insertBefore(oldCommentContainer,formElement.nextSibling);

        let oldCommentUserImage = document.createElement('span');
        oldCommentUserImage.classList.add("comment__image");
        oldCommentContainer.appendChild(oldCommentUserImage);

        let oldCommentUserData = document.createElement('div');
        oldCommentUserData.classList.add("info-group");
        oldCommentContainer.appendChild(oldCommentUserData);

        let oldCommentUserName = document.createElement('p');
        oldCommentUserName.classList.add("info-group__user");
        oldCommentUserData.appendChild(oldCommentUserName);
        oldCommentUserName.textContent= commentArray[i].name;


        let oldCommentUserText = document.createElement('p');
        oldCommentUserText.classList.add("info-group__text");
        oldCommentUserData.appendChild(oldCommentUserText);
        oldCommentUserText.textContent = commentArray[i].comment;

        let oldCommentDate = document.createElement('p');
        oldCommentDate.classList.add("comment__date");
        oldCommentContainer.appendChild(oldCommentDate);
        let oldDateValue = commentArray[i].timestamp;
        let oldDateStringValue = new Date(oldDateValue);
        oldCommentDate.textContent = relativeDate(oldDateStringValue);

        let oldCommentDeleteButton = document.createElement('button');
        oldCommentDeleteButton.classList.add("button--delete");
        oldCommentContainer.appendChild(oldCommentDeleteButton);
        oldCommentDeleteButton.innerText = "Delete";
        
        oldCommentDeleteButton.addEventListener("click", ()=> {
        BioInstance.deleteComment(commentArray[i].id);
        oldCommentContainer.remove();

        });





       
        

    };



};

displayComments();


let inputField = document.querySelector("input");
let commentField = document.querySelector("textarea");

if(inputField.value !== "") {
    inputField.classList.toggle("input-field--error", false);
   

}else if(commentField.value !== "") {
    commentField.classList.toggle("input-field--error", false); 
};




async function addComment(event){ 


    if (inputField.value === "" || commentField.value === "")  
    {   
        event.preventDefault();

        if(inputField.value === "" ){
        inputField.classList.toggle("input-field--error", true);
        }
        else if (commentField.value === ""){
        commentField.classList.toggle("input-field--error", true);
        }


    }else {

        inputField.classList.toggle("input-field--error", false);
        commentField.classList.toggle("input-field--error", false); 

        event.preventDefault();

        let nameValue = nameInputElement.value;
        let commentValue = commentInputElement.value;

        let newComment = {"name": nameValue,"comment": commentValue};

        BioInstance.postComments(newComment);

        let commentArray = await BioInstance.getComments();
        let newDate = new Date ();
        let newDateMS = newDate.getTime();

        let newCommentContainer = document.createElement('div');
        newCommentContainer.classList.add("comment");
        commentSection.insertBefore(newCommentContainer,formElement.nextSibling);

        let newCommentUserImage = document.createElement('span');
        newCommentUserImage.classList.add("comment__image");
        newCommentContainer.appendChild(newCommentUserImage);


        let newCommentUserData = document.createElement('div');
        newCommentUserData.classList.add("info-group");
        newCommentContainer.appendChild(newCommentUserData);

        let newCommentUserName = document.createElement('p');
        newCommentUserName.classList.add("info-group__user");
        newCommentUserData.appendChild(newCommentUserName);
        newCommentUserName.textContent= nameValue;

        let newCommentUserText = document.createElement('p');
        newCommentUserText.classList.add("info-group__text");
        newCommentUserData.appendChild(newCommentUserText);
        newCommentUserText.textContent = commentValue;

        let newCommentDate = document.createElement('p');
        newCommentDate.classList.add("comment__date");
        newCommentContainer.appendChild(newCommentDate);
        newCommentDate.textContent = relativeDate(newDateMS);


        let newCommentDeleteButton = document.createElement('button');
        newCommentDeleteButton.classList.add("button--delete");
        newCommentContainer.appendChild(newCommentDeleteButton);
        newCommentDeleteButton.innerText = "Delete";
      

        event.target.reset();
        
    };


};

formElement.addEventListener("submit", addComment);




