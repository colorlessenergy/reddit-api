var form = document.querySelector("form");
var input = document.querySelector("input");

form.addEventListener('submit', function (event) {
  event.preventDefault();
  let inputValue = input.value;
  fetchApi('https://www.reddit.com/r/' + inputValue + '.json');
});
