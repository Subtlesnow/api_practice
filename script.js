var searchForm = document.querySelector('form');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var searchTerm = document.querySelector('input').value

  var toLower = searchTerm.toLowerCase()

  $.get(`http://pokeapi.co/api/v2/pokemon/${toLower}`, function(data) {
    // console.log(data.stats[0].stat.name)
    // console.log(data.abilities[0].ability.name);
    var name = data.forms[0].name;
    document.querySelector('#pokeName').innerText = name

    for(let i = 0; i < data.abilities.length; i++) {
      // console.log(data.abilities[i].ability.name)
      $('#pokeAbilities').append("<li>"+ data.abilities[i].ability.name+ "</li>")
    }

    //  let pokeStat = ""
    for(let i = 0; i < data.stats.length; i++) {
      console.log(data.stats[i].stat.name)
      $('#pokeStats').append("<li>" + data.stats[i].stat.name + "</li>")
    }


  })
})
