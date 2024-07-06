import BandSiteApi from "./band-site-api.js";

const ShowsInstance  = new BandSiteApi;

const showSection = document.querySelector(".shows-section");

async function createShows() {


    let showsArray = await ShowsInstance.getShows();
    const showSection = document.querySelector(".shows-section");
    for(let i = 0; i < showsArray.length; i++){

            let showCard = document.createElement('div');
            showCard.classList.add("show");
            showSection.appendChild(showCard);

                    for(let i=0; i<3; i++){
                        let showSubGroup = document.createElement('div');
                        showSubGroup.classList.add("show__sub-group");
                        let subGroupTitle = document.createElement('p');
                        subGroupTitle.classList.add("sub-group__title");
                        let subGroupInfo = document.createElement('p');
                        subGroupInfo.classList.add("sub-group__info");   
                        showCard.appendChild(showSubGroup); 
                        showSubGroup.append(subGroupTitle,subGroupInfo);
                
                    };
            

            let showCardButton = document.createElement('button');
            showCardButton.classList.add("button");
            showCard.appendChild(showCardButton);

      




    const allButtons = document.querySelectorAll(".button");
    const allShowCards = document.querySelectorAll(".show");
    

            allShowCards[i].querySelectorAll(".sub-group__title").item(0).textContent = "date";
            let dateMS = showsArray[i].date;
            let dateString = new Date(dateMS);
            let toDateString = dateString.toDateString();
            allShowCards[i].querySelectorAll(".sub-group__info").item(0).textContent = toDateString;
            allShowCards[i].querySelectorAll(".sub-group__title").item(1).textContent = "Venue";
            allShowCards[i].querySelectorAll(".sub-group__info").item(1).textContent = showsArray[i].place;
            allShowCards[i].querySelectorAll(".sub-group__title").item(2).textContent = "Location";
            allShowCards[i].querySelectorAll(".sub-group__info").item(2).textContent = showsArray[i].location;
            allButtons[i].textContent = "Buy Tickets"

        };

    };

 createShows();




