var books = [
  {
    id: 1,
    title: "Aadujeevitham (Goat Days)",
    author: "Benyamin",
    price: 350,
    genre: "Contemporary Fiction",
    language: "Malayalam"
  },
  {
    id: 2,
    title: "Indulekha",
    author: "O. Chandu Menon",
    price: 250,
    genre: "Classic Novel",
    language: "Malayalam"
  },
  {
    id: 3,
    title: "The God of Small Things",
    author: "Arundhati Roy",
    price: 499,
    genre: "Literary Fiction",
    language: "English"
  },
  {
    id: 4,
    title: "Khasakkinte Ithihasam",
    author: "O. V. Vijayan",
    price: 320,
    genre: "Magical Realism",
    language: "Malayalam"
  },
  {
    id: 5,
    title: "Atomic Habits",
    author: "James Clear",
    price: 550,
    genre: "Self-Help",
    language: "English"
  },
  {
    id: 6,
    title: "Balyakalasakhi",
    author: "Vaikom Muhammad Basheer",
    price: 180,
    genre: "Romance/Tragedy",
    language: "Malayalam"
  },
  {
    id: 7,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 399,
    genre: "Classic Fiction",
    language: "English"
  },
  {
    id: 8,
    title: "Chemmeen",
    author: "Thakazhi Sivasankara Pillai",
    price: 290,
    genre: "Social Realism",
    language: "Malayalam"
  },
  {
    id: 9,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    price: 650,
    genre: "Non-Fiction/History",
    language: "English"
  },
  {
    id: 10,
    title: "Manjaveyil Maranangal",
    author: "Benyamin",
    price: 420, 
    genre: "Mystery/Thriller",
    language: "Malayalam"
  }
];



// display titles of all books.
console.log("titles of all books :");

var allTitles = books.map(b=>b.title);
console.log(allTitles);


// display malayalam book names
console.log("malayalam book names :");

var malayalamBook = books.filter(b=>b.language=="Malayalam").map(b=>b.title);
console.log(malayalamBook);


// display costly book title
console.log("costly book :");

var maxCost = books.reduce((b1,b2)=>b1.price>b2.price?b1:b2).price;  // here sort also possible. books.sort((b1,b2)=>b2.price-b1.price)[0].price
// console.log(maxCost);
var costlyBook = books.filter(b=>b.price==maxCost).map(b=>b.title);
console.log(costlyBook);


// display author names of all books
console.log("author names of all books :");

var authorNames = books.map(b=>b.author);
console.log(authorNames);


// display book titles whose price is less than 300
console.log("book titles whose price is less than 300 :");

var priceLtThreeHundred = books.filter(b=>b.price<300).map(b=>b.title);
console.log(priceLtThreeHundred);


// display all English language book titles
console.log("English language book titles :");

var englishBook = books.filter(b=>b.language=="English").map(b=>b.title);
console.log(englishBook);


// count the total number of books
console.log("count total number of books :");

console.log(books.length);


// display books belonging to the Self-Help genre
console.log("books belonging to the Self-Help genre :");

var selfHelp = books.filter(b=>b.genre=="Self-Help");
console.log(selfHelp);


// display titles of books written by Benyamin
console.log("titles of books written by Benyamin :");

var writtenBy = books.filter(b=>b.author=="Benyamin").map(b=>b.title);
console.log(writtenBy);


// display the total price of all books
console.log("total price of all books :");

var totalPrice = books.reduce((total,b)=>total+b.price,0)
console.log(totalPrice);


// display books in alphabetical order
console.log("books in alphabetical order :");

books.sort((b1,b2)=>b1.title.localeCompare(b2.title));    // localeCompare is a string method . it is used to get in alphabetical order.
console.log(books);     // here it is in ascending order


// display languages of books and it's count.  like {english :2 , malayalam :3} 
// language summary
console.log("language summary :");

var languageCount = {}

for(let b of books){

  let lang = b.language;

  if(lang in languageCount){
    languageCount[lang] += 1;
  }

  else{
    languageCount[lang] = 1;
  }

}

console.log(languageCount);


// language with most number of books
console.log("language with most number of books :");

var mostNumber = Object.entries(languageCount).reduce((l1,l2)=>l1[1]>l2[1]?l1:l2);
console.log(mostNumber);


// language with minimum number of books
console.log("language with minimum number of books :");

var leastNumber = Object.entries(languageCount).reduce((l1,l2)=>l1[1]<l2[1]?l1:l2);
console.log(leastNumber);






// array of object is javascript native data type
// list of dictionary is python native data type
// data transfer format is json
 



























