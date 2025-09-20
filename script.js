let thumbNails = document.querySelectorAll(".thumbnails");
let title = document.querySelectorAll(".title");
let channelName = document.querySelectorAll(".channel p");
let channelImg = document.querySelectorAll(".channel img");

fetch("json.json")
  .then((res) => res.json())
  .then((jsonObj) => {
    for (let i = 0; i < jsonObj.length; i++){
      thumbNails[i].src = jsonObj[i].thumbnails
      title[i].innerHTML = jsonObj[i].title
      channelName[i].innerHTML = jsonObj[i].channelName
      channelImg[i].src = jsonObj[i].channelImages
    }
  });
