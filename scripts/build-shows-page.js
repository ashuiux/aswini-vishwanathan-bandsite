const api = new BandSiteApi();

async function renderShows() {
  const showTableBody = document.querySelector(".shows__body");
  showTableBody.innerHTML = "";
  try {
    const shows = await api.getShows();

    shows.forEach((show) => {
      const showRow = document.createElement("tr");
      showRow.classList.add("shows__row");

      const dateHeader = document.createElement("th");
      dateHeader.classList.add("shows__header", "shows__header--mobile");
      dateHeader.textContent = "Date";
      const dateData = document.createElement("td");
      dateData.classList.add("shows__data", "shows__data--date");
      dateData.textContent = new Date(show.date).toDateString();

      const venueHeader = document.createElement("th");
      venueHeader.classList.add("shows__header", "shows__header--mobile");
      venueHeader.textContent = "Venue";
      const venueData = document.createElement("td");
      venueData.classList.add("shows__data");
      venueData.textContent = show.place;

      const locationHeader = document.createElement("th");
      locationHeader.classList.add("shows__header", "shows__header--mobile");
      locationHeader.textContent = "Location";
      const locationData = document.createElement("td");
      locationData.classList.add("shows__data");
      locationData.textContent = show.location;

      const actionCell = document.createElement("td");
      actionCell.classList.add("shows__action");
      const button = document.createElement("button");
      button.classList.add("shows__button", "button");
      button.textContent = "Buy Tickets";
      button.addEventListener("click", () => {
        alert(`Your show is booked: ${show.place} - ${show.location}`);
      });

      actionCell.appendChild(button);

      showRow.appendChild(dateHeader);
      showRow.appendChild(dateData);
      showRow.appendChild(venueHeader);
      showRow.appendChild(venueData);
      showRow.appendChild(locationHeader);
      showRow.appendChild(locationData);
      showRow.appendChild(actionCell);

      showTableBody.appendChild(showRow);
    });
  } catch (error) {
    console.error("Error rendering shows:", error);
  }
}

renderShows();
