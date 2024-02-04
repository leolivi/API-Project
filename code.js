// API Async Request
getData();

async function getData () {
	const response = await fetch("assets/api/data.json")
	const data = await response.json();

    // muss ausgeführt werden!
    displayPosts(data);
}

function displayPosts(data) {
    data.forEach(blogPost => {
        const container = document.createElement("div")
        container.classList.add("blog-post")
        const template = `
                <img src="assets/images/${blogPost.image[1]}" srcset="assets/images/${blogPost.image[0]}" alt="handmade pink macrame wallhanging with raffia details">
                <div class="desc">
                    <p>${blogPost.title}</p>
                    <img class="info-icon" onmouseover="displayInfo(this)" onclick="displayInfo(this)" onmouseleave="removeInfo(this)" src="assets/icons/icon-info-cloud-desktop.svg" alt="click here to see picture describtion">
                </div>
                <div class="desc-text">${blogPost.body}</div>
        `
        container.innerHTML = template;
        document.querySelector(".projects-image-container").appendChild(container);
    })
}

// display description
function displayInfo(icon) {
    const text = icon.parentElement.nextElementSibling;
    const desc = icon.parentElement.querySelector("p");
    const banner = icon.parentElement;
  
    text.style.display = text.style.display === "none" ? "block" : "none";
    desc.style.opacity = desc.style.opacity === "0" ? "1" : "0";
    banner.style.backgroundColor = banner.style.backgroundColor === "transparent" ? "var(--KC-brownhover)" : "transparent";
}

function removeInfo(icon) {
    const text = icon.parentElement.nextElementSibling;
    const desc = icon.parentElement.querySelector("p");
    const banner = icon.parentElement;
  
    text.style.display = "none";
    desc.style.opacity = "0";
    banner.style.backgroundColor = "transparent";
}
