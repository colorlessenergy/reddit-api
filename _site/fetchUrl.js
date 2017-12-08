var container = document.querySelector('div');


function fetchApi(source) {
  fetch(source)
  .then(function(response) {
    // as far as i know this parse the text into json
    return response.json();
  })
  .then(function(json) {
    json.data.children.forEach(function (data) {
      var img = document.createElement("img");
      var div = document.createElement("div");
      linkToPost({
        source: data.data.permalink,
        title: data.data.title
      }, div);
      if (data.data.preview) {
        linkToSource({
          img: data.data.preview.images[0].source.url
        }, div);
        img.src = data.data.preview.images[0].source.url;
        div.appendChild(img);
      } else {
        linkToSource({
          img: 'close.jpg'
        }, div);
        img.src = 'close.jpg'
        div.appendChild(img);
      }
      container.appendChild(div);
    })
  });
}

function linkToPost(links, div) {
  console.log(links)
    var text = document.createElement("p");
    var linkToPost = document.createElement("a");
    linkToPost.href = "https://www.reddit.com" + links.source;
    linkToPost.textContent = links.title;
    text.appendChild(linkToPost);
    div.appendChild(linkToPost);
}

function linkToSource(link, div) {
    var text = document.createElement("p");
    var hyperlink = document.createElement("a");
    hyperlink.href = link.img;
    hyperlink.textContent = "full image";
    text.appendChild(hyperlink);
    div.appendChild(text);
}
