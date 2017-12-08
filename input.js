var button = document.querySelector("button");
var input = document.querySelector("input");

button.addEventListener('click', function () {
  let inputValue = input.value;
  fetchApi('https://www.reddit.com/r/' + inputValue + '.json');
});
