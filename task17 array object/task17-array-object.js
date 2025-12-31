var movies = [
  {
    id: 1,
    title: "Drishyam",
    director: "Jeethu Joseph",
    price: 250,
    genre: "Thriller",
    language: "Malayalam"
  },
  {
    id: 2,
    title: "Premam",
    director: "Alphonse Puthren",
    price: 200,
    genre: "Romance",
    language: "Malayalam"
  },
  {
    id: 3,
    title: "Inception",
    director: "Christopher Nolan",
    price: 450,
    genre: "Science Fiction",
    language: "English"
  },
  {
    id: 4,
    title: "Interstellar",
    director: "Christopher Nolan",
    price: 500,
    genre: "Sci-Fi/Drama",
    language: "English"
  },
  {
    id: 5,
    title: "Bangalore Days",
    director: "Anjali Menon",
    price: 300,
    genre: "Drama",
    language: "Malayalam"
  },
  {
    id: 6,
    title: "Lucifer",
    director: "Prithviraj Sukumaran",
    price: 350,
    genre: "Action/Thriller",
    language: "Malayalam"
  },
  {
    id: 7,
    title: "Charlie",
    director: "Martin Prakkat",
    price: 280,
    genre: "Romance/Drama",
    language: "Malayalam"
  },
  {
    id: 8,
    title: "Joker",
    director: "Todd Phillips",
    price: 420,
    genre: "Psychological Thriller",
    language: "English"
  },
  {
    id: 9,
    title: "Avengers: Endgame",
    director: "Anthony Russo, Joe Russo",
    price: 550,
    genre: "Action/Fantasy",
    language: "English"
  },
  {
    id: 10,
    title: "KGF: Chapter 1",
    director: "Prashanth Neel",
    price: 380,
    genre: "Action",
    language: "Kannada"
  },
  {
    id: 11,
    title: "Bahubali: The Beginning",
    director: "S. S. Rajamouli",
    price: 480,
    genre: "Epic/Fantasy",
    language: "Telugu"
  },
  {
    id: 12,
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    price: 400,
    genre: "Drama",
    language: "English"
  },
  {
    id: 13,
    title: "Titanic",
    director: "James Cameron",
    price: 370,
    genre: "Romance/Drama",
    language: "English"
  },
  {
    id: 14,
    title: "Uyare",
    director: "Manu Ashokan",
    price: 260,
    genre: "Drama",
    language: "Malayalam"
  },
  {
    id: 15,
    title: "Minnal Murali",
    director: "Basil Joseph",
    price: 320,
    genre: "Superhero/Fantasy",
    language: "Malayalam"
  }
];



// 1. Display all movie titles using map().
console.log("Display all movie titles using map() :");

var allMovieTitles = movies.map(m=>m.title);
console.log(allMovieTitles);


// 2. Find all movies where the language is "Malayalam".
console.log("Find all movies where the language is Malayalam :");

var languageMalayalam = movies.filter(m=>m.language=="Malayalam");
console.log(languageMalayalam);


// 3. Find all movies with a price greater than 300.
console.log("Find all movies with a price greater than 300 :");

var priceGtThreeHundred = movies.filter(m=>m.price>300);
console.log(priceGtThreeHundred);


// 4. Display the title and director of all English movies.
console.log("Display the title and director of all English movies :");

var titleAndDirectorOfEnglish = movies.filter(m => m.language == "English").map(m => ({
    title: m.title,
    director: m.director
  }));

console.log(titleAndDirectorOfEnglish);

// 5. Find the total price of all movies using reduce().
console.log("Find the total price of all movies using reduce() :");

var totalPrice = movies.reduce((total,m)=>total+m.price,0);
console.log(totalPrice);


// 6. Find the average price of all movies.
console.log("Find the average price of all movies :");

var averagePrice = totalPrice/movies.length;
console.log(averagePrice);


// 7. Find the movie with the highest price.
console.log("Find the movie with the highest price :");

var highestPrice = movies.reduce((m1,m2)=>m1.price>m2.price?m1:m2);
// console.log(highestPrice);
var highestPriceMovie = movies.filter(m=>m.price==highestPrice.price);
console.log(highestPriceMovie);


// 8. Find the movie with the lowest price.
console.log("Find the movie with the lowest price :");

var lowestPrice = movies.reduce((m1,m2)=>m1.price<m2.price?m1:m2);
// console.log(lowestPrice);
var lowestPriceMovie = movies.filter(m=>m.price==lowestPrice.price);
console.log(lowestPriceMovie);


// 9. Find all movies directed by Christopher Nolan.
console.log("Find all movies directed by Christopher Nolan :");

var directedBy = movies.filter(m=>m.director=="Christopher Nolan");
console.log(directedBy);


// 10. Count how many movies are in English and how many are in Malayalam.
console.log("Count how many movies are in English and how many are in Malayalam :");

var count = {}

for(let m of movies){

    let lang = m.language;

    if(lang=="English" || lang=="Malayalam"){

    if(lang in count){
        count[lang] += 1;
    }

    else{
        count[lang] = 1;
    }
}

}

console.log(count);


// 11. Sort the movies by price in ascending order.
console.log("Sort the movies by price in ascending order :");

var moviesByPriceAsc = [...movies].sort((m1, m2) => m1.price - m2.price);
console.log(moviesByPriceAsc);


// 12. Sort the movies by title in alphabetical order.
console.log("Sort the movies by title in alphabetical order :");

var moviesByTitleAsc = [...movies].sort((m1, m2)=>m1.title.localeCompare(m2.title));
console.log(moviesByTitleAsc);


// 13. Find the first movie that belongs to the genre "Thriller".
console.log("Find the first movie that belongs to the genre Thriller :");
// find() returns only the first matching object.
 
var firstMovieBelongsThriller = movies.find(m=>m.genre.includes("Thriller"));
console.log(firstMovieBelongsThriller);


// 14. Create a new array containing only movie titles and prices.
console.log("Create a new array containing only movie titles and prices :");

var titlePrice = movies.map(m => ({      // ({...}) for each movie object, returning a new object.
    title: m.title,
    price: m.price
}));

console.log(titlePrice);


// 15. Check whether any movie price is below 200 (use some()).
console.log(" Check whether any movie price is below 200 (use some()) :");
// some() checks if atleast one element satisfies the condition. always returns boolean(true or false).

var isBelow200 = movies.some(m => m.price < 200);
console.log(isBelow200);


