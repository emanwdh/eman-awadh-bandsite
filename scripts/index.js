/* <div class = "comment">
        <span class = "comment__image"></span>
        <div class = "comment__info info-group">
            <p class = "info-group__user">Victor Pinto</p>
            <p class = "info-group__text">This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.</p>
        </div>
        <p class = "comment__date">11/02/2023</p>
    </div> */

    //declare DOM Element Selector variables 

    const commentContainer = document.querySelector(".comment");
    const commentUserImage = document.querySelector(".comment__image");
    const commentUserData = document.querySelector(".comment__info");
    const commentUserName = document.querySelector(".info-group__user");
    const commentUserText = document.querySelector(".info-group__text"); 
    const nameInputElement = document.querySelector("#name-input");
    const commentInputElement = document.querySelector("#comment-input");
    const commentSection = document.querySelector(".comment-section");

    //create an array of objects

    // Add Event Listener 

    const formElement = document.querySelector("form");

    //create an array

    let newCommentArray = [];


    // Add Event Handler 

    function postComment(event) {
        event.preventDefault();

        //retrieve values from inputs 
        let nameValue = nameInputElement.value;
        let commentValue = commentInputElement.value;

        for(let i = 0; i < 1; i++){

            //insert values into array 

            newCommentArray.push({"name": nameValue, "comment": commentValue});
            console.log(newCommentArray);



        //create Elements  and insert values (make more re-usable/dry)
       
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
                newCommentUserName.innerHTML= nameValue;
                let newCommentUserText = document.createElement('p');
                newCommentUserText.classList.add("info-group__text");
                newCommentUserData.appendChild(newCommentUserText);
                newCommentUserText.innerHTML = commentValue;
           
            }

        

        //reset form 
        event.target.reset();

    };

    formElement.addEventListener("submit", postComment);


    //is there a need to place the new comments in a new new-comment section



