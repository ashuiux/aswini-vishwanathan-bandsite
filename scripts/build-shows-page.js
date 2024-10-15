const shows = [
    {
        date: "2024-10-15",
        title: "Ronald Lane",
        Location: "Sanfransico,CA",
      
    },
    {date: "2024-10-18",
        title: "Pier 3 East",
        Location: "Sanfransico,CA",
        
    },
    {
        date: "2024-10-20",
        title: "View Lounge",
        Location: "Sanfransico,CA",
        
    },
    {
        date: "2024-10-20",
        title: "Hyatt Agency",
        Location: "Sanfransico,CA",
        
    },
    {
        date: "2024-10-20",
        title: "Moscow Center",
        Location: "Sanfransico,CA",
        
    },
    {
        date: "2024-10-20",
        title: "Press Club",
        Location: "Sanfransico,CA",
        
    },
];

function renderShows() {
    const showList = document.getElementById("show__list"); // Assuming you have a container div in HTML
    shows.forEach(show => {
        const showItem = document.createElement("div");
        showItem.classList.add("show-item");

        const title = document.createElement("h2");
        title.textContent = show.title;
        const description = document.createElement("p");
        description.textContent = show.description;
        const date = document.createElement("p");
        date.textContent = `Date: ${show.date}`;
        const time = document.createElement("p");
      

        showItem.appendChild(title);
        showItem.appendChild(description);
        showItem.appendChild(date);


        addHoverAndClickEvents(showItem);

        showList.appendChild(showItem);
    });
}

// Call the function to render shows
renderShows();


function addHoverAndClickEvents(showItem) {
    // When an item is clicked, remove the selected class from others and add it to the clicked one
    showItem.addEventListener("click", () => {
        // Remove the selected class from all show items
        document.querySelectorAll(".show-item").forEach(item => {
            item.classList.remove("selected");
        });
        // Add the selected class to the clicked item
        showItem.classList.add("selected");
    });
}
