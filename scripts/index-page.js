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
      name: "Saac Tadesse",
      timestamp: new Date().toLocaleString(),
      comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
  ];

  function renderComment(comment) {
    const commentContainer = document.getElementById("comments-container");
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");

    const name = document.createElement("h3");
    name.textContent = comment.name;
    commentDiv.appendChild(name);

    const timestamp = document.createElement("p");
    timestamp.textContent = comment.timestamp;
    commentDiv.appendChild(timestamp);

    const commentText = document.createElement("p");
    commentText.textContent = comment.comment;
    commentDiv.appendChild(commentText);

  
    commentContainer.appendChild(commentDiv);
  }

  
  function renderAllComments() {
   
    const commentContainer = document.getElementById("comments-container");
    commentContainer.innerHTML = ""; 

    comments.forEach(renderComment);
  }

  renderAllComments();

  const form = document.getElementById("comment-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    const name = document.getElementById("name").value;
    const commentText = document.getElementById("comment").value;

    const newComment = {
      name: name,
      timestamp: new Date().toLocaleString(), 
      comment: commentText,
    };

    comments.push(newComment);

    if (comments.length > 3) {
        comments.shift();
      }
    document.getElementById("comments-container").innerHTML = "";

    renderAllComments();

    form.reset();
  });