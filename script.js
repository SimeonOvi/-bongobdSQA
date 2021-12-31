// Variables
let mediaList = [
    "rNRXpmlzIfc",
    "K-khHuBVC0w",
    "r4tnjv4D7oE",
    "ovWMQg4qHR0",
    "CH2mHbphEas"
];

//const divMediaList = document.getElementById("mediaListContainer");
//const divMediaPlayback = document.getElementById("mediaPlayback");

const divMediaList = document.createElement("div");
divMediaList.id = "mediaListContainer";
const divMediaPlayback = document.createElement("div");
divMediaPlayback.id = "mediaPlayback";

// main functions
function ShowMediaList() {
    console.log("ShowMediaList():\n");

    let list = document.createElement("ul");
    // Traversing through media list. For each media, adding it to the list element
    for (i = 0; i < mediaList.length; i++) {
        let id = mediaList[i];

        // create list element
        let listElement = document.createElement("li");
        listElement.innerText = id;
        listElement.onclick = onClickMediaList;

        list.append(listElement);

        return "success"; // test : to verify list element
    }

    divMediaList.append(list);
}

function LoadMedia(mediaID) {
    console.log("LoadMedia():\n", mediaID);

    let link = getVideoLink(mediaID);

    let iframe = document.createElement("iframe");
    iframe.width = 560;
    iframe.height = 315;
    iframe.title = "YouTube video player";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowfullscreen = true;
    iframe.src = link;

    divMediaPlayback.innerHTML = "";
    divMediaPlayback.append(iframe);

    return link; //test : to verify link
}

function PlayMedia(mediaID) {
    console.log("PlayMedia():\n", mediaID);
}

// Helper functions
function getVideoLink(mediaID) {
    return "https://www.youtube.com/embed/" + mediaID;
}
function getVideoThumnailLink(mediaID) {
    return "https://img.youtube.com/vi/" + mediaID + "/0.jpg";
}

// Events
function onClickMediaList(event) {
    let id = this.innerText;
    LoadMedia(id);
}

// RUN ---------------------

ShowMediaList();

module.exports = {
    ShowMediaList,
    LoadMedia
 }