async function fetchInstagramPosts() {
    const accessToken = "YOUR_INSTAGRAM_ACCESS_TOKEN";  // Get from Instagram API
    const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=${accessToken}`);
    const data = await response.json();

    const menuContainer = document.querySelector(".menu-grid");

    data.data.forEach(post => {
        if (post.media_type === "IMAGE" && post.caption.includes("menuItem")) {
            let div = document.createElement("div");
            div.classList.add("menu-item");
            div.innerHTML = `
                <img src="${post.media_url}" alt="Menu Item">
                <h3>${post.caption.split(' ')[1]}</h3>
                <p class="ingredients">${post.caption.split(' ')[2]}</p>
            `;
            menuContainer.appendChild(div);
        }
    });
}

fetchInstagramPosts();
