var url = "https://api.myanimelist.net/v2/anime?q=one";

var client_id = "0230a448d1bb7d6b073082758860cf3b";
var client_secret = "c915d2e17302a05c44cdd2d0d9395fa0776cc01ddcc68d1f60b5cdc5c8e1ba79";

window.onload = function () {
    getAnime();
}

function getAnime() {
    var url = 'https://api.jikan.moe/v4/anime/{id}';
}

function gAnime() {
    var url = 'https://api.myanimelist.net/v2/anime?q=one';

    fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'X-MAL-CLIENT-ID': '0230a448d1bb7d6b073082758860cf3b'
        },
        mode: 'no-cors',
    })
    .then((res) => res)
    .then((data) => console.log(data))
    .catch(function(err) {
        console.error(err);
    });
}


function searchAnime(searchTerm) {
    var url = "https://api.myanimelist.net/v2/anime?q=" + searchTerm;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer " + access_token);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json);
            var anime = json.data[0];
            var title = anime.title;
            var synopsis = anime.synopsis;
            var image = anime.image_url;
            var score = anime.score;
            var episodes = anime.episodes;
            var status = anime.status;
            var start_date = anime.start_date;
            var end_date = anime.end_date;
            var type = anime.type;
            var genres = anime.genres;
            var studios = anime.studios;
            var producers = anime.producers;
            var licensors = anime.licensors;
            var source = anime.source;
            var duration = anime.duration;
            var rating = anime.rating;
            var popularity = anime.popularity;
            var members = anime.members;
            var favorites = anime.favorites;
            var rank = anime.rank;
            var popularity_rank = anime.popularity_rank;
            var rating_rank = anime.rating_rank;
            var members_rank = anime.members_rank;
            var favorites_rank = anime.favorites_rank;
            var related = anime.related;
            var recommendations = anime.recommendations;
            var user_updates = anime.user_updates;
            var user_reviews = anime.user_reviews;
            var user_statistics = anime.user_statistics;
            var user_favorites = anime.user_favorites
        }
    }
}




// fetch('http://example.com/movies.json')
//     .then(response => response.json())
//     .then(data => console.log(data));

async function fetchAnime(data = {}) {
    var url = "https://api.myanimelist.net/v2/anime?q=one";
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
            'X-MAL-CLIENT-ID': '0230a448d1bb7d6b073082758860cf3b'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

