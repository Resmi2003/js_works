function searchData(){
    const country = document.getElementById('country').value;
    console.log(country);
    fetch(`https://restcountries.com/v3.1/name/{${country}?fullText=true`)
    .then(res=>res.json())
    .then(data=>displayData(data))
    .catch(err=>console.log(err));
}
  function displayData(data){

    

  }



    
