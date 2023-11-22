function sendMail(){
  let parameters = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value
  }

  emailjs.send("service_a8d1bxp", "template_ce99ea5", parameters).then(alert("Email inviata con successo!"))
}