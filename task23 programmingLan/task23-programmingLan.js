const programmingLanguages = [
    {
      name: "JavaScript",
      yearCreated: 1995,
      paradigms: ["Imperative", "Functional"],
      popular: true,
      creator: "Brendan Eich",
    },
    {
      name: "Python",
      yearCreated: 1991,
      paradigms: ["Imperative", "Object-oriented", "Functional"],
      popular: true,
      creator: "Guido van Rossum",
    },
    {
      name: "Java",
      yearCreated: 1995,
      paradigms: ["Object-oriented", "Imperative"],
      popular: true,
      creator: "James Gosling",
    },
    {
      name: "C++",
      yearCreated: 1983,
      paradigms: ["Object-oriented", "Procedural"],
      popular: true,
      creator: "Bjarne Stroustrup",
    },
    {
      name: "Ruby",
      yearCreated: 1995,
      paradigms: ["Object-oriented", "Imperative"],
      popular: true,
      creator: "Yukihiro Matsumoto",
    },
  ];



 //  Q1: Print the names of all programming languages in the array.
 console.log("Print the names of all programming languages in the array :");

var allNames = programmingLanguages.map(p=>p.name);
console.log(allNames);

 
 //  Q2: Print the total number of programming languages in the array.
 console.log("Print the total number of programming languages in the array :");

 var total = programmingLanguages.length;
 console.log(total);
 
 
 //  Q3: Print the languages that are popular.
 console.log("Print the languages that are popular :");

 var popular = programmingLanguages.filter(p=>p.popular);
 console.log(popular);
 
 
 //  Q4: Print the names of the languages created after the year 2000.
 console.log("Print the names of the languages created after the year 2000 :");

 var afterYear2000 = programmingLanguages.filter(p=>p.yearCreated>2000).map(p=>p.name);
 console.log(afterYear2000);
 
 
 //  Q5: Print the languages that are both functional and object-oriented.
 console.log("Print the languages that are both functional and object-oriented :");

 var functionalAndObjectOriented = programmingLanguages.filter(p=>p.paradigms.includes("Functional") && p.paradigms.includes("Object-oriented"));
 console.log(functionalAndObjectOriented);
 
 
 //  Q6: Print the names of the creators of the languages.
 console.log("Print the names of the creators of the languages :");

 var creators = programmingLanguages.map(p=>p.creator);
 console.log(creators);
 
 
 //  Q7: Print the names of languages that have "Script" in their name.-+
 console.log("Print the names of languages that have Script in their name :");

 var script = programmingLanguages.filter(p=>p.name.includes("Script")).map(p=>p.name);
 console.log(script);
 
 
 //  Q8: Print the names of programming languages that were created before the year 1995.
 console.log("Print the names of programming languages that were created before the year 1995 :");

 var createdBefore1995 = programmingLanguages.filter(p=>p.yearCreated<1995).map(p=>p.name);
 console.log(createdBefore1995);
 
 
 //  Q9: Print the names of programming languages that support more than two paradigms.
 console.log("Print the names of programming languages that support more than two paradigms :");

 var moreThan2Paradigms = programmingLanguages.filter(p=>p.paradigms.length>2).map(p=>p.name);
 console.log(moreThan2Paradigms);
 
 
 //  Q10: Print the oldest programming language (language with the earliest yearCreated) in the array.
 console.log("Print the oldest programming language (language with the earliest yearCreated) in the array :");

var oldestLanguage = programmingLanguages.reduce((oldest,current)=>current.yearCreated<oldest.yearCreated?current:oldest);
console.log(oldestLanguage);



