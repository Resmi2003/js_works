// function calculateBMI
function calculateBMI(){

    // get values directly from inputs
    let userAge = document.getElementById('age').value;
    // console.log(userAge);
    let userWeight = document.getElementById('weight').value;
    let userHeight = document.getElementById('height').value;

    // get selected gender
    let selectedGender = document.getElementsByName('gender');
    let gender = "";
    for(let i=0;i<selectedGender.length;i++){
        if(selectedGender[i].checked){
            gender = selectedGender[i].value;
            break;
        }
    }

    // validation : check all fields are filled
    if(!userAge || !userWeight || !userHeight || !gender){
        alert("Please fill in all fields and select your gender!");
        return;
    }

    // check for realistic values
    if(userAge<=0 || userWeight<=0 || userHeight<=0){
        alert("Please enter realistic values for age, weight and height!");
        return;
    }

    // calculate BMI
    // BMI = weight in kg / height in meter^2
    // height in meter = height in cm / 100
    let heightInMeter = userHeight / 100;
    let bmi = userWeight / (heightInMeter**2);
    bmi = bmi.toFixed(2); // round to 2 decimals

    // determine bmi category and advice
    let category = "";
    let advice = "";
    let result = document.getElementById('result');
    if(bmi<18.5){
        category = "Underweight";
        result.style.color = "blue";
        advice = "Eat nutritious food to gain weight.";
    }
    else if(bmi<=24.9){
        category = "Normal";
        result.style.color = "green";
        advice = "Great! Maintain your healthy lifestyle.";
    }
    else if(bmi<=29.9){
        category = "Overweight";
        result.style.color = "orange";
        advice = "Exercise regularly and eat balanced.";

    }
    else if(bmi<=34.9){
        category = "Obese";
        result.style.color = "red";
        advice = "Consult a doctor for a plan.";
    }
    else if(bmi<=39.9){
        category = "Severely Obese";
        result.style.color = "darkred";
        advice = "Medical guidance recommended.";
    }
    else{
        category = "Morbidly Obese";
        result.style.color = "darkred";
        advice = "Seek immediate medical help."
    }

    // show result
    result.innerHTML = `
       Your BMI is ${bmi} <br>
       ${category} <br>
       ${advice}
    `;

    }


    // reset BMI
    function resetBMI(){
        document.getElementById('bmiForm').reset();
        document.getElementById('result').innerText = "";
    }

