Post Data Structure:

The JavaScript file (index.js) defines an array of post objects where each post contains:
Name, username, and location of the user.
Paths for the user's avatar and the main post image.
A comment and the initial number of likes.
Rendering Posts:

The renderPosts() function generates an HTML string by iterating over the posts array.
Each post is represented as a structured HTML element, containing:
A header with the user's avatar, name, and location.
The post image.
Stats including like, comment, and direct message icons along with the number of likes.
A comment section displaying the username and comment text.
The resulting HTML is inserted into an element with the class .post-list.
User Interaction:

An event listener is attached to the .post-list container that listens for a double-click event:
When a post is double-clicked, the code identifies the parent .post element and retrieves its key attribute to determine which post was clicked.
The corresponding post's likes are incremented, and the posts are re-rendered to update the displayed like count.
HTML Structure (index.html):

The HTML file includes:
A header with a logo and user profile image.
A container (.post-list) where posts are dynamically rendered.
Links to the CSS stylesheet and Google Fonts.
A script tag to load index.js.
Styling (index.css):

Basic reset styles for html and body.
Specific styling applied to the header (layout, spacing, and border).
Defined styles for images (e.g., logo, profile, user avatar, and post images) ensuring proper sizing and rounded appearance where applicable.
The .post elements are styled to create a consistent card-like appearance including borders, margins, and flex layout.
Styling for text elements like post names, locations, likes, and comments to ensure readability.
Overall, the code creates a simple social media post feed where posts are dynamically rendered, styled uniformly, and feature an interactive like functionality via double-click events.
