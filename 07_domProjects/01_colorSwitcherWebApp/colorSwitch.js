// Select all elements with the class 'button'
const buttons = document.querySelectorAll('.button');

// Select the body element
const body = document.querySelector('body');

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

    // Change the background color of the body to the id of the clicked button
    // The event.target property refers to the clicked button
    // The id property of the event.target is used as the background color value
    body.style.backgroundColor = event.target.id;
  });
});
