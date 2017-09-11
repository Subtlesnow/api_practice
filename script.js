var searchForm = document.querySelector('form');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var searchTerm = document.querySelector('input').value
  console.log(searchTerm)
  var toLower = searchTerm.toLowerCase()
  $.get(`http://pokeapi.co/api/v2/pokemon/${toLower}`, function(data) {
  console.log(data);
  })
})
