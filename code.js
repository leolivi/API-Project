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
                    <img class="info-icon" onclick="displayInfo()" src="assets/icons/icon-info-cloud-desktop.svg" alt="click here to see picture describtion">
                </div>
                <div class="desc-text">${blogPost.body}</div>
        `
        container.innerHTML = template;
        document.querySelector(".projects-image-container").appendChild(container);
    })
}

// click info icon

    // let infoIcons = document.querySelectorAll('.info-icon');

    // infoIcons.forEach(infoIcon => {
    //     infoIcon.addEventListener('click', function(event) {
    //         event.preventDefault
    //         displayInfo();
    //     });
    // });

function displayInfo() {
    let text = document.querySelector('.desc-text');
    let desc = document.querySelector('p');
    let banner = document.querySelector('.desc');
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }

    if (desc.style.opacity === "0") {
        desc.style.opacity = "1";
    } else {
        desc.style.opacity = "0";
    }

    if (banner.style.backgroundColor === 'transparent') {
        banner.style.backgroundColor = "var(--KC-brownhover)";
    } else {
        banner.style.backgroundColor = 'transparent';
    }
}
