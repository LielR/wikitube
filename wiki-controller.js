'use strict'

function onInit() {
    onGetVideos()
}

function onGetVideos() {
    console.log('Asking...');
    getVideos()
        .then(renderVideos)
}

function renderVideos(videos) {
    // console.log('videos:', videos);

    var elContain = document.querySelector('.videos-container')
    var strHTML = ''
    videos.map((video) => {
        strHTML +=
            `
            <div class="video" onclick="renderPlayer('${video.id.videoId}')">
            <img src="${video.snippet.thumbnails.default.url}" />
            <p>${video.snippet.title}</p>
            </div>
 `
    })


    elContain.innerHTML = strHTML
}

function renderPlayer(id) {
    var elPlayer = document.querySelector('iframe').src = `https://www.youtube.com/embed/${id}`
}

function renderWiki(wiki) {
    console.log('wiki:', wiki);
    var elContain = document.querySelector('.wiki-container')
    var strHTML = `
<h2 class="title">${wiki.query.search[0].title}</h2>
<h3 class="time">${wiki.query.search[0].timestamp}</h3>
<p class="snippet">${wiki.query.search[0].snippet}</p>
`

    elContain.innerHTML = strHTML



}

function onSearch(value) {

    getVideos(value)
        .then(renderVideos)
    getWiki(value)
        .then(renderWiki)
}