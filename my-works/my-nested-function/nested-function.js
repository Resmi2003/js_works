// nested function means inside a function there is another function.

function outerFunction(){

    function innerFunction(){
        console.log("inner function");  //3rd
        
    }

    innerFunction()  //2nd


}

outerFunction()    // here start // 1st

// outerFunction calls innerFunction




// 100 + 200

function outer(num1){

    function wrapper(num2){
        return num1+num2;
    }

    return wrapper;

}

console.log(outer(100)(200));



// difference b/w recursion and nested function is recursion calls that function itself and nested function calls its inner function.






// login username and password correct or not

function login(username){

    function checkPassword(password){
        return username=="admin" && password=="admin@123";
    }
    return checkPassword;
}

console.log(login("admin")("admin@123"));   // here output true




// == compares value, not compares type
// === compares value and type

var age = 23;
console.log(age=="23"); // == compares value, not compares type  // true output

console.log(age==="23"); // === compares value and type    // false output





// task using nested function
// greet(username)=> message(text)=> hello vipin goodmorning

function greet(username){

    function message(text){

        return `hello ${username} ${text}`.toUpperCase();   // if needs uppercase

    }

    return message;

}

console.log(greet("vipin")("goodmorning"));









