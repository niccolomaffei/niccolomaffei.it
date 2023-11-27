// var params = {
//   name : document.getElementById("name"),
//   email : document.getElementById("email").value,
//   subject : document.getElementById("subject").value,
//   message : document.getElementById("message").value,
// };

// const serviceID = "service_a8d1bxp";
// const templateID = "template_ce99ea5";

// emailjs.send(serviceID, templateID, params)
//   .then(function(response) {
//      console.log('SUCCESS!', response.status, response.text);
//   }, function(error) {
//      console.log('FAILED...', error);
//   });

// document
//   .getElementById("contact-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     const serviceID = "service_a8d1bxp";
//     const templateID = "template_ce99ea5";

//     emailjs.sendForm(serviceID, templateID, this).then(
//       (response) => {
//         console.log("SUCCESS!", response.status, response.text);
//         alert("SUCCESS!");
//       },
//       (error) => {
//         console.log("FAILED...", error);
//         alert("FAILED...", error);
//       }
//     );
//   });

//Getting the name and email from the DOM
let params = {
name : document.getElementById('name').value,
email : document.getElementById('email').value,
subject : document.getElementById('subject').value,
message : document.getElementById('message').value
};

//Getting the button from the DOM
let submitButton = document.getElementById('button') 

const serviceID = "service_a8d1bxp";
const templateID = "template_ce99ea5";

//Add event listener on click to the button - notice i added the event as argument to the function
submitButton.addEventListener('click', function(event){

    //prevent the reload of the page. here i prevent the event.
    event.preventDefault()

    //Sending the email with the name and email
    emailjs.send(serviceID, templateID, params)
        .then(
            function (response) {
                console.log("SUCCESS", response);
                
            },
            function (error) {
                console.log("FAILED", error);
                
            }

        );
})