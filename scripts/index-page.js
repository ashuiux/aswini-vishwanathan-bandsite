const api = new BandSiteApi();

function renderComment(comment) {
  const commentContainer = document.getElementById("comment__container");
  
  const commentDiv = document.createElement("div");
  commentDiv.classList.add("comment__post");

  const avatarImg = document.createElement("img");
  avatarImg.classList.add("comment__avatar");
  commentDiv.appendChild(avatarImg);

  const commentContentDiv = document.createElement("div");
  commentContentDiv.classList.add("comment__content");

  const name = document.createElement("h3");
  name.textContent = comment.name;
  commentContentDiv.appendChild(name);

  const timestamp = document.createElement("p");
  timestamp.classList.add("comment__timestamp");
  timestamp.textContent = new Date(comment.timestamp).toLocaleString();
  commentContentDiv.appendChild(timestamp);

  const commentText = document.createElement("p");
  commentText.classList.add("comment__text");
  commentText.textContent = comment.comment;
  commentContentDiv.appendChild(commentText);

//trying delete function
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("comment__delete-button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", async function () {
    try {
      await api.deleteComment(comment.id); 
      commentDiv.remove(); 
    } catch (error) {
      console.error("Error deleting comment:", error);
      alert("There was an error deleting this comment. Please try again later.");
    }
  });
  commentContentDiv.appendChild(deleteButton);
//trying delete function

  commentDiv.appendChild(commentContentDiv);

  commentContainer.prepend(commentDiv);
}

async function renderAllComments() {
  const commentContainer = document.getElementById("comment__container");
  commentContainer.innerHTML = ""; 

  try {
    const comments = await api.getComments();
    if (comments.length > 3) {
      comments.length = 3;
    }
    comments.forEach(renderComment);
  } catch (error) {
    console.error("Error rendering comments:", error);
  }
}



renderAllComments();

const form = document.getElementById("form");
form.addEventListener("submit", async function (event) {
  event.preventDefault(); 

  const name = document.getElementById("name").value;
  const commentText = document.getElementById("comment").value;

  const newComment = {
    name: name,
    comment: commentText,
  };

  try {
    await api.postComment(newComment); 
    renderComment(newComment); 
    form.reset(); 
  } catch (error) {
    console.error("Error submitting comment:", error);
  }
});
