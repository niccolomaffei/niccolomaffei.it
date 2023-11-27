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

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceID = "service_a8d1bxp";
    const templateID = "template_ce99ea5";

    emailjs.sendForm(serviceID, templateID, this).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error);
        alert("FAILED...", error);
      }
    );
  });