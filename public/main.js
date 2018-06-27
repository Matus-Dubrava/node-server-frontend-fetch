const form = document.querySelector('form');
const input = document.querySelector('input[type=number]');
const h1 = document.querySelector('h1');

form.addEventListener('submit', event => {
  event.preventDefault();

  const userId = input.value.trim();

  console.log('fetching');
  fetch(`/${userId}`)
    .then(v => v.json())
    .then(data => {
      h1.textContent = data.name;
    });
});
