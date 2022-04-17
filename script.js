const url = "https://api.jikan.moe/v4";

window.onload = function () {
    var searchForm = document.searchForm;
    searchForm.addEventListener('submit', searchAnime);
}

// Get anime by ID
async function getAnime(id) {
    return await fetch(`${url}/anime/${id}`)
        .then((res) => res.json())
        .then (data => data)
        .catch(function (err) {
            console.error(err);
        });
}

// Search anime by Title
// Return a list of Animes
function searchAnime(e) {
    e.preventDefault();

    let str = document.searchForm.title.value;

    fetch(`${url}/anime?q=${str}&type=tv&order_by=title`)
        .then((res) => res.json())
        .then(function (data) {
            listAnime(data.data);
        })
        .catch(function (err) {
            console.error(err);
        });
}

// Show a list of Animes
function listAnime(data) {
    let div = document.getElementById('listAnime');
    div.innerHTML = "";

    for (const key in data) {
        let containerImg = document.createElement('div');
        containerImg.className = "containerImg";

        let textoImg = document.createElement('div');
        textoImg.className = "textoImg";
        textoImg.textContent = data[key].title;

        let img = document.createElement('img');
        img.src = data[key].images.webp.large_image_url;
        img.alt = data[key].title;
        img.title = data[key].title;
        img.className = 'listImg';

        containerImg.appendChild(img);
        containerImg.appendChild(textoImg);
        div.appendChild(containerImg);
    }

    var listImgs = document.getElementsByClassName('listImg');

    for (let i = 0; i < listImgs.length; i++) {
        listImgs[i].addEventListener("click", openPop);
        listImgs[i].dataset.id = data[i].mal_id;
    }
    window.addEventListener("click", closePop);
}

// Show anime details
async function openPop(e) {
    e.preventDefault();
    popup.style.display = "block";

    let anime;
    await getAnime(e.target.dataset.id).then((data) => {anime = data.data});

    popupTitle.innerHTML = anime.title;
    popupSynopsis.innerHTML = anime.synopsis;
}

// Close anime details
function closePop(e) {
    if (e.target == popup) {
        popup.style.display = "none";
    }
}