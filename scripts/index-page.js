

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

    //create an array of objects

    // Add Event Listener 

    const formElement = document.querySelector("form");

    //create an array

    let newCommentArray = [
        {   Name: "Isaac Tadesse",
            Comment_Text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
            Time_Stamp: "10/20/2023",
        },
        {
            Name: "Christina Cabrera",
            Comment_Text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
            Time_Stamp: "10/28/2023"
        },
        {
            Name: "Victor Pinto",
            Comment_Text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
            Time_Stamp: "11/02/2023",
        }
    ];


    function createComment (newObject) {
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
        newCommentUserName.textContent= newObject.Name;

        let newCommentUserText = document.createElement('p');
        newCommentUserText.classList.add("info-group__text");
        newCommentUserData.appendChild(newCommentUserText);
        newCommentUserText.textContent = newObject.Comment_Text;

        let newCommentDate = document.createElement('p');
        newCommentDate.classList.add("comment__date");
        newCommentContainer.appendChild(newCommentDate);
        newCommentDate.textContent = newObject.Time_Stamp.toLocaleDateString();
        
    };


    // Add Event Handler 

    function displayComment (event) {
        event.preventDefault();

        //retrieve values from inputs, including new Date 
        let nameValue = nameInputElement.value;
        let commentValue = commentInputElement.value;
        let newDateValue = new Date();
      
    

        //insert values into array and create newObject variable

        newCommentArray.push({"Name": nameValue, "Comment_Text": commentValue, "Time_Stamp": newDateValue});
        let arrayIndexValue = (newCommentArray.length) - 1;
        let newObject = newCommentArray[arrayIndexValue];

        //take new object and create comment displayed


        createComment(newObject);
        
        //reset form 
        event.target.reset();

    };



    formElement.addEventListener("submit", displayComment);




