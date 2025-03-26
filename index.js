const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
 

const postList = document.querySelector(".post-list")
const like = document.querySelector(".heart")

function renderPosts() {
    let allPosts = "";
    for (let i = 0; i < posts.length; i++) {
        allPosts += `
        <div class="post" key="${i}">
            <div class="post-header">
                <img class="post-user" src="${posts[i].avatar}" >
                <div class="post-user-info">
                    <h3 class="post-user-info post-name">${posts[i].name}</h3>
                    <p class="post-user-info">${posts[i].location}</p>
                </div>
            </div>
            <img class="post-image" src="${posts[i].post}">
            <div class="post-stats">
                <img class="post-icon heart" src="images/icon-heart.png">
                <img class="post-icon comment-icon" src="images/icon-comment.png">
                <img class="post-icon dm" src="images/icon-dm.png">
                <p class="post-likes">${posts[i].likes}</p>
            </div>
            <div class="comment">
                <h3 class="comment-user">${posts[i].username}</h3>
                <p class="comment-text">
                    ${posts[i].comment}
                </p>
            </div>
        </div>
        `
    }
    postList.innerHTML = allPosts;
}

renderPosts();


postList.addEventListener("dblclick", function(e) {
    const postElement = e.target.closest(".post");
    if (postElement) {
        const key = postElement.getAttribute("key");
        // Increase likes for the specified post
        posts[key].likes++;
        renderPosts();
    }
});


