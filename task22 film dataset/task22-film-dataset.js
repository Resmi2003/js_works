const films = [
  {
    id: 1,
    name: "Inception",
    category: "Sci-Fi",
    language: "English",
    yearOfRelease: 2010,
    status: "Hit",
    actors: [
      { name: "Leonardo DiCaprio", role: "Cobb" },
      { name: "Joseph Gordon-Levitt", role: "Arthur" }
    ]
  },
  {
    id: 2,
    name: "Titanic",
    category: "Romance",
    language: "English",
    yearOfRelease: 1997,
    status: "Hit",
    actors: [
      { name: "Leonardo DiCaprio", role: "Jack" },
      { name: "Kate Winslet", role: "Rose" }
    ]
  },
  {
    id: 3,
    name: "Avatar",
    category: "Fantasy",
    language: "English",
    yearOfRelease: 2009,
    status: "Hit",
    actors: [
      { name: "Sam Worthington", role: "Jake" },
      { name: "Zoe Saldana", role: "Neytiri" }
    ]
  },
  {
    id: 4,
    name: "Joker",
    category: "Drama",
    language: "English",
    yearOfRelease: 2019,
    status: "Hit",
    actors: [
      { name: "Joaquin Phoenix", role: "Joker" }
    ]
  },
  {
    id: 5,
    name: "Interstellar",
    category: "Sci-Fi",
    language: "English",
    yearOfRelease: 2014,
    status: "Hit",
    actors: [
      { name: "Matthew McConaughey", role: "Cooper" },
      { name: "Anne Hathaway", role: "Brand" }
    ]
  },

  {
    id: 6,
    name: "Bahubali",
    category: "Historical",
    language: "Telugu",
    yearOfRelease: 2015,
    status: "Hit",
    actors: [
      { name: "Prabhas", role: "Bahubali" },
      { name: "Rana Daggubati", role: "Bhallaladeva" }
    ]
  },
  {
    id: 7,
    name: "RRR",
    category: "Action",
    language: "Telugu",
    yearOfRelease: 2022,
    status: "Hit",
    actors: [
      { name: "Ram Charan", role: "Alluri" },
      { name: "Jr NTR", role: "Bheem" }
    ]
  },
  {
    id: 8,
    name: "KGF",
    category: "Action",
    language: "Kannada",
    yearOfRelease: 2018,
    status: "Hit",
    actors: [
      { name: "Yash", role: "Rocky" }
    ]
  },
  {
    id: 9,
    name: "Vikram",
    category: "Action",
    language: "Tamil",
    yearOfRelease: 2022,
    status: "Hit",
    actors: [
      { name: "Kamal Haasan", role: "Vikram" },
      { name: "Vijay Sethupathi", role: "Santhanam" }
    ]
  },
  {
    id: 10,
    name: "Master",
    category: "Action",
    language: "Tamil",
    yearOfRelease: 2021,
    status: "Hit",
    actors: [
      { name: "Vijay", role: "JD" },
      { name: "Vijay Sethupathi", role: "Bhavani" }
    ]
  },

  {
    id: 11,
    name: "Drishyam",
    category: "Thriller",
    language: "Malayalam",
    yearOfRelease: 2013,
    status: "Hit",
    actors: [
      { name: "Mohanlal", role: "Georgekutty" }
    ]
  },
  {
    id: 12,
    name: "Premam",
    category: "Romance",
    language: "Malayalam",
    yearOfRelease: 2015,
    status: "Hit",
    actors: [
      { name: "Nivin Pauly", role: "George" },
      { name: "Sai Pallavi", role: "Malar" }
    ]
  },
  {
    id: 13,
    name: "Bangalore Days",
    category: "Drama",
    language: "Malayalam",
    yearOfRelease: 2014,
    status: "Hit",
    actors: [
      { name: "Dulquer Salmaan", role: "Arjun" },
      { name: "Nivin Pauly", role: "Kuttan" }
    ]
  },
  {
    id: 14,
    name: "Charlie",
    category: "Drama",
    language: "Malayalam",
    yearOfRelease: 2015,
    status: "Hit",
    actors: [
      { name: "Dulquer Salmaan", role: "Charlie" }
    ]
  },
  {
    id: 15,
    name: "Ustad Hotel",
    category: "Drama",
    language: "Malayalam",
    yearOfRelease: 2012,
    status: "Hit",
    actors: [
      { name: "Dulquer Salmaan", role: "Faizi" },
      { name: "Thilakan", role: "Kareemikka" }
    ]
  },

  {
    id: 16,
    name: "Dangal",
    category: "Sports",
    language: "Hindi",
    yearOfRelease: 2016,
    status: "Hit",
    actors: [
      { name: "Aamir Khan", role: "Mahavir" }
    ]
  },
  {
    id: 17,
    name: "3 Idiots",
    category: "Comedy",
    language: "Hindi",
    yearOfRelease: 2009,
    status: "Hit",
    actors: [
      { name: "Aamir Khan", role: "Rancho" }
    ]
  },
  {
    id: 18,
    name: "PK",
    category: "Comedy",
    language: "Hindi",
    yearOfRelease: 2014,
    status: "Hit",
    actors: [
      { name: "Aamir Khan", role: "PK" }
    ]
  },
  {
    id: 19,
    name: "Sholay",
    category: "Action",
    language: "Hindi",
    yearOfRelease: 1975,
    status: "Hit",
    actors: [
      { name: "Amitabh Bachchan", role: "Jai" },
      { name: "Dharmendra", role: "Veeru" }
    ]
  },
  {
    id: 20,
    name: "Lagaan",
    category: "Drama",
    language: "Hindi",
    yearOfRelease: 2001,
    status: "Hit",
    actors: [
      { name: "Aamir Khan", role: "Bhuvan" }
    ]
  },

  {
    id: 21,
    name: "Spider-Man",
    category: "Superhero",
    language: "English",
    yearOfRelease: 2002,
    status: "Hit",
    actors: [
      { name: "Tobey Maguire", role: "Peter Parker" }
    ]
  },
  {
    id: 22,
    name: "Iron Man",
    category: "Superhero",
    language: "English",
    yearOfRelease: 2008,
    status: "Hit",
    actors: [
      { name: "Robert Downey Jr.", role: "Tony Stark" }
    ]
  },
  {
    id: 23,
    name: "Avengers",
    category: "Superhero",
    language: "English",
    yearOfRelease: 2012,
    status: "Hit",
    actors: [
      { name: "Chris Evans", role: "Captain America" },
      { name: "Robert Downey Jr.", role: "Iron Man" }
    ]
  },
  {
    id: 24,
    name: "Batman Begins",
    category: "Action",
    language: "English",
    yearOfRelease: 2005,
    status: "Hit",
    actors: [
      { name: "Christian Bale", role: "Batman" }
    ]
  },
  {
    id: 25,
    name: "The Dark Knight",
    category: "Action",
    language: "English",
    yearOfRelease: 2008,
    status: "Hit",
    actors: [
      { name: "Christian Bale", role: "Batman" },
      { name: "Heath Ledger", role: "Joker" }
    ]
  },

];

