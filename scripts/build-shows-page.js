const shows = [
    {
        date: "2024-10-15",
        title: "Ronald Lane",
        location: "Sanfransico, CA",

    },
    {
        date: "2024-10-18",
        title: "Pier 3 East",
        location: "Sanfransico, CA",
    
    },
    {
        date: "2024-10-20",
        title: "View Lounge",
        location: "Sanfransico, CA",

    },
    {
        date: "2024-10-20",
        title: "Hyatt Agency",
        location: "Sanfransico, CA",

    },
    {
        date: "2024-10-20",
        title: "Moscow Center",
        location: "Sanfransico, CA",
      
    },
    {
        date: "2024-10-20",
        title: "Press Club",
        location: "Sanfransico, CA",
    
    },
];

function renderShows() {
    const showList = document.getElementById("show__list");
    shows.forEach(show => {
        const showItem = document.createElement("div");
        showItem.classList.add("show-item");

        const title = document.createElement("h2");
        title.textContent = show.title;

        const date = document.createElement("p");
        date.textContent = `Date: ${show.date}`;
 
        const location = document.createElement("h2");
        location.textContent = show.location;
       
        const button = document.createElement('button');
        button.textContent = 'BUY TICKETS';
        button.addEventListener('click', () => {
            alert(`Your show is booked: ${show.title}`);
        });

        showItem.appendChild(date);
        showItem.appendChild(title);
        showItem.appendChild(location);
        showItem.appendChild(button);

        addHoverAndClickEvents(showItem);

        showList.appendChild(showItem);
    });
}

renderShows();

function addHoverAndClickEvents(showItem) {
    showItem.addEventListener("click", () => {
        document.querySelectorAll(".show-item").forEach(item => {
            item.classList.remove("selected");
        });

        showItem.classList.add("selected");
    });
}
