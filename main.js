function capitalize(word) {
  word = word || this;
  return word.charAt(0).toUpperCase() + word.substr(1);
}

String.prototype.capitalize = capitalize;

function generateProject() {

  var projectTitle = document.querySelector('h1');

  var companies = ['Facebook', 'Github', 'Google', 'Pandora', 'Tinder', 'Twitch', 'Uber']
  var nouns = ['babies', 'cars', 'cats', 'dogs', 'food', 'gnar', 'music', 'skateboarding']

  var getRandom = function(list) {
    return list[Math.floor((Math.random()*list.length))];
  };

  var company = getRandom(companies);
  var noun = getRandom(nouns);

  projectTitle.textContent = `${company} for ${noun.capitalize()}`;
}

generateProject();
