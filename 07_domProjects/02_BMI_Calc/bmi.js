const select = (name) => document.querySelector(name);

const form = select("form");

form.addEventListener("submit", (event) => {
  
  // event.preventDefault() stops the form from submitting in the default manner, which allows custom validation and processing, if not done it will reload the page and not control over the program after an event occur like inputvalidation and control over it
  event.preventDefault();

  // we are taking values after an event so it is in this under block of code not the outside
  const height = Number(select("#height").value);

  // note here
  /* 
     parseInt('23gkd') will return 23.
parseInt('gkd23') will return NaN.
    
    Use Number() for Conversion: Instead of parseInt(), use Number() for converting input values to numbers. Number() behaves more predictably when the input is not strictly a number.

Strict Validation: Perform strict validation to ensure that the input values are valid numbers and handle cases where the input might be an empty string or contain non-numeric characters. */

  const weight = Number(select("#weight").value);
  const results = select("#results");

  // input validation check
  if (height === " " || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
    results.style.color = "red";
    return;
  } else if (weight === " " || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
    results.style.color = "red";

    return;
  } else {
    results.style.color = "black";
    // bmi calculation
    const bmi = (weight / (height ** 2 / 10000)).toFixed(2);

    // Determine BMI category
    let bmiCategory = "";
    if (bmi < 18.6) {
      bmiCategory = "Underweight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      bmiCategory = "Normal Weight";
    } else {
      bmiCategory = "Overweight";
    }

    // Display result with personal comment
    // Display result with appropriate message
    if (bmiCategory === "Overweight") {
      results.innerHTML = `
            <p>Your BMI is: <span>${bmi}</span></p>
            <p>BMI Category: <strong>${bmiCategory}</strong></p>
            <p><em>Your health matters! Maintain a balanced diet and exercise regularly.</em></p>
            `;
    } else {
      results.innerHTML = `
            <p>Your BMI is: <span>${bmi}</span></p>
            <p>BMI Category: <strong>${bmiCategory}</strong></p>
            <p>Great job maintaining your BMI!</p>
            `;
    }
  }
});
