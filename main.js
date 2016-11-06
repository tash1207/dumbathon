// Object constructors

function Noun(noun, plural, example) {
  this.noun = noun;
  this.plural = plural;
  this.example = example;
}

function Company(name, mission) {
  this.name = name;
  this.mission = mission;
}

function Project(company, noun) {
  this.title = `${company.name} for ${noun.plural.capitalize()}`
  this.description = `${company.mission}`
}

// Helper methods

function capitalize(word) {
  word = word || this;
  return word.charAt(0).toUpperCase() + word.substr(1);
}

String.prototype.capitalize = capitalize;

function getRandom(list) {
  return list[Math.floor((Math.random()*list.length))];
};

// Main generating methods

function generateNoun() {
  var nouns = [
    new Noun("baby", "babies", "boys and girls"),
    new Noun("car", "cars", "Ferraris"),
    new Noun("cat", "cats", "calicos"),
    new Noun("dog", "dogs", "corgis"),
    new Noun("food", "food", "sandwiches"),
    new Noun("music", "music", "choons"),
    new Noun("skateboarding", "skateboarding", "kickflips")
  ]

  return getRandom(nouns);
}

function generateCompany(noun) {
  var companies = [
    new Company(
      "Amazon",
      `Our vision is to be earth's most customer-centric company; to build a
      place where people can come to find and discover any ${noun.noun} they
      might want to buy online.`),
    new Company(
      "Facebook",
      `Stay connected with ${noun.plural}.`),
    new Company(
      "Github",
      `How people build ${noun.plural}.`),
    new Company(
      "Google",
      `Organize the world's ${noun.plural}.`),
    new Company(
      "Pandora",
      `Pandora for ${noun.plural.capitalize()} is the ${noun.noun} genome
      project providing on-demand ${noun.example} for everyone.`),
    new Company(
      "Strava",
      `Strava for ${noun.plural.capitalize()} is the social network for
      athlete ${noun.plural}. We’re a global community of millions of
      ${noun.example} united by the camaraderie of sport.`),
    new Company(
      "Tinder",
      `Tinder for ${noun.plural.capitalize()} is a location-based social
      discovery service application that facilitates communication between
      mutually interested ${noun.plural}, allowing matched ${noun.plural}
      to chat.`),
    new Company(
      "Twitch",
      `Twitch for ${noun.plural.capitalize()} is a live streaming video
      platform which primarily focuses on ${noun.plural}, including
      ${noun.example}.`),
    new Company(
      "Uber",
      `${noun.plural.capitalize()} as reliable as running water, everywhere,
      for everyone.`
      )
  ]

  return getRandom(companies);
}

function generateProject() {
  var noun = generateNoun();
  var company = generateCompany(noun);
  var project = new Project(company, noun);

  var projectTitle = document.querySelector('.projectTitle');
  var projectDescription = document.querySelector('.projectDescription');
  projectTitle.textContent = project.title;
  projectDescription.textContent = project.description;
}

generateProject();
