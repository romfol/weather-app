console.log('JS loaded');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const paragraph1 = document.querySelector('#paragraph-1');
const paragraph2 = document.querySelector('#paragraph-2');

weatherForm.addEventListener('submit', e => {
  e.preventDefault();
  paragraph1.textContent = 'Location: Loading...';
  const location = search.value;
  fetch(`http://localhost:3000/weather?address=${location}`).then(response => {
    response.json().then(data => {
      if (data.error) {
        paragraph2.textContent = '';
        return (paragraph1.textContent = 'Error: ' + data.error);
      }
      paragraph1.textContent = 'Location: ' + data.location;
      paragraph2.textContent = 'Forecast: ' + data.forecast;
    });
  });
});
