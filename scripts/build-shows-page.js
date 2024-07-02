

//declare variables 

var showSection = document.querySelector(".shows-section");
var sanFran = "San Francisco, CA";

//declare element variables 


//create functions 

function createShowCard() {

        var showCard = document.createElement('div');
        showCard.classList.add("show");
        showSection.appendChild(showCard);

        for(i=0; i<3; i++){
            var showSubGroup = document.createElement('div');
            showSubGroup.classList.add("show__sub-group");
            var subGroupTitle = document.createElement('p');
            subGroupTitle.classList.add("sub-group__title");
            var subGroupInfo = document.createElement('p');
            subGroupInfo.classList.add("sub-group__info");   
            showCard.appendChild(showSubGroup); 
            showSubGroup.append(subGroupTitle,subGroupInfo);
          
        };

        var showCardButton = document.createElement('button');
        showCardButton.classList.add("button");
        showCard.appendChild(showCardButton);
};




//create an array 

let showsArray = [
    {
        Date: "Mon Sept 09 2024",
        Venue: "Ronald Lane",
        Location: sanFran,

    },
    {
        Date: "Tue Sept 17 2024",
        Venue: "Pier 3 East",
        Location: sanFran,
    },
    {
        Date: "Sat Oct 12 2024",
        Venue: "View Lounge",
        Location: sanFran,
    },
    {
        Date: "Sat Nov 16 2024",
        Venue: "Hyatt Agency",
        Location: sanFran,
    },
    {
        Date: "Fri Nov 29 2024",
        Venue: "Ronald Lane",
        Location: sanFran,
    },
    {
        Date: "Wed Dec 18 2024",
        Venue: "Ronald Lane",
        Location: sanFran,
    }

];

showsArray.forEach((show) => {
    createShowCard();
})

function addValues(){
    let allButtons = document.querySelectorAll(".button");
    let allShowCards = document.querySelectorAll(".show");
    for (let i = 0; i < allShowCards.length; i++){
        allShowCards[i].querySelectorAll(".sub-group__title").item(0).textContent = "date";
        allShowCards[i].querySelectorAll(".sub-group__info").item(0).textContent = showsArray[i].Date;
        allShowCards[i].querySelectorAll(".sub-group__title").item(1).textContent = "Venue";
        allShowCards[i].querySelectorAll(".sub-group__info").item(1).textContent = showsArray[i].Venue;
        allShowCards[i].querySelectorAll(".sub-group__title").item(2).textContent = "Location";
        allShowCards[i].querySelectorAll(".sub-group__info").item(2).textContent = showsArray[i].Location;
        allButtons[i].textContent = "Buy Tickets"
    };
  
};

addValues();









