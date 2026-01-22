// just an example to show promise
// general promise

const count = false;

let constValue = new Promise(function (resolve,reject){
    if(count){
        resolve("There is a count value.");
    }
    else{
        reject("There is no count value");
    }
});

console.log(constValue);  // promise rejected is output. detailed description is given in output like why error happened. this is predefined in reject. because reject need to give why error happened.
// if we set const count = true, then output will be promise { 'There is a count value.' }
