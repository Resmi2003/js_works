// function storeData
function storeData(){
const carName = document.getElementById('name').value;
const carPrice = document.getElementById('price').value;
const carKey = document.getElementById('key').value;
// console.log(carName);
// console.log(carPrice);
// console.log(carKey);

// to check empty field
if(carName === "" || carPrice === "" || carKey === ""){
    alert("Please enter all fields");
    return;
}

// to check key exists or not in local storage
if(localStorage.getItem(carKey)!==null){
    alert("Already exist");
}
else{
    const carData = {
        name : carName,
        price : carPrice
    };

    localStorage.setItem(carKey,JSON.stringify(carData));
    alert("Car details stored successfully");

    // clear input fields
    document.getElementById('name').value = "";
    document.getElementById('price').value = "";
    document.getElementById('key').value = "";
}

}

// function retrieveData
function retrieveData(){
    const key = document.getElementById('retrieveKey').value.trim();
    const result = document.getElementById('result');

    // clear previous result
    result.innerHTML = "";


    // empty key check
    if(key===""){
       result.innerHTML = `<p class="text-center text-red-600 font-semibold pt-[30px]">Please enter a key</p>`;
       return;
    }

    const data = localStorage.getItem(key);


    if(!data){
        result.innerHTML = `
        <p class="text-center text-red-600 font-semibold pt-[30px]">No data found</p>`;
        return;
    }

    const car = JSON.parse(data);

    
        result.innerHTML = `
  <div class="mt-6 mx-auto">
    <table class="w-full max-w-[320px] mx-auto text-center border-collapse">
      <thead class="bg-gray-200">
        <tr>
          <th class="border border-gray-400 px-4 py-2">Key</th>
          <th class="border border-gray-400 px-4 py-2">Car Name</th>
          <th class="border border-gray-400 px-4 py-2">Car Price</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="border border-gray-400 px-4 py-2">${key}</td>
          <td class="border border-gray-400 px-4 py-2">${car.name}</td>
          <td class="border border-gray-400 px-4 py-2">${car.price}</td>
        </tr>
      </tbody>
    </table>
  </div>
`;

document.getElementById('retrieveKey').value = "";
}

// function removeData
function removeData() {
  const key = document.getElementById('removeKey').value.trim();
  const result = document.getElementById('removeResult');

  result.innerHTML = "";

  if (key === "") {
    result.innerHTML = `
      <p class="text-red-600 font-semibold">
        Please enter a key
      </p>`;
    return;
  }

  if (!localStorage.getItem(key)) {
    result.innerHTML = `
      <p class="text-red-600 font-semibold">
        No record found for key ${key}
      </p>`;
    return;
  }

  localStorage.removeItem(key);

  result.innerHTML = `
    <p class="text-green-600 font-semibold">
      Record with key ${key} removed successfully
    </p>`;

    document.getElementById('removeKey').value = "";
}


// function clearAllRecords
function clearAllRecords() {
  // Always clear UI
  document.getElementById('result').innerHTML = '';
  document.getElementById('removeResult').innerHTML = '';

  document.getElementById('name').value = '';
  document.getElementById('price').value = '';
  document.getElementById('key').value = '';
  document.getElementById('retrieveKey').value = '';
  document.getElementById('removeKey').value = '';

  // Now check storage
  if (localStorage.length === 0) {
    alert('Nothing to clear');
    return;
  }

  const confirmClear = confirm('Are you sure you want to clear all records?');
  if (!confirmClear) return;

  localStorage.clear();
  alert('All records cleared successfully');
}