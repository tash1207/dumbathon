// Object constructors

function Noun(noun, plural, example, personification) {
  this.noun = noun;
  this.plural = plural;
  this.example = example;
  this.personification = personification;
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
    new Noun("baby", "babies", "boys and girls", "baby geniuses"),
    new Noun("car", "cars", "Ferraris", "drivers"),
    new Noun("cat", "cats", "calicos", "cat enthusiasts"),
    new Noun("closet", "closets", "walk-in closets", "personal organizers"),
    new Noun("dog", "dogs", "corgis", "dog lovers"),
    new Noun("food", "food", "sandwiches", "eaters"),
    new Noun("music", "music", "choons", "musicians"),
    new Noun("skateboard", "skateboarding", "kickflips",
      "Tony Hawk and Chad Muska")
  ]

  return getRandom(nouns);
}

function generateCompany(noun) {
  var companies = [
    new Company(
      "Airbnb",
      `Airbnb for ${noun.plural.capitalize()} is a trusted community marketplace
      for people to list, discover, and book unique ${noun.plural} around the
      world. Whether ${noun.example} or any type of ${noun.noun}, for a night,
      week, or even a month, Airbnb for ${noun.plural.capitalize()} connects
      people to unique travel experiences.`),
    new Company(
      "Amazon",
      `Our vision is to be earth's most customer-centric company; to build a
      place where ${noun.personification} can come to find and discover any
      ${noun.noun} they might want to buy online.`),
    new Company(
      "Facebook",
      `Stay connected with ${noun.plural} and share the ${noun.example} that
      matter to you.`),
    new Company(
      "Github",
      `How ${noun.personification} build ${noun.plural}. Github for
      ${noun.plural.capitalize()} offers all of the distributed version control
      and source code management functionality of Git.`),
    new Company(
      "Google",
      `Organize the world's ${noun.plural} and make ${noun.example} universally
      accessible and useful.`),
    new Company(
      "Pandora",
      `Pandora for ${noun.plural.capitalize()} is based on the
      ${noun.noun.capitalize()} Genome Project, the most sophisticated
      taxonomy of ${noun.plural} ever collected. It represents over ten years
      of analysis by our trained team of ${noun.personification}, and spans
      everything from new ${noun.example} all the way back to old
      ${noun.example}.`),
    new Company(
      "Strava",
      `Strava for ${noun.plural.capitalize()} is the social network for
      athlete ${noun.plural}. We’re a global community of millions of
      ${noun.example} united by the camaraderie of sport.`),
    new Company(
      "Tinder",
      `Tinder for ${noun.plural.capitalize()} is a location-based social
      discovery service application that facilitates communication between
      mutually interested ${noun.personification}, allowing matched
      ${noun.personification} to chat.`),
    new Company(
      "Twitch",
      `Twitch for ${noun.plural.capitalize()} is a live streaming video
      platform which primarily focuses on ${noun.plural}, including
      ${noun.example}.`),
    new Company(
      "Uber",
      `${noun.plural.capitalize()} as reliable as running water, everywhere,
      for ${noun.personification}.`)
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
