// Selects all elements with the class 'button'
const buttons = document.querySelectorAll('.button');

// Selects the body element
const body = document.querySelector('body');

const home = document.getElementById('home');

// Select the instruction element
const instruction = document.getElementById('instruction');

// Object to map color IDs to motivational quotes
const aboutColor = {
  grey: "Explore the elegance of grey!",
  white: "Embrace simplicity with white!",
  blue: "Dive into the serenity of blue!",
  yellow: "Feel the warmth of yellow!",
  green: "Enjoy the freshness of green!"
};

// Loop through each button
buttons.forEach((btn) => {
  // Log the button to the console for debugging purposes
  console.log(btn);

  // Add a click event listener to each button
  btn.addEventListener('click', (event) => {
    // Log the event and event target for debugging
    // Uncomment these lines if you want to see the event details in the console
    // console.log(event);
    // console.log(event.target);

    // Changes the background color of the body to the id of the clicked button
    // The event.target property refers to the clicked button
    // The id property of the event.target is used as the background color value


    // Update the background color of the body based on the clicked button's color
    body.style.backgroundColor = event.target.id;

    //changes the font color into black after an event
    if(event.target.id === "yellow" || event.target.id === "white"){
      body.style.color = "black";
      //changes the home nav bar font color into black after an event
      home.style.color = "black"
    }
    else{
      body.style.color = "white";
      home.style.color = "white";

    }

    // Update the instruction text and motivational quote based on the clicked color
    instruction.textContent = aboutColor[event.target.id];


  });
});
