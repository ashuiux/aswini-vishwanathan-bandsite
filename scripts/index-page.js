 // Array with 3 default comments
 const comments = [
    {
      name: "Victor Pinto",
      timestamp: new Date().toLocaleString(),
      comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },
    {
      name: "Christina Cabrera",
      timestamp: new Date().toLocaleString(),
      comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
    {
      name: "saac Tadesse",
      timestamp: new Date().toLocaleString(),
      comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
  ];

  // Function to render one comment to the DOM
  function renderComment(comment) {
    const commentContainer = document.getElementById("comments__container");

    // Create a div to hold the comment
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");

    // Add name
    const name = document.createElement("h3");
    name.textContent = comment.name;
    commentDiv.appendChild(name);

    // Add timestamp
    const timestamp = document.createElement("p");
    timestamp.textContent = comment.timestamp;
    commentDiv.appendChild(timestamp);

    // Add comment text
    const commentText = document.createElement("p");
    commentText.textContent = comment.comment;
    commentDiv.appendChild(commentText);

    // Append the comment div to the comments container
    commentContainer.appendChild(commentDiv);
  }

  // Function to render all comments
  function renderAllComments() {
    // Clear the container
    const commentContainer = document.getElementById("comments__container");
    commentContainer.innerHTML = ""; // Clear all comments before re-rendering

    // Render each comment from the array
    comments.forEach(renderComment);
  }

  // Render default comments on page load
  renderAllComments();

  // Handling form submission
  const form = document.getElementById("comment-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the page from reloading

    // Get values from the form inputs
    const name = document.getElementById("name").value;
    const commentText = document.getElementById("comment").value;

    // Create a new comment object
    const newComment = {
      name: name,
      timestamp: new Date().toLocaleString(), // Current timestamp
      comment: commentText,
    };

    // Push the new comment to the comments array
    comments.push(newComment);

    // Clear all comments from the page
    document.getElementById("comments-container").innerHTML = "";

    // Re-render all comments (including the new one)
    renderAllComments();

    // Clear the input fields
    form.reset();
  });