// console.log(films);



// Q1. Create a new array that contains only the film name and year of release for each film.
// 	Output format: { name, yearOfRelease }
console.log("Create a new array that contains only the film name and year of release for each film :");

var filmNameAndYearOfRelease = films.map(f=>({name:f.name,yearOfRelease:f.yearOfRelease}));
console.log(filmNameAndYearOfRelease);


// Q2. Add a new property called isRecent to each film.
// Set it to true if the film was released after 2015, otherwise false.
console.log("Add a new property called isRecent to each film :");

var filmsWithIsRecent = films.map(f=>({...f,isRecent:f.yearOfRelease>2015}));    // ...f keeps all existing film data.
console.log(filmsWithIsRecent);


// Q3. Create a single array containing the names of all actors from every film.
console.log("Create a single array containing the names of all actors from every film :");

var allActorNames = films.flatMap(f=>f.actors.map(a => a.name));  // flatMap() joins all actor-name arrays into one single array. that is, flatMap() is used when each element returns an array and we want a single combined array as output.
console.log(allActorNames);


// Q4. Get all films that belong to the Action category.
console.log("Get all films that belong to the Action category :");

var actionCategory = films.filter(f=>f.category=="Action");
console.log(actionCategory);


// Q5. Find all films that were released before 2010.
console.log(" Find all films that were released before 2010 :");

var releasedBefore2010 = films.filter(f=>f.yearOfRelease<2010);
console.log(releasedBefore2010);


// Q6. Get all Malayalam films that are marked as Hit.
console.log("Get all Malayalam films that are marked as Hit :");

var malayalamHit = films.filter(f=>f.language=="Malayalam" && f.status=="Hit");
console.log(malayalamHit);


// Q7. Find all films that have more than one actor.
console.log("Find all films that have more than one actor :");

var moreThanOneActor = films.filter(f=>f.actors.length>1);
console.log(moreThanOneActor);


// Q8. Create an object that shows the total number of films per language.
// 
// Example output:
// 
// 	{
//  		 English: 10,
//   		 Malayalam: 5,
//   		 Hindi: 7
// 	}
console.log("Create an object that shows the total number of films per language :");

var filmsPerLanguage = films.reduce((acc, f) => {acc[f.language] = (acc[f.language] || 0) + 1;  // acc is accumulator, ie the object that stores counts, initially {}. f is current film object in the array.
  return acc;
}, {});
console.log(filmsPerLanguage);


// Q9. Find the oldest film based on the year of release.
console.log("Find the oldest film based on the year of release :");

var oldestFilm = films.reduce((oldest, f) => f.yearOfRelease < oldest.yearOfRelease ? f : oldest);
console.log(oldestFilm);


// Q10. Count how many films are Hits and how many are Flops.
console.log(" Count how many films are Hits and how many are Flops :");

var hitFlopCount = films.reduce((acc, f) => {acc[f.status] = (acc[f.status] || 0) + 1;
  return acc;
}, {});
console.log(hitFlopCount);


// Q11. Arrange the films from newest to oldest based on the release year.
console.log("Arrange the films from newest to oldest based on the release year :");

var filmsNewestToOldest = [...films].sort((f1,f2) => f2.yearOfRelease-f1.yearOfRelease);
console.log(filmsNewestToOldest);


// Q12. Arrange the films in alphabetical order by film name.
console.log("Arrange the films in alphabetical order by film name :");

var alphabeticalOrderByFilmName = [...films].sort((f1,f2)=>f1.name.localeCompare(f2.name));
console.log(alphabeticalOrderByFilmName);


// Q13. Check whether at least one film was released after 2020.
console.log("Check whether at least one film was released after 2020 :");

var isExist = films.some(f=>f.yearOfRelease>2020);
console.log(isExist);


// Q14. Find the first Malayalam film in the dataset.
console.log("Find the first Malayalam film in the dataset :");

var firstMalayalamFilm = films.find(f=>f.language=="Malayalam");
console.log(firstMalayalamFilm);


// Q15. Check whether every film in the dataset has at least one actor.
console.log(" Check whether every film in the dataset has at least one actor :");

var isOneActorExist = films.every(f=>f.actors.length>=1);
console.log(isOneActorExist);


