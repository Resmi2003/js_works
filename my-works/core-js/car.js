function storeData(){
    const carName = document.getElementById('carName').value;
    const carPrice = document.getElementById('carPrice').value;
    const carKey = document.getElementById('carKey').value;
    console.log(carName);
    console.log(carPrice);
    console.log(carKey);

   const carDetails = {
        name : carName,
        price : carPrice,
    };

    if(carKey in localStorage){
        alert("already exists");
    }

    else if(!carName || !carPrice || !carKey){
        alert("please enter all fields");
    }

    else{
        localStorage.setItem(carKey,JSON.stringify(carDetails));
        alert("car details added successfully");
        document.getElementById('form').reset();  // to clear all fields when press ok in alert.=============================================
        // document.getElementById('carName').value = "";
        // form.reset();
    }
}





function retrieveData(){
    let retrieveKey = document.getElementById('retrieveKey').value;
    let car = JSON.parse(localStorage.getItem(retrieveKey));

    let result = document.getElementById('result');

    if(car===null){
        result.innerHTML = "No data found";
        return;
    }

    result.innerHTML = `

    <div class="w-[400px] h-[600px] border border-black border-5">
    <h1 class="font-bold text-2xl">Car Name</h1>
    <p>${car.name}</p>
    <h1 class="text-bold text-2xl">Car Price</h1>
    <p>${car.price}</p>
    <h1 class="text-bold text-2xl">Car key</h1>
    <p>${retrieveKey}</p>
    </div>

    `

    document.getElementById('retrieveKey').value = "";
}





function removeData(){
    let removeKey = document.getElementById('removeKey').value;
    let removeResult = document.getElementById('removeResult');
     
    

    if(removeKey===""){
        removeResult.innerHTML = "Please enter a key";
        return;

    }

    else if(!localStorage.getItem(removeKey)){
        removeResult.innerHTML = `key not found for ${removeKey}`;
        return;
    }

    else{
         localStorage.removeItem(removeKey);
         removeResult.innerHTML = `key ${removeKey} removed successfully`;
    }

    document.getElementById('removeKey').value = "";

}