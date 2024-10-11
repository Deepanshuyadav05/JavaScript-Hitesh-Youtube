const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")
    const guide = document.querySelector("#guide")
    if(height === "" || height <= 0 || isNaN(height)) {
        results.innerHTML = "Please enter a valid height"
    }
    else if(weight === "" || weight <= 0 || isNaN(weight)) {
        results.innerHTML = "Please enter a valid weight"
    }
    else{
        const bmi = (weight/((height * height) / 10000)).toFixed(2)
        results.innerHTML = `<span> BMI = ${bmi}</span>`
    }
    if(weight < 18.6){
        guide.innerHTML = "you are under weight"
    }
    else if(weight > 18.6  && weight < 24.9){
        guide.innerHTML = "you are in normal range"
    }
    else{
        guide.innerHTML = "you are overweight"
    }

